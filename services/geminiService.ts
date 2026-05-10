import { GoogleGenAI } from "@google/genai";
import { UserProfile, Scholarship } from "../types";

export const searchScholarships = async (profile: UserProfile): Promise<Scholarship[]> => {
  // Move the initialization INSIDE the function
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please check your Vercel Environment Variables.");
  }
  
  const ai = new GoogleGenAI({ apiKey });

  const { origin, target, targetUniversity, level, field, maxFee, englishStatus, englishScore } = profile;
  
  let englishInstruction = "";
  if (englishStatus === 'EPC') {
    englishInstruction = `
      CRITICAL PROTOCOL: User has an English Proficiency Certificate (EPC) only.
      STRICTLY EXCLUDE scholarships explicitly requiring IELTS/TOEFL. 
      ONLY INCLUDE those accepting EPC, Medium of Instruction (MOI), or with no requirement.
    `;
  } else if (englishStatus === 'NONE') {
    englishInstruction = `
      CRITICAL PROTOCOL: User has NO English proficiency proof.
      STRICTLY EXCLUDE scholarships requiring IELTS, TOEFL, or EPC.
    `;
  } else {
    englishInstruction = `User has IELTS/TOEFL (${englishScore}). Full database access authorized.`;
  }

  const prompt = `
    You are the "Zynome Scholar AI", a specialized education advisor.
    
    User Profile:
    - Origin: ${origin}
    - Target: ${target}
    - Specific University Preference: ${targetUniversity || "None"}
    - Opportunity Type/Level: ${level}
    - Field: ${field}
    - Max Application Fee: ${maxFee || "No Preference"}
    - English Status: ${englishStatus}
    
    MISSION:
    1. Find high-value academic opportunities (Scholarships/Admissions/Internships).
    2. Filter strictly based on eligibility.
    3. If "Max Application Fee" is specified (e.g., "Free"), strictly prioritize opportunities that match.
    4. If "Specific University Preference" is set, prioritize that institution if opportunities exist, otherwise find nearby/similar alternatives.
    5. Sort strictly by **Deadline Urgency** (Nearest date = Rank #1).
    6. Limit results to the **Top 20** highest-quality matches.

    ${englishInstruction}

    Output Format:
    Return ONLY a raw JSON array of objects.
    Each object must have:
    - "rank": Integer (1 to 20).
    - "name": Name of Scholarship.
    - "university": Name of University (if specific) or "Various Institutions".
    - "country": Country.
    - "deadline": Specific date string (e.g. "Jan 15, 2026").
    - "daysRemaining": Integer (days left).
    - "englishRequirement": E.g. "EPC Accepted", "IELTS 6.5", "No Doc Req".
    - "applicationFee": Cost (e.g. "$50", "€20") or "Free".
    - "url": Direct link.
    - "stipend": Value (e.g. "€1200/month", "Full Tuition", "$2000/year").
    - "minCgpa": Number (e.g. 2.5, 3.0).
    - "docs": Array of 3-4 strings (e.g. ["Passport", "Transcript", "Motivation Letter"]).
    - "winChance": Integer (estimated percentage based on profile, e.g. 85).

    Example JSON:
    [
      { 
        "rank": 1, 
        "name": "Stipendium Hungaricum", 
        "university": "Various Universities", 
        "country": "Hungary", 
        "deadline": "Jan 15, 2026", 
        "daysRemaining": 5, 
        "englishRequirement": "EPC Accepted", 
        "applicationFee": "Free",
        "url": "https://stipendiumhungaricum.hu",
        "stipend": "HUF 43,700/month",
        "minCgpa": 2.8,
        "docs": ["Passport", "Transcript", "Medical Cert"],
        "winChance": 92
      }
    ]
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview", 
      contents: prompt,
      config: {
        // ❌ REMOVE OR COMMENT OUT THIS LINE:
        // tools: [{ googleSearch: {} }], 
        responseMimeType: "application/json",
      }
    });

    let text = response.text;
    
    if (!text) {
        return [];
    }

    // Clean Markdown for JSON parsing
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();

    const start = text.indexOf('[');
    const end = text.lastIndexOf(']');

    if (start !== -1 && end !== -1) {
        const jsonStr = text.substring(start, end + 1);
        try {
            const data: Scholarship[] = JSON.parse(jsonStr);
            return data;
        } catch (e) {
            console.error("Failed to parse JSON", e);
            throw new Error("Data corruption. Please retry.");
        }
    } else {
        // Fallback: try parsing the entire text if no markdown blocks found
        try {
            const data: Scholarship[] = JSON.parse(text);
            return data;
        } catch (e) {
             return [];
        }
    }

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
