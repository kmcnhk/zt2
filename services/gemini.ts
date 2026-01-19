import { GoogleGenAI } from "@google/genai";

// We move the initialization INSIDE the function (Lazy Initialization).
// This prevents the entire app from crashing (White Screen of Death) 
// if the GoogleGenAI constructor throws an error due to missing config 
// at the moment the website loads.

export const generateDrill = async (techniqueName: string, intensity: 'LOW' | 'HIGH', context: 'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR') => {
  try {
    // Initialize strictly inside the function
    // Use a fallback dummy key if process.env.API_KEY is missing to prevent constructor crash
    const apiKey = process.env.API_KEY || 'dummy_key_to_prevent_crash';
    const ai = new GoogleGenAI({ apiKey });
    
    const modelId = 'gemini-3-flash-preview';
    
    // Updated prompt for Chinese output
    const prompt = `
      Act as a world-class Krav Maga and Koryu Jujutsu instructor.
      Create a specific, 5-minute training drill for the technique: "${techniqueName}".
      Context: ${context} (Civilian focuses on safety/escape, Military on control/lethality, Instructor focuses on teaching/safety).
      Intensity Level: ${intensity}.
      Language: Simplified Chinese (简体中文).
      
      Format the output as a JSON object with these keys:
      - drillName: A catchy name for the drill in Chinese.
      - setup: Equipment or partners needed in Chinese.
      - instructions: Step-by-step guide (max 4 steps) in Chinese.
      - stressFactor: How to add stress (e.g., dim lights, yelling, timer) in Chinese.
      
      Keep it brief and practical.
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
    // Fallback mock data in Chinese so the user still sees something
    return {
      drillName: `${techniqueName} 压力反应训练`,
      setup: "训练搭档与手靶",
      instructions: [
        "闭眼开始 (模拟受害者视角)。",
        "搭档发出随机威胁信号 (推搡或喊叫)。",
        `爆发性执行 ${techniqueName} 技术。`,
        "完成后立即360度扫描环境寻找出口。"
      ],
      stressFactor: "搭档在攻击前进行干扰以制造心理压力。"
    };
  }
};