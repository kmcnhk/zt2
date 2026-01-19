import { Theme } from './types';

export const THEMES: Theme[] = [
  // --- CIVILIAN THEMES ---
  {
    id: 'civ-1',
    category: 'CIVILIAN',
    difficulty: 'BEGINNER',
    title: '街头格斗终结者：从被动挨打到瞬间反杀',
    hooks: ['街头生存法则：3秒结束战斗', '拒绝霸凌：弱者反击的必修课', '古流柔术的街头应用'],
    description: '针对生活中常见的推搡、挑衅及街头斗殴。不依赖力量，而是利用古流柔术的关节控制与人体结构弱点，结合马伽术的快速打击，实现瞬间制服。',
    principles: [
      '永远不要让自己被围在角落 (逃生通道原则)',
      '先发制人，攻击感官 (眼、喉、裆)',
      '利用对方力量破坏其重心 (合气原理)',
      '打完即跑，不要恋战'
    ],
    scenarios: [
      { danger: '对方单手推搡胸部', response: '古流柔术折腕 (Kote Gaeshi) + 侧踹膝盖' },
      { danger: '对方双手揪衣领', response: '合气道天大落 (Tenchin Nage) + 膝撞面部' },
      { danger: '对方挥舞王八拳进攻', response: '360防御 + 柔道体落 (Tai Otoshi) 摔法' },
      { danger: '对方试图抱摔 (Double Leg)', response: 'Sprawl (防摔) + 肘击后脑 + 断头台控制' },
      { danger: '倒地后对方站立踢头', response: '柔术地面防守 + 蹬腿破坏膝关节' }
    ],
    techniques: [
      { name: '小手返 (Kote Gaeshi)', details: '古流柔术核心折腕技，利用关节反向施压' },
      { name: '入身投 (Irimi Nage)', details: '合气道借力打力，瞬间破坏对方平衡' },
      { name: '大外刈 (Osoto Gari)', details: '柔道强力摔法，直接将对手砸向地面' },
      { name: '体落 (Tai Otoshi)', details: '利用转体将对方绊倒的柔道技术' },
      { name: '断头台 (Guillotine)', details: '针对颈部的绞杀控制' },
      { name: '二教控制 (Nikkyo)', details: '针对手腕与肘部的剧痛压制' },
      { name: '铁锤拳 (Hammer Fist)', details: '攻击面部与后脑的打击技' },
      { name: '肘击 (Elbow Slash)', details: '近距离如刀锋般的肘部切击' },
      { name: '击裆 (Groin Strike)', details: '生死关头的必要手段' },
      { name: '插眼 (Eye Gouge)', details: '阻断对方视线的战术动作' },
      { name: '战术起立', details: '在防御中安全回到站立姿态' },
      { name: '四方投 (Shiho Nage)', details: '折叠手臂破坏肩关节的投技' }
    ],
    tags: ['街头防卫', '古流柔术', '柔道摔法']
  },
  {
    id: 'civ-2',
    category: 'CIVILIAN',
    difficulty: 'BEGINNER',
    title: '女子防身特辑：反强暴与关节技逃脱',
    hooks: ['绝不成为受害者：女性反暴力指南', '以柔克刚：利用关节技反制力量差异', '不仅是防身，是生存'],
    description: '专为女性设计，针对体型力量悬殊的场景。重点在于反抓手、反纠缠，利用古流自卫柔术的关节技（小关节控制）和地面逃脱技术。',
    principles: [
      '攻击软弱部位：眼、喉、裆 (人体痛点)',
      '利用杠杆原理而非蛮力 (Leverage)',
      '在此刻，尖叫也是武器 (威慑)',
      '绝不让背部贴地超过3秒'
    ],
    scenarios: [
      { danger: '从后方被熊抱 (连手臂)', response: '重心下沉 + 手指掰离 (小关节) + 胯部顶摔' },
      { danger: '被抓住头发拖拽', response: '双手封锁 + 柔术转身投 (利用杠杆)' },
      { danger: '被按在墙上掐脖子', response: '合气道二教 (Nikkyo) 折腕 + 肘击面部' },
      { danger: '地面骑乘位掐脖 (强暴位)', response: '柔术起桥 (Upa) + 翻转逃脱' },
      { danger: '手腕被强力抓握', response: '针对虎口弱点的旋转解脱 + 踢击' }
    ],
    techniques: [
      { name: '二教折腕 (Nikkyo)', details: '针对手腕S型锁死的剧痛控制' },
      { name: '三教控制 (Sankyo)', details: '利用螺旋劲控制手腕与肩膀' },
      { name: '起桥 (Bridge/Upa)', details: '地面柔术核心爆发力逃脱' },
      { name: '虾行 (Shrimping)', details: '地面移动与防守恢复' },
      { name: '咬合技术', details: '近身被压制时的撕咬反击' },
      { name: '拇指压迫', details: '针对喉结/眼睛的压迫技' },
      { name: '反关节臂锁', details: '站立姿态下的直臂反关节' },
      { name: '剪刀扫 (Scissor Sweep)', details: '利用双腿杠杆将对方扫倒' },
      { name: '掌根推击', details: '击打下巴造成脑震荡' },
      { name: '折指技', details: '古流柔术中的小关节破坏' },
      { name: '转身背负投', details: '利用对方拉扯力道的摔法' },
      { name: '声音震慑', details: '战术吼叫破坏对方节奏' }
    ],
    tags: ['女子防身', '反强暴', '关节技']
  },
  {
    id: 'civ-3',
    category: 'CIVILIAN',
    difficulty: 'BEGINNER',
    title: '校园铁盾：青少年反霸凌与自信',
    hooks: ['拒绝校园霸凌：做自己的保镖', '自信是最好的防线', '不动手也能制服对方'],
    description: '专为青少年设计。重点在于建立自信、语言震慑（De-escalation）以及在不造成严重伤害的前提下挣脱控制（Headlock, 抓衣领）。',
    principles: [
      '自信的体态可以避免80%的麻烦',
      '大声喝止 (Verbal Command)',
      '挣脱优于打击 (Escape > Strike)',
      '寻求援助并非软弱 (Get Help)'
    ],
    scenarios: [
      { danger: '被同学在走廊推搡', response: '战术站位 (Stance) + 语言警告' },
      { danger: '被夹颈（Headlock）勒住', response: '破坏重心 + 抓握面部翻转解脱' },
      { danger: '被多人围堵恐吓', response: '寻找缺口 + 突然冲刺逃离' },
      { danger: '背包被强行拉扯', response: '旋转背包带脱身 + 推开距离' },
      { danger: '被按在地上羞辱', response: '柔术起桥翻转 + 快速站起' }
    ],
    techniques: [
      { name: '战术站位', details: '保护自己的防御性姿态' },
      { name: '语言震慑', details: '利用声音建立边界' },
      { name: '夹颈解脱', details: '应对常见的Headlock勒脖' },
      { name: '抓手腕解脱', details: '利用虎口弱点旋转挣脱' },
      { name: '抓衣领解脱', details: '扣手腕破坏对方重心' },
      { name: '防推搡技术', details: '重心下沉化解推力' },
      { name: '倒地起身', details: '战术起立技术' },
      { name: '背包防御', details: '利用书包阻挡攻击' },
      { name: '熊抱解脱', details: '应对背后抱腰的动作' },
      { name: '掌根推击', details: '拉开距离的非致命推击' },
      { name: '侧闪移动', details: '不与对方正面硬抗' },
      { name: '求救信号', details: '引起老师/成人注意' }
    ],
    tags: ['反霸凌', '青少年安全', '自信建立']
  },
  {
    id: 'civ-4',
    category: 'CIVILIAN',
    difficulty: 'INTERMEDIATE',
    title: '路怒症与车内防卫：狭小空间的生死时速',
    hooks: ['别让方向盘成为你的棺材板', '车内关节技：坐姿下的反制', '路怒终结者'],
    description: '专门针对驾驶员和乘客的安全。包含被拉出车外、车窗被砸、后座勒颈等高危场景。重点是狭窄空间内的关节折叠与控制。',
    principles: [
      '车锁是第一道防线',
      '安全带解脱的时机',
      '车辆本身就是巨型武器',
      '狭窄空间多用肘膝与关节技'
    ],
    scenarios: [
      { danger: '路怒者拍打车窗试图拉门', response: '检查锁门 + 倒车/驶离' },
      { danger: '被强行拉出车外', response: '钩住方向盘固定 + 蹬踹面部 + 手臂十字固' },
      { danger: '后座歹徒勒脖子', response: '掰折对方手指 (小关节) + 转身肘击' },
      { danger: '副驾驶歹徒持刀威胁', response: '双手控制持刀手腕 (二教锁) + 猛撞仪表盘' },
      { danger: '在此刻被拖拽进后备箱', response: '破坏车尾灯线路/踢后座锁' }
    ],
    techniques: [
      { name: '安全带防御', details: '利用安全带做勒颈或防御盾' },
      { name: '方向盘锁臂', details: '利用方向盘做杠杆折臂' },
      { name: '坐姿后蹬', details: '爆发力腿法' },
      { name: '短肘击', details: '狭小空间的面部切割' },
      { name: '头枕撞击', details: '抓对方头发撞击硬物' },
      { name: '车门夹击', details: '利用车门撞击对方身体/四肢' },
      { name: '钥匙穿刺', details: '握持钥匙攻击软组织' },
      { name: '后方勒颈解脱', details: '针对气管的解脱术' },
      { name: '手腕二教 (Nikkyo)', details: '狭窄空间内的手腕强控' },
      { name: '快速离车术', details: '解开安全带的战术动作' },
      { name: '鸣笛震慑', details: '持续鸣笛制造心理压力' },
      { name: '挡风玻璃踢击', details: '双脚踹破玻璃逃生' }
    ],
    tags: ['反劫车', '车内格斗', '狭窄空间']
  },
  {
    id: 'civ-5',
    category: 'CIVILIAN',
    difficulty: 'ADVANCED',
    title: '刀锋之下：持刀抢劫与反恐生存',
    hooks: ['面对利刃的终极指南', 'Run-Hide-Fight 实战应用', '背包盾牌与反抢劫术'],
    description: '融合了个人反抢劫与公共场所反恐技术。教授如何应对持刀索财的歹徒，以及在火车站、广场遭遇无差别砍杀时的生存策略。',
    principles: [
      '财物可以重来，生命只有一次',
      '面对无差别袭击：利用长物阻隔',
      '背包是你的移动盾牌',
      '控制持刀手比击打更重要'
    ],
    scenarios: [
      { danger: '刀抵腹部索要钱财', response: '示弱交涉 + 瞬间抓腕小手返 (Kote Gaeshi)' },
      { danger: '暴徒持砍刀冲入人群', response: 'S型奔跑逃离 + 寻找硬掩体' },
      { danger: '被逼入死角无路可逃', response: '背包做盾牌 (Shield) + 猛踹膝盖' },
      { danger: '对方持刀上挑 (Upward Stab)', response: '身体后撤 (Hollow out) + 下压防守' },
      { danger: '使用灭火器/椅子反击', response: '喷射致盲/投掷 + 寻找逃生口' }
    ],
    techniques: [
      { name: '背包盾牌术', details: '正确握持背包保护颈动脉与心脏' },
      { name: '360度防御', details: '全方位手臂格挡' },
      { name: '俄式缠腕 (2-on-1)', details: '双手控制单手腕的强力控制' },
      { name: '小手返夺刀', details: '利用腕关节折叠迫使松手' },
      { name: '灭火器战术', details: '喷射与砸击的结合' },
      { name: '防暴叉/椅子使用', details: '利用长物体保持距离' },
      { name: '杠杆夺刀', details: '利用手指/手腕反关节' },
      { name: '侧闪击打', details: '避开攻击线同时反击' },
      { name: '正蹬阻击', details: '利用腿长优势防止近身' },
      { name: '止血急救', details: '战术止血带 (Tourniquet) 使用' },
      { name: '群体压制', details: '多对一控制持刀暴徒' },
      { name: '逃生路线规划', details: '快速识别安全出口' }
    ],
    tags: ['夺刀术', '反恐', '公共安全']
  },
  {
    id: 'civ-6',
    category: 'CIVILIAN',
    difficulty: 'INTERMEDIATE',
    title: '地面修罗：倒地后的生存法则',
    hooks: ['这不是竞技柔术，是生存', '倒地绝不意味着结束', '防踢、防踩与快速站起'],
    description: '街头格斗中一旦倒地，就是最危险的时刻。本课程不教你复杂的地面缠斗，只教你如何在大体重对手、多名敌人围攻下保护自己并安全站起。',
    principles: [
      '永远不要让背部平贴地面 (Stay Active)',
      '双腿是你的第一道防线 (Legs as Shield)',
      '保护头部，防止足球踢 (Protect Head)',
      '寻找一切机会站起来 (Get Up)'
    ],
    scenarios: [
      { danger: '被击倒地，对方站立准备踢头', response: '地面防御姿态 + 蹬腿阻击膝盖/胫骨' },
      { danger: '对方试图扑入怀中 (Guard)', response: '双腿蹬开 (Up Kick) + 战术起立' },
      { danger: '被骑乘位压制打脸', response: '起桥 (Bridge) 破坏平衡 + 翻转逃脱' },
      { danger: '被侧压控制 (Side Control)', response: '虾行 (Shrimp) 恢复防守 + 膝盖顶入' },
      { danger: '多人围攻踢踩', response: '龟缩防守 (Turtle) 保护后脑 + 翻滚靠近障碍物' }
    ],
    techniques: [
      { name: '战术起立', details: '在防御状态下安全回到站立' },
      { name: '地面防御姿态', details: '利用双腿控制距离' },
      { name: '起桥 (Upa)', details: '爆发力破坏骑乘位平衡' },
      { name: '虾行 (Shrimping)', details: '地面移动的核心技术' },
      { name: '剪刀扫 (Scissor Sweep)', details: '利用杠杆扫倒站立对手' },
      { name: '足跟勾 (Heel Hook)', details: '针对膝关节的毁灭性打击 (仅限绝境)' },
      { name: '地面蹬踹', details: '攻击对方膝盖/腹股沟' },
      { name: '龟缩防守', details: '保护要害防止重击' },
      { name: '单腿抱摔 (Single Leg)', details: '地面发动抱腿摔' },
      { name: '断头台防守', details: '应对对方俯身冲撞' },
      { name: '武器防护', details: '倒地时防止腰间武器被抢' },
      { name: '环境利用', details: '利用墙角防止被围攻' }
    ],
    tags: ['地面格斗', '反摔', '柔术生存']
  },
    {
    id: 'civ-7',
    category: 'CIVILIAN',
    difficulty: 'ADVANCED',
    title: '枪械威胁应对：生死一线的抉择',
    hooks: ['枪口下的赌博：夺枪还是投降？', '特工级夺枪术', 'Active Shooter 场景下的生存策略'],
    description: '极高风险。仅在确信对方会开枪（处决式）或无法逃脱时使用。重点是重定向火线，并利用杠杆原理夺枪。',
    principles: [
      '重定向火线 (Redirect)',
      '控制枪管/套筒 (Control)',
      '猛烈反击 (Attack)',
      '夺取武器 (Disarm)'
    ],
    scenarios: [
      { danger: '手枪指头 (正面)', response: '侧闪拍挡 + 抓握套筒 + 踢裆' },
      { danger: '手枪抵背', response: '快速转身扫开枪管 + 腋下夹紧手臂 + 卷腕夺枪' },
      { danger: '手枪指侧面头部 (人质)', response: '双手举起 + 猛转体推开枪口 + 手腕折叠 (Kote Gaeshi)' },
      { danger: '长枪/步枪指胸', response: '切入内围拍开枪管 + 刺刀式突进' },
      { danger: '枪击发生时的掩体选择', response: '辨别掩体 (Cover) 与遮蔽物 (Concealment)' }
    ],
    techniques: [
      { name: '火线重定向', details: '移开身体避开弹道' },
      { name: '套筒抓握', details: '防止手枪复进卡壳' },
      { name: '武器留存', details: '防止对方抽回武器' },
      { name: 'C型手控制', details: '控制枪口指向' },
      { name: '膝撞腹股沟', details: '控制同时也攻击' },
      { name: '扳机护圈杠杆', details: '利用护圈折断手指' },
      { name: '枪口偏转', details: '持续改变枪口方向' },
      { name: '旋转夺枪', details: '利用扭矩夺取武器' },
      { name: '排障上膛', details: '夺枪后的战术动作' },
      { name: '逃生规划', details: '枪击现场的路线选择' },
      { name: '扑倒防御', details: '最后手段的近身扑击' },
      { name: '肉盾战术', details: '极端情况利用施暴者挡子弹' }
    ],
    tags: ['夺枪术', '反恐', '高风险']
  },
  {
    id: 'civ-8',
    category: 'CIVILIAN',
    difficulty: 'INTERMEDIATE',
    title: '居家入侵与家庭保卫：最后的堡垒',
    hooks: ['当危险敲响家门', '家庭防卫计划：保护挚爱', '狭窄走廊与卧室的战斗'],
    description: '针对入室抢劫、盗窃演变成的暴力。如何利用家里的地形和物品，配合柔道摔法和器械保护家人。',
    principles: [
      '建立安全屋 (Safe Room)',
      '沟通暗号 (Family Code Word)',
      '楼梯口是最佳防守点 (扼守咽喉)',
      '不要为了财物去搜寻入侵者'
    ],
    scenarios: [
      { danger: '开门瞬间被强行闯入', response: '身体顶门 + 猛踹膝盖 + 柔道扫踢' },
      { danger: '在床上惊醒发现入侵者', response: '利用枕头/被子致盲 + 蹬腿保持距离' },
      { danger: '狭窄走廊遭遇战', response: '利用墙壁支撑前踢 (Teep)' },
      { danger: '保护身后的家人', response: '身体阻挡 + 指挥家人撤退/报警' },
      { danger: '厨房遭遇持刀歹徒', response: '利用椅子/厨具投掷 + 寻找长武器' }
    ],
    techniques: [
      { name: '门禁阻挡', details: '身体重心顶门技术' },
      { name: '走廊阻击', details: '狭长地带的腿法应用' },
      { name: '简易武器', details: '台灯/灭火器的战术使用' },
      { name: '强光致盲', details: '战术手电的使用' },
      { name: '下路攻击', details: '针对膝盖胫骨的破坏' },
      { name: '楼梯防御', details: '利用高低差踢击' },
      { name: '藏械策略', details: '家中防御武器的放置' },
      { name: '安全屋流程', details: '快速撤退与固守' },
      { name: '近身肘击', details: '极近距离的打击' },
      { name: '家具掩体', details: '利用沙发/床做防御' },
      { name: '双人战术', details: '夫妻/室友配合制敌' },
      { name: '报警话术', details: '准确传达信息' }
    ],
    tags: ['家庭防卫', '入侵应对', '简易武器']
  },
  {
    id: 'civ-9',
    category: 'CIVILIAN',
    difficulty: 'INTERMEDIATE',
    title: '短棍防卫与菲律宾魔杖实战',
    hooks: ['雨伞、自拍杆的战术应用', '菲律宾魔杖 (Kali) 入门', '以长制短的智慧'],
    description: '融合菲律宾魔杖 (Kali/Escrima) 与民用短棍技术。教授如何利用手中的雨伞、登山杖进行有效防御，保持安全距离。',
    principles: [
      '武器即肢体的延伸 (Extension)',
      '打击手部 (Defang the Snake)',
      '利用流动性化解力量 (Flow)',
      '控制距离 (Range Control)'
    ],
    scenarios: [
      { danger: '对方持木棍攻击', response: '屋顶式格挡 (Roof Block) + 击打手腕' },
      { danger: '对方试图抢夺你的棍子', response: '螺旋缠绕 (Snake Disarm) + 关节控制' },
      { danger: '遭遇持刀攻击', response: '利用棍长优势击打持刀手 (Defanging)' },
      { danger: '使用雨伞作为盾牌', response: '撑开雨伞致盲 + 前刺' },
      { danger: '近身被缠抱', response: 'Punyo (棍尾) 击打面部/锁骨' }
    ],
    techniques: [
      { name: 'X型打击', details: '对角线连续打击技术' },
      { name: 'Abanico (扇面打)', details: '快速手腕翻转打击' },
      { name: 'Punyo 击打', details: '近身利用棍尾攻击' },
      { name: '蛇形缴械', details: '缠绕对方手臂夺取武器' },
      { name: '屋顶格挡', details: '防御上方垂直攻击' },
      { name: '推棍技术', details: '双手持棍推击创造距离' },
      { name: '手腕杠杆', details: '利用棍子增强关节技力量' },
      { name: '红东多 (Redondo)', details: '圆形轨迹回旋打击' },
      { name: '击打神经', details: '针对膝盖/手肘的麻痹打击' },
      { name: '雨伞战术', details: '开伞与收伞的格斗应用' },
      { name: '步法移动', details: '三角步法 (Triangle Footwork)' },
      { name: '缴械术', details: '夺取对方棍棒的技术' }
    ],
    tags: ['防卫器械', '菲律宾魔杖', '长距离']
  },

  // --- MILITARY / POLICE THEMES ---
  {
    id: 'mil-1',
    category: 'MILITARY',
    difficulty: 'INTERMEDIATE',
    title: 'FBI特工必修：近身控制与逮捕术 (CQC)',
    hooks: ['五秒制服：从接触到手铐', '古流柔术逮捕技', '不仅是打倒，是彻底控制'],
    description: '针对执法人员。重点在于如何在保护自己武器的同时，利用古流柔术的关节锁和投技，迅速将嫌疑人从站立控制到地面并完成上铐。',
    principles: [
      '武器留存第一 (Retention)',
      '控制中轴线 (Centerline)',
      '疼痛服从原则 (Pain Compliance)',
      '团队配合逮捕 (Contact & Cover)'
    ],
    scenarios: [
      { danger: '嫌疑人推搡并试图抢枪', response: '武器留存 + 肘击面部 + 脇固 (Waki Gatame)' },
      { danger: '嫌疑人双手抱胸拒捕', response: '直臂压制 (Arm Bar) 强制分离手臂' },
      { danger: '嫌疑人挥拳抵抗逮捕', response: '潜避 (Duck Under) + 拿背 + 裸绞控制' },
      { danger: '地面压制时嫌疑人翻身', response: '膝盖压腹 (Knee on Belly) + 警棍控制' },
      { danger: '被嫌疑人抱住腰部', response: '强力推脸 (Cross Face) + 腕缄 (Kimura)' }
    ],
    techniques: [
      { name: '武器留存', details: '枪套防御/双手固守' },
      { name: '脇固 (Waki Gatame)', details: '利用腋下夹紧手臂折断肘关节' },
      { name: '腕缄 (Kimura)', details: '针对肩关节的强力锁技' },
      { name: '裸绞 (RNC)', details: '针对颈动脉的血绞晕厥控制' },
      { name: '膝盖压腹', details: '膝盖压制腹腔神经丛' },
      { name: '鹅颈腕锁', details: '手腕折叠控制技术' },
      { name: '警棍打击', details: '击打大腿腓总神经' },
      { name: '战术上铐', details: '站立/跪姿/卧姿上铐流程' },
      { name: '穴位压迫', details: '耳下/锁骨穴位剧痛控制' },
      { name: '扫腿摔', details: '破坏重心扫倒嫌疑人' },
      { name: '双人夹击', details: '团队配合摔法' },
      { name: '搜身战位', details: '控制盲区防止反击' }
    ],
    tags: ['军警格斗', '逮捕术', '关节控制']
  },
  {
    id: 'mil-2',
    category: 'MILITARY',
    difficulty: 'ADVANCED',
    title: '海豹突击队战术：哨兵摸排与无声歼敌',
    hooks: ['幽灵行动：无声暗杀技术', '战场刺杀术：一击必杀', '匕首格斗的高级应用'],
    description: '纯军事用途。如何从背后接近敌人并实施致命打击（模拟），以及防止自己被偷袭。包含匕首格斗和绞杀技术。',
    principles: [
      '隐秘接近 (Stealth)',
      '瞬间破坏呼吸与发声 (Silence)',
      '最大化杀伤效率 (Lethality)',
      '心理脱敏 (Psychological)'
    ],
    scenarios: [
      { danger: '需从背后解决敌方哨兵', response: '裸绞 (RNC) + 肾脏穿刺 (模拟)' },
      { danger: '哨兵突然转身', response: '双手拍击武器 + 喉部重击 + 双腿抱摔 (Double Leg)' },
      { danger: '近距离遭遇敌方匕首突袭', response: '菲律宾 Kali 夺刀 + 颈动脉切割 (模拟)' },
      { danger: '狭窄战壕内的遭遇战', response: '头盔撞击 + 戳眼 + 战术刀具应用' },
      { danger: '被敌人从后捂嘴抹脖', response: '控制持刀手 + 柔道背负投 + 反刺' }
    ],
    techniques: [
      { name: '摸哨技术', details: '锁喉+肾击+颈动脉割' },
      { name: '徒手绞杀', details: '强力裸绞/断颈模拟' },
      { name: '静步移动', details: '战术步伐与重心控制' },
      { name: '捂嘴技巧', details: '防止发声的战术动作' },
      { name: '肾脏攻击', details: '解剖学攻击角度' },
      { name: '颈动脉切割', details: '致死性刀具应用' },
      { name: '战壕格斗', details: '受限空间匕首术' },
      { name: '头盔控制', details: '利用头盔带勒颈' },
      { name: '要害打击', details: '太阳穴/延髓打击' },
      { name: '主副武器切换', details: '步枪转手枪/刀具' },
      { name: '尸体搬运', details: '快速拖拽与隐藏' },
      { name: '反伏击反应', details: '被偷袭时的肌肉记忆' }
    ],
    tags: ['特种部队', '致命武力', '隐秘行动']
  },
  {
    id: 'mil-3',
    category: 'MILITARY',
    difficulty: 'ADVANCED',
    title: '要员保护 (VIP Protection)：肉盾的艺术',
    hooks: ['总统保镖战术：替人挡子弹的科学', '撤离专线：从袭击圈中杀出血路', '保镖必修：阵型与观察'],
    description: '针对保镖和特勤人员。不仅要能打，还要能边打边移动VIP。包括阵型（Diamond Formation）和紧急撤离。',
    principles: [
      '身体覆盖 (Cover the Body)',
      '撤离优于战斗 (Evacuate)',
      '保持射击界限 (Fields of Fire)',
      '宁可自己受伤，不能VIP受伤'
    ],
    scenarios: [
      { danger: '人群中突然有人冲向VIP', response: '肉盾冲撞 (Body Block) + 推开VIP' },
      { danger: '枪声响起 (狙击手)', response: '按倒VIP (Down) + 覆盖身体 + 拖拽掩体' },
      { danger: 'VIP被拉住衣服', response: '切断攻击者手臂 (Chop) + 强力推离' },
      { danger: '护送车辆遭遇伏击', response: '车辆反伏击驾驶 + 下车火力压制' },
      { danger: '撤离路线被堵死', response: 'CQB 突击开路 (Aggressive Clearing)' }
    ],
    techniques: [
      { name: '菱形阵型', details: '360度护卫站位' },
      { name: '身体覆盖', details: '完全覆盖VIP身体' },
      { name: '推离撤退', details: '强力推人撤离法' },
      { name: '行进间射击', details: '保护VIP同时还击' },
      { name: '第三人防御', details: '处理针对他人的攻击' },
      { name: '人群分流', details: '快速穿过密集人群' },
      { name: '自杀炸弹应对', details: '识别与推离爆炸物' },
      { name: '上下车程序', details: '车辆护卫流程' },
      { name: '换手射击', details: '根据VIP位置切换持枪手' },
      { name: '战术检伤', details: '快速评估VIP伤情' },
      { name: '要员控制', details: '强制控制惊慌的VIP' },
      { name: '肩撞开路', details: '暴力开路技术' }
    ],
    tags: ['要员保护', '保镖战术', '团队配合']
  },
  {
    id: 'mil-4',
    category: 'MILITARY',
    difficulty: 'ADVANCED',
    title: '战术CQB与夺枪术：枪火中的格斗',
    hooks: ['近室扫荡：当子弹打光时', '枪械格斗术 (Gun Fu)', '特警突入技术'],
    description: '室内近距离战斗（CQB）。处理枪械故障、弹尽时的格斗，以及在极近距离如何使用长枪作为钝器打击，结合柔道摔法。',
    principles: [
      '速度与暴烈 (Speed & Violence)',
      '切角与视野 (Pieing)',
      '武器即肢体 (Weapon as Limb)',
      '永远不要停止战斗 (Never Quit)'
    ],
    scenarios: [
      { danger: '突入房间时被伏击抓枪管', response: '枪口下压 (Leverage) + 前冲撞击 + 射击' },
      { danger: '拐角处遭遇敌人夺枪', response: '旋转枪身 (Whip) + 枪托砸脸' },
      { danger: '主武器卡壳，敌人冲锋', response: '枪口戳击 (Muzzle Thump) + 拔副武器' },
      { danger: '地面缠斗中武器被抢', response: '柔术蜘蛛防守 + 夺回控制' },
      { danger: '在门口被堵截 (Fatal Funnel)', response: '火力压制 + 强行突入或撤退' }
    ],
    techniques: [
      { name: '枪口戳击', details: '硬物击打面部/喉咙' },
      { name: '枪托砸击', details: '重击头骨致晕' },
      { name: '弹匣角击打', details: '利用尖锐部位攻击' },
      { name: '长枪防抢', details: '利用力矩防止夺枪' },
      { name: '主副切换', details: '快速拔出手枪' },
      { name: '切角搜索', details: '战术过角技术' },
      { name: '走廊格斗', details: '狭长空间限制格斗' },
      { name: '全装具格斗', details: '负重状态下的地面技' },
      { name: '背心拔刀', details: '从战术背心快速出刀' },
      { name: '单手换弹', details: '受伤后的战术动作' },
      { name: '盲射防御', details: '应对墙角盲目射击' },
      { name: '突入技术', details: '双人/四人小组突入' }
    ],
    tags: ['CQB', '特警战术', '枪械格斗']
  },
  {
    id: 'mil-5',
    category: 'MILITARY',
    difficulty: 'ADVANCED',
    title: '刀锋战士：匕首格斗与反恐制杀',
    hooks: ['刀对刀：零距离的噩梦', '特种部队匕首格斗术 (Tantōjutsu)', '致命解剖学应用'],
    description: '最高级别的冷兵器对抗。假设双方均持有利刃，或我方仅有一把匕首对抗武装分子。强调速度、时机与致命部位的精准打击。',
    principles: [
      '永远不要停止移动 (Mobility)',
      '切割优于穿刺 (Slash > Stab 在缠斗中)',
      '控制对方持刀手是第一要务',
      '接受轻微割伤以换取致命一击 (Sacrifice)'
    ],
    scenarios: [
      { danger: '敌方正手持刀劈砍', response: '格挡切入 + 割断二头肌/腋下' },
      { danger: '敌方反手持刀 (Ice Pick) 捅刺', response: '双手X型格挡 + 夺刀反刺颈部' },
      { danger: '敌方持枪近身', response: '拍开枪口 + 匕首刺入腋下/腹股沟隙缝' },
      { danger: '地面缠斗中拔刀', response: '利用腿部控制 + 快速出刀划割' },
      { danger: '暗哨摸排', response: '捂嘴 + 肾击 + 颈动脉切割 (Sentry Removal)' }
    ],
    techniques: [
      { name: '五角度攻击', details: '标准的5种攻击轨迹' },
      { name: '肢体破坏 (Defanging)', details: '优先攻击对方持刀手腕' },
      { name: '流血区解剖', details: '颈动脉/股动脉/锁骨下动脉' },
      { name: '反手持刀术', details: '利于隐蔽与勾割的握法' },
      { name: '格挡反击 (Hubud)', details: '菲律宾格斗术中的流动练习' },
      { name: '夺刀反杀', details: '夺取敌人武器并立即使用' },
      { name: '近身缠斗刀术', details: 'Clinch 状态下的短刀应用' },
      { name: '假动作诱杀', details: '佯攻上路实取下路' },
      { name: '战术换手', details: '在战斗中切换持刀手' },
      { name: '地面刀术', details: '在地面被压制时的出刀' },
      { name: '隐蔽出刀', details: '从常态快速进入战斗' },
      { name: '心理威慑', details: '利用刀具光泽制造恐惧' }
    ],
    tags: ['匕首格斗', '致命武力', '反恐']
  },
  {
    id: 'mil-6',
    category: 'MILITARY',
    difficulty: 'INTERMEDIATE',
    title: '万物皆兵：随身物品武器化',
    hooks: ['一支战术笔的威力', '手机、钥匙、外套的战斗属性', '就地取材的防卫艺术'],
    description: '当你赤手空拳时，身边的任何物体都能成为武器。学习如何快速识别并利用战术笔、手机、外套、甚至水瓶进行防卫。',
    principles: [
      '识别环境中的武器 (Improvised Weapons)',
      '硬物攻击骨骼，软物攻击眼睛',
      '出其不意 (Element of Surprise)',
      '投掷干扰 + 快速近身'
    ],
    scenarios: [
      { danger: '被抓住衣领', response: '战术笔/钥匙 刺击手背 + 戳击面部' },
      { danger: '对方持刀逼近', response: '脱下外套缠绕手臂 (Shield) + 踢裆' },
      { danger: '坐在餐厅被攻击', response: '推起椅子阻挡 (Barrier) + 投掷餐具' },
      { danger: '夜路遇袭', response: '手电筒强光致盲 + 边缘砸击' },
      { danger: '手里拿着手机被抓', response: '手机角砸击太阳穴/鼻梁' }
    ],
    techniques: [
      { name: '战术笔应用', details: '攻击穴位与软组织' },
      { name: '外套缠绕术', details: '防御利刃切割' },
      { name: '椅子防御', details: '利用椅背与椅腿控制距离' },
      { name: '投掷干扰', details: '利用水瓶/硬币制造瞬间盲区' },
      { name: '手机锤击', details: '硬质边角的打击技术' },
      { name: '皮带鞭打', details: '抽出皮带作为软兵器' },
      { name: '书本盾牌', details: '厚书本防御刺击' },
      { name: '钥匙指虎', details: '握持钥匙增加拳头杀伤力' },
      { name: '强光致盲', details: '战术手电的使用' },
      { name: '热咖啡泼洒', details: '高温液体的防御作用' },
      { name: '环境陷阱', details: '利用地形绊倒对手' },
      { name: '心理伪装', details: '假装拿钱包实则取武器' }
    ],
    tags: ['简易武器', '战术笔', '环境利用']
  },

  // --- INSTRUCTOR THEMES (REVISED) ---
  {
    id: 'inst-public-safety',
    category: 'INSTRUCTOR',
    difficulty: 'ADVANCED',
    title: '公共安全与反恐生存：避险与逃生',
    hooks: ['Public Safety & Anti-Terror Survival: Avoidance and Escape', '遭遇恐袭时的Run-Hide-Fight', '重大公共事件处理原则'],
    description: '针对教官的公共安全与反恐生存策略。重点在于如何规避风险，以及在恐袭、枪击、持械伤人等重大公共事件中的处理原则：避免(Avoid)、逃避(Escape)、躲藏(Hide)、反击(Fight)。',
    principles: [
      'Run-Hide-Fight (跑-藏-打)',
      '态势感知 (Situational Awareness)',
      '掩体与遮蔽物 (Cover vs Concealment)',
      'OODA循环 (观察-调整-决策-行动)'
    ],
    scenarios: [
      { danger: '火车站突发持刀无差别砍杀', response: '利用行李箱阻挡 + S型路线逃离 + 引导人群疏散' },
      { danger: '遭遇Active Shooter (枪击)', response: '寻找防弹掩体 (混凝土/发动机) + 保持静默 + 伺机逃生' },
      { danger: '商场内发生爆炸', response: '避开玻璃幕墙 + 匍匐前进避开烟雾 + 寻找安全出口' },
      { danger: '被暴恐分子堵在死角无法逃脱', response: '利用身边一切硬物 (灭火器/椅子) 进行殊死一搏' },
      { danger: '暴徒驾驶车辆冲撞人群 (Vehicle Ramming)', response: '利用粗大路障/石墩躲避 + 避免沿直线奔跑' },
      { danger: '被劫持为人质 (Hostage)', response: '保持顺从降低存在感 + 观察劫持者规律 + 等待特警救援' }
    ],
    techniques: [
      { name: 'Run-Hide-Fight', details: '美国国土安全部标准反恐流程' },
      { name: 'Cooper颜色代码', details: '白/黄/橙/红 心理状态切换与威胁识别' },
      { name: '快速疏散引导', details: '如何在恐慌人群中建立秩序并带队逃生' },
      { name: '掩体识别', details: '区分能防弹的掩体与仅能遮挡视线的遮蔽物' },
      { name: '简易止血', details: '战术止血带与填塞法处理大出血' },
      { name: '环境扫描', details: '进入陌生环境先找出口 (Exit Strategy)' },
      { name: '反跟踪术', details: '识别是否被尾随及摆脱技巧' },
      { name: '诡雷识别', details: '识别异常物品与潜在爆炸物' },
      { name: '群体恐慌应对', details: '防止踩踏事故的三角站位' },
      { name: '报警话术', details: '向警方准确报告位置、人数、武器类型' },
      { name: '心理调适', details: '重大创伤后的心理干预基础' },
      { name: '防御性驾驶', details: '车辆作为逃生工具的应用' }
    ],
    tags: ['反恐', '逃生', '公共安全']
  },
  {
    id: 'inst-training-safety',
    category: 'INSTRUCTOR',
    difficulty: 'INTERMEDIATE',
    title: '执教风控与学员安全：训练场零事故',
    hooks: ['会救人比会打人更重要', '教官的红线与底线', '运动损伤的预防与急救'],
    description: '教官对学员生命安全的绝对责任。涵盖急救证书要求(CPR/AED)、运动损伤紧急处理(R.I.C.E)、训练强度控制、护具检查及热身规范。',
    principles: [
      '安全第一 (Safety First)',
      '预防优于治疗 (Prevention)',
      '分级训练原则 (Graded Exposure)',
      '急救响应 (Emergency Response)'
    ],
    scenarios: [
      { danger: '学员在高强度训练中心脏骤停', response: '立即CPR + 使用AED + 呼叫急救' },
      { danger: '实战演练中学员被击晕 (KO)', response: '检查气道 + 稳定颈椎 + 侧卧位防止误吸' },
      { danger: '关节扭伤或肌肉拉伤', response: '立即停止 + 冷敷 + 加压包扎 (R.I.C.E)' },
      { danger: '夏季室外训练中暑', response: '移至阴凉处 + 降温 + 补充电解质' }
    ],
    techniques: [
      { name: 'CPR心肺复苏', details: '标准按压频率与人工呼吸比例' },
      { name: 'AED操作', details: '自动体外除颤器的使用流程' },
      { name: '脑震荡评估', details: '快速识别脑震荡症状 (瞳孔/意识)' },
      { name: 'R.I.C.E原则', details: 'Rest, Ice, Compression, Elevation' },
      { name: '海姆立克急救', details: '气道异物梗阻处理' },
      { name: '止血包扎', details: '动脉出血的加压止血法' },
      { name: '热身规范', details: '关节活动度与心率提升流程' },
      { name: '护具检查', details: '头盔/护齿/护裆的佩戴标准' },
      { name: '配对原则', details: '按体重/水平/性别合理分组' },
      { name: '停止信号', details: '建立绝对权威的“STOP”口令' },
      { name: '心理急救', details: '处理学员训练中的恐慌发作' },
      { name: '场地排查', details: '清除训练区的尖锐物与隐患' }
    ],
    tags: ['急救', '风控', '教官责任']
  },
  {
    id: 'inst-combat-skills',
    category: 'INSTRUCTOR',
    difficulty: 'ADVANCED',
    title: '教官必修格斗技能体系：从基础到精通',
    hooks: ['标准马伽术 vs 高级特色技能', '教官级动作标准', '全能战术专家'],
    description: '教官必须掌握的完整技术体系。分为“标准马伽术”（站架、打击、防御、解脱、受身）与“高级/特色技能”（菲律宾短棍、夺刀术、简易武器、VIP保护）。',
    principles: [
      '动作标准性 (Standardization)',
      '本能反应 (Instinctive)',
      '全领域作战 (All Domains)',
      '以技服人 (Skill Mastery)'
    ],
    scenarios: [
      { danger: '演示标准马伽术打击', response: '展示直拳/掌底/肘击/膝撞的力学原理' },
      { danger: '演示被抓握与抱摔的解脱', response: '展示360防御 + 抓腕解脱 + 倒地受身' },
      { danger: '高级课程：面对持刀歹徒', response: '演示空手入白刃 (夺刀) 及其风险控制' },
      { danger: '特色课程：使用短棍/雨伞', response: '展示菲律宾魔杖 (Kali) 的打击与缴械' },
      { danger: '团队保护任务 (VIP)', response: '展示三人小组的菱形阵型与撤离技术' }
    ],
    techniques: [
      { name: '站架与移动', details: '标准/中性站姿切换，多向滑步' },
      { name: '核心打击技', details: '掌底、肘击(挑/横/砸)、膝撞、踢裆' },
      { name: '360度防御', details: '针对外围摆拳与刀刺的本能防御' },
      { name: '抓握解脱', details: '手腕被抓、掐脖、熊抱的解脱技术' },
      { name: '倒地受身', details: '侧倒/后倒/前滚翻，保护头部' },
      { name: '短棍/魔杖', details: '利用棍术进行攻防，以棍破刀' },
      { name: '夺刀术', details: '控制持刀手腕，关节折叠夺刀' },
      { name: '简易武器', details: '使用钥匙、皮带、手机作为防卫工具' },
      { name: 'VIP保护', details: '第三方保护技术与撤离阵型' },
      { name: '地面防守', details: '倒地后的防御姿态与战术起立' },
      { name: '控制与带离', details: '关节技控制并押送嫌疑人' },
      { name: '教学示范', details: '镜面示范与分解动作展示能力' }
    ],
    tags: ['格斗技能', '动作标准', '高级技术']
  },
  {
    id: 'inst-stress-test',
    category: 'INSTRUCTOR',
    difficulty: 'ADVANCED',
    title: '身体素质与实战压力测试 (Stress Test)',
    hooks: ['军事演习级压力测试', '眩晕与黑暗中的战斗', '极限体能下的决策'],
    description: '模拟极端环境下的生存与反击能力。教官必须通过连续极限体能（Tabata）、暗黑盲斗、眩晕对抗等高压测试，证明其在力竭时的战斗意志。',
    principles: [
      '适应压力 (Stress Inoculation)',
      '本能反应 (Instinct)',
      '永不放弃 (Never Quit)',
      '快速决策 (Quick Decision)'
    ],
    scenarios: [
      { danger: '多名暴徒连续围堵推搡 (Zombie Drill)', response: '力竭状态下连续反击 + 寻找空档突围' },
      { danger: '完全黑暗中被突然勒颈', response: '触觉本能反应 + 瞬间解脱' },
      { danger: '原地旋转10圈后面对攻击 (眩晕)', response: '恢复平衡 + 准确打击目标' },
      { danger: '人群中突发不明袭击', response: 'OODA快速识别敌友 + 决策反击/逃跑' }
    ],
    techniques: [
      { name: 'Tabata体能', details: '高强度间歇性体能爆发' },
      { name: '暗黑盲斗', details: '蒙眼/无光环境下的触觉防御' },
      { name: '眩晕对抗', details: '克服前庭失衡的战斗能力' },
      { name: '1对多突围', details: 'Zombie Drill 连续摆脱' },
      { name: '受身护头', details: '力竭倒地时的自我保护' },
      { name: '抗击打训练', details: '腹部/大腿的排打适应' },
      { name: '压力呼吸', details: '战术呼吸法控制心率' },
      { name: '决策反应', details: '红绿灯/口令 快速辨识' },
      { name: '负重格斗', details: '穿戴护具/负重背心的对抗' },
      { name: '伤情模拟', details: '模拟单手/单腿受伤后的战斗' },
      { name: '视觉剥夺', details: '利用听觉定位威胁' },
      { name: '精神意志', details: '极限状态下的呐喊与坚持' }
    ],
    tags: ['压力测试', '体能极限', '意志力']
  },
  {
    id: 'inst-pedagogy',
    category: 'INSTRUCTOR',
    difficulty: 'INTERMEDIATE',
    title: '国际马伽术教学法与沟通艺术',
    hooks: ['让小白听得懂，高手练得爽', '三明治沟通法', '四步教学标准流程'],
    description: '教官的核心竞争力。掌握KMCN标准教学四步法：讲解、示范、引导、纠错。学会针对不同学员（男/女/青少年）的沟通技巧与纠错艺术。',
    principles: [
      '因材施教 (Adaptability)',
      '正向反馈 (Positive Reinforcement)',
      '循序渐进 (Progression)',
      '安全可控 (Safety Control)'
    ],
    scenarios: [
      { danger: '学员动作错误且产生挫败感', response: '三明治沟通法 (表扬-纠错-鼓励)' },
      { danger: '复杂技术学员无法掌握', response: '分解动作教学 (拆解步骤)' },
      { danger: '学员练习时动作过大有危险', response: '立即叫停 (Freeze) + 强调控制' },
      { danger: '面对不同水平的混班教学', response: '分层教学 + 设立不同目标' }
    ],
    techniques: [
      { name: '讲解 (Explain)', details: '阐述原理与应用场景' },
      { name: '示范 (Demo)', details: '常速/慢速/多角度展示' },
      { name: '引导 (Guide)', details: '手把手建立肌肉记忆' },
      { name: '纠错 (Correct)', details: '精准指出核心错误' },
      { name: '三明治法', details: '沟通心理学应用' },
      { name: '口令指挥', details: '清晰/有力/节奏感' },
      { name: '错误模拟', details: '模仿学员错误以加深印象' },
      { name: '辅助器材', details: '靶具/假人的教学应用' },
      { name: '课程设计', details: '热身-复习-新课-压力-拉伸' },
      { name: '互动提问', details: '引导学员思考而非填鸭' },
      { name: '肢体接触', details: '得体的纠正动作规范' },
      { name: '气场控制', details: '掌控全场的教官威严' }
    ],
    tags: ['教学法', '沟通艺术', '领导力']
  },
  {
    id: 'inst-legal',
    category: 'INSTRUCTOR',
    difficulty: 'BEGINNER',
    title: '法律红线与犯罪心理学',
    hooks: ['刑法第20条深度解析', '正当防卫的边界', '攻击者心理画像'],
    description: '懂法才能保命。深度解析中国刑法第20条（正当防卫），区分防卫过当与互殴。分析“捕食者”与“社交暴力”的心理特征，制定对应策略。',
    principles: [
      '严禁补刀 (Stop when safe)',
      '证据保留 (Evidence)',
      '避免冲突 (Avoidance)',
      '心理博弈 (Psychology)'
    ],
    scenarios: [
      { danger: '制服歹徒后对方已丧失能力', response: '立即停止打击 + 报警 + 保持警戒' },
      { danger: '遭遇路怒症社交暴力', response: '识别非捕食者意图 + 语言化解' },
      { danger: '遭遇有预谋的抢劫 (捕食者)', response: '打破其计划 + 制造混乱 + 逃离' },
      { danger: '冲突后的现场处理', response: '寻找目击者 + 调取监控 + 正确笔录' }
    ],
    techniques: [
      { name: '红线意识', details: '识别防卫过当的界限' },
      { name: '停止打击', details: '控制肾上腺素及时收手' },
      { name: '报警话术', details: '强调“我被攻击，我很害怕”' },
      { name: '证据意识', details: '录音/录像/证人' },
      { name: '捕食者画像', details: '冷血/有计划/寻找弱者' },
      { name: '社交暴力', details: '情绪化/面子/可降级' },
      { name: '非语言信号', details: '识别防卫过当的界限' },
      { name: '受害者筛选', details: '如何避免成为软柿子' },
      { name: '恐惧管理', details: '理解生理反应 (隧道视野)' },
      { name: '战后心理', details: 'PTSD创伤后应激干预' },
      { name: '法律条款', details: '刑法20条/无限防卫权' },
      { name: '案例分析', details: '真实案件的法律复盘' }
    ],
    tags: ['法律', '心理学', '正当防卫']
  }
];