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
    
    // -------------------------------------------------------------------------
    // --- 可以在这里修改 AI 的生成指令 (PROMPT) ---
    // 你可以修改下方的文字，来调整 AI 生成训练计划的风格、语气或侧重点。
    // -------------------------------------------------------------------------
    const prompt = `
      角色设定: 你是 KMCN (中国马伽术) 的资深格斗教官，拥有丰富的实战经验。
      任务: 为技术动作 "${techniqueName}" 设计一个高效率的 5分钟专项训练 (Drill)。
      
      当前训练背景: ${context} 
      (CIVILIAN = 民用自卫，核心是：观察、快速反应、制造距离、安全逃离。避免与对手过多纠缠。)
      (MILITARY = 军警/特勤，核心是：控制中轴线、一招制敌、关节技、古柔术摔投技、武器留存、压制逮捕、甚至致命打击。)
      (INSTRUCTOR = 教官培训，核心是：动作的标准度、纠错细节、教学引导。)
      
      强度等级: ${intensity}

      请严格按照以下 JSON 格式返回 (不要包含Markdown格式符号，只返回纯JSON):
      {
        "drillName": "训练名称 (取一个专业且响亮的中文名字)",
        "setup": "所需器材或搭档配合要求 (中文)",
        "instructions": [
           "步骤1...",
           "步骤2...",
           "步骤3...",
           "步骤4 (可选)"
        ],
        "stressFactor": "如何在这个训练中增加压力? (例如: 闭眼开始、倒数计时、干扰大喊、多重任务)"
      }
    `;
    // -------------------------------------------------------------------------

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
      drillName: `${techniqueName} 压力反应模组 (离线版)`,
      setup: "训练搭档 x 1，手靶 x 1",
      instructions: [
        "闭眼站立 (模拟受害者视角/被偷袭)。",
        "搭档发出随机威胁信号 (推搡肩部或大声喊叫)。",
        `爆发性执行 "${techniqueName}" 技术动作，强调动作的完整性。`,
        "完成后立即进行 360度环境扫描，寻找逃生出口。"
      ],
      stressFactor: "搭档在攻击前进行言语干扰或肢体推搡，制造心理压力。"
    };
  }
};