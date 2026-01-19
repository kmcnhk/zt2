// -------------------------------------------------------------------------
// 服务说明: 
// 本地数字教官 (Local Digital Instructor)
// 鉴权方式: 无需 Key，完全本地运行
// -------------------------------------------------------------------------

// 定义返回的数据结构
interface DrillResponse {
  drillName: string;
  setup: string;
  instructions: string[];
  stressFactor: string;
}

// -------------------------------------------------------------------------
// === 在这里修改定制内容 (CUSTOM DRILL DATABASE) ===
// -------------------------------------------------------------------------
// 这里存储了特定技术的“定制化”训练方案。
// 格式: '技术名称': { ...内容... }
const PRESET_DRILLS: Record<string, DrillResponse> = {
  
  // 示例 1: 针对 "360防御" 的定制训练
  "360防御": {
    drillName: "360度雷暴防御反应训练",
    setup: "需要 1 名搭档，佩戴拳击手套或持海绵棒。",
    instructions: [
      "1. 练习者闭眼站立（中性姿态），双手自然下垂。",
      "2. 搭档在圆周任意角度发出‘嘿’的声音信号，并发起摆拳攻击。",
      "3. 练习者听到声音瞬间睁眼，本能执行 360防御 + 同时出拳反击。",
      "4. 防御后立即切入近身（Clinch）并在 2秒内完成 5次膝撞。",
      "5. 猛推开搭档，扫描环境。"
    ],
    stressFactor: "视觉剥夺 + 随机角度攻击"
  },

  // 示例 2: 针对 "击裆" 的定制训练
  "击裆 (Groin Strike)": {
    drillName: "绝境反击：黄金一击 (Golden Strike)",
    setup: "需要厚踢靶 (Kick Shield) 或 护裆。",
    instructions: [
      "1. 练习者被搭档从后方熊抱或勒颈（模拟受限状态）。",
      "2. 练习者需先破坏重心，制造出腿部空间。",
      "3. 使用手掌根部或小臂创造距离，同时进行‘隐蔽且强力’的抽击/顶膝。",
      "4. 击打必须伴随战术吼叫 (Kiai)，随后全速冲刺逃离 10米。",
      "5. 每组重复 20次，直到力竭。"
    ],
    stressFactor: "身体受限状态下的爆发力输出"
  },

  // 可以在这里继续添加更多... 
  // 只要 key (冒号前面的字) 和 data.ts 里的 technique.name 一致即可匹配。
};

// -------------------------------------------------------------------------
// === 通用模版生成器 (GENERIC TEMPLATE) ===
// -------------------------------------------------------------------------
// 如果上面的列表里找不到对应的动作，就用这个模版自动生成。
// 这样您不需要为几百个动作一个个写，系统会自动填空。

const generateGenericDrill = (techName: string, intensity: string): DrillResponse => {
  const isHighIntensity = intensity === 'HIGH';

  return {
    drillName: `${techName} · ${isHighIntensity ? '压力灌注模组' : '技术固化模组'}`,
    setup: isHighIntensity 
      ? "需要全套护具，干扰员 1-2 名，计时器。" 
      : "需要 1 名搭档，手靶或脚靶。",
    instructions: [
      `1. 【启动】练习者在原地进行 10秒 ${isHighIntensity ? '波比跳 (Burpees)' : '快速碎步'} 以提升心率。`,
      `2. 【触发】搭档发出视觉或听觉信号（举靶或喊口令）。`,
      `3. 【执行】练习者爆发性完成 "${techName}" 动作。要求动作${isHighIntensity ? '牺牲部分精度换取最大破坏力' : '标准、清晰、连贯'}。`,
      "4. 【跟进】动作完成后，立即衔接 3 次战术扫描 (Scan)，确认周围环境安全。",
      "5. 【循环】保持战术站架，等待下一次信号。每组持续 2 分钟。"
    ],
    stressFactor: isHighIntensity 
      ? "心率控制 (160+ BPM) + 外部语言干扰" 
      : "动作精准度与反应时延"
  };
};

// -------------------------------------------------------------------------
// 主函数
// -------------------------------------------------------------------------
export const generateDrill = async (techniqueName: string, intensity: 'LOW' | 'HIGH', context: 'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR') => {
  
  // 模拟 AI "思考" 的延迟，让用户感觉系统正在处理 (提升体验)
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. 尝试查找预设库
  // 注意：为了匹配方便，这里去掉了一些特殊符号或转成通用格式匹配也可以，
  // 目前是精确匹配 data.ts 里的名字。
  const exactMatch = PRESET_DRILLS[techniqueName]; // 精确匹配
  const partialMatchKey = Object.keys(PRESET_DRILLS).find(k => techniqueName.includes(k)); // 模糊匹配
  
  if (exactMatch) {
    return exactMatch;
  }
  
  if (partialMatchKey) {
    // 如果名字包含关键词（比如 "360"），也返回对应的
    return PRESET_DRILLS[partialMatchKey];
  }

  // 2. 如果没找到，使用通用模版
  return generateGenericDrill(techniqueName, intensity);
};