import { GoogleGenAI } from "@google/genai";

// We move the initialization INSIDE the function (Lazy Initialization).
// This prevents the entire app from crashing (White Screen of Death) 
// if the GoogleGenAI constructor throws an error due to missing config 
// at the moment the website loads.

export const generateDrill = async (
  techniqueName: string, 
  techniqueDetails: string,
  themeTitle: string,
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED', 
  context: 'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR'
) => {
  try {
    // Initialize strictly inside the function
    // Use a fallback dummy key if process.env.API_KEY is missing to prevent constructor crash
    const apiKey = process.env.API_KEY || 'dummy_key_to_prevent_crash';
    const ai = new GoogleGenAI({ apiKey });
    
    const modelId = 'gemini-3-flash-preview';
    
    // Updated prompt for Professional, Non-repetitive Chinese output with Difficulty Logic
    const prompt = `
      You are a World-Class Krav Maga Expert (Level: Expert 5) and Tactical Instructor.
      Your task is to design a specific, high-quality "Micro-Training Plan" (10-15 mins) for a specific technique.
      
      Input Data:
      - Course Theme: "${themeTitle}"
      - Technique: "${techniqueName}"
      - Technique Details: "${techniqueDetails}"
      - Target Audience: ${context} (Civilian: Safety/Escape, Military: Control/Kill, Instructor: Pedagogy/Correction).
      - Difficulty Level: ${difficulty}

      Difficulty Guidelines:
      - BEGINNER: Focus on slow mechanics, body mechanics, static partners, and safety. Zero stress.
      - INTERMEDIATE: Add moderate resistance, time pressure, and dynamic movement.
      - ADVANCED: High stress, multiple attackers, exhaustion drills (Tabata), complex decision making.

      Instructions:
      1. DO NOT generate generic advice like "warm up" or "stretch".
      2. The drill must be HIGHLY SPECIFIC to the technique described in "${techniqueDetails}".
      3. Use professional terminology (e.g., "Scanning", "Burst", "Muscle Memory", "Stress Inoculation").
      4. Language: Simplified Chinese (简体中文).
      
      Output Format (JSON):
      {
        "drillName": "A professional, tactical name for this specific drill (include difficulty in name)",
        "setup": "Required gear (e.g., Focus Mitts, Kick Shield, Replica Knife, Timer) and partner setup.",
        "phase1_technical": "Step-by-step breakdown for mechanics/muscle memory (2-3 steps). Focus on biomechanics.",
        "phase2_stress": "A specific stress scenario drill tailored to the ${difficulty} level. How to induce stress specifically for THIS technique.",
        "critical_checkpoints": "2-3 common mistakes to watch out for (Instructor's Eye)."
      }
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);

  } catch (error) {
    console.warn("Gemini API Error (Falling back to offline mode):", error);
    // Fallback mock data that looks professional
    return {
      drillName: `${techniqueName} 战术强化训练 (离线模式 - ${difficulty})`,
      setup: "训练搭档、手靶 x2、倒计时器。",
      phase1_technical: "1. 慢速分解动作，强调核心发力与重心移动。\n2. 增加速度，进行 '1-2-技术-扫描' 的组合练习。",
      phase2_stress: "30秒高强度爆发：搭档持靶不断逼近，防守者必须在后退中完成技术并在最后5秒进行冲刺逃离。",
      critical_checkpoints: "1. 永远不要在完成技术后停留在原地。\n2. 注意观察周围环境(Scanning)。"
    };
  }
};