
import { Theme } from './types';

export const THEMES: Theme[] = [
  // =========================================================================
  // CIVILIAN THEMES (9 Total)
  // =========================================================================
  {
    id: 'civ-1',
    category: 'CIVILIAN',
    difficulty: 'BEGINNER',
    title: '街头格斗终结者：从被动挨打到瞬间反杀',
    hooks: ['街头生存法则：3秒结束战斗', '拒绝霸凌：弱者反击的必修课', '古流柔术的街头应用'],
    description: '针对生活中常见的推搡、挑衅及街头斗殴。不依赖力量，而是利用古流柔术的关节控制与人体结构弱点，结合马伽术的快速打击，实现瞬间制服。',
    principles: [
      '逃生通道原则 (Exit Strategy): 永远不要让自己被围在角落，始终保持至少一条撤退路线畅通。',
      '先发制人 (Preemptive Strike): 在对方动手前攻击感官(眼/喉/裆)，瞬间破坏其战斗能力。',
      '合气借力 (Redirect Force): 不与对方力量硬抗，利用对方冲力破坏其重心(Kuzushi)。',
      '扫描环境 (Scan & Run): 击倒对手后立即环顾四周确认无同伙，迅速撤离现场。'
    ],
    scenarios: [
      { danger: '深夜大排档遭遇醉汉无预警挥舞王八拳进攻', response: '马伽术360防御 (360 Defense) + 泰拳箍颈膝撞 (Clinch & Knee) + 猛推逃离' },
      { danger: '争吵中对方突然伸手用力推搡胸部试图挑起斗殴', response: '古流柔术小手返 (Kote Gaeshi) 折腕控制 + 截拳道侧踹膝关节' },
      { danger: '对方双手死死揪住衣领并试图用头撞击', response: '合气道天大落 (Tenchin Nage) 破坏重心 + 肘击面部 (Elbow Slash)' },
      { danger: '被对方从侧面使用夹颈摔 (Headlock) 勒住脖子', response: '攻击腹股沟 (Groin Strike) + 手刀攻击人中穴 + 柔道谷落 (Tani Otoshi) 反摔' },
      { danger: '对方试图使用抱腿摔 (Double Leg Takedown) 扑倒', response: '摔跤术 Sprawl (防摔下压) + 断头台 (Guillotine) 站立绞杀' },
      { danger: '倒地后对方站立试图足球踢头部', response: '马伽术地面防御姿态 (Ground Stance) + 蹬腿破坏膝关节 + 战术起立' },
      { danger: '被对方单手抓住手腕并试图强行拖拽', response: '合气道二教 (Nikkyo) 螺旋解脱 + 铁锤拳 (Hammer Fist) 击打鼻梁' },
      { danger: '对方从背后突袭实施连臂熊抱 (Bearhug)', response: '重心下沉 (Base) + 头部后撞面部 + 柔道背负投 (Seoi Nage)' },
      { danger: '被对方逼入墙角双手掐脖窒息', response: '双手合扣破坏拇指 (Pluck) + 泰拳低扫 (Low Kick) + 掌根推击下巴' },
      { danger: '面对持啤酒瓶的流氓挑衅逼近', response: '战术后撤步 + 寻找长物 (椅子/棍) + 正蹬 (Teep) 控制距离' }
    ],
    techniques: [
      { 
        name: '小手返 (Kote Gaeshi)', 
        details: '古流柔术核心折腕技，利用关节反向施压',
        drill: {
          drillName: "动态折腕压力测试 (Dynamic Kote Gaeshi)",
          setup: "配对练习，进攻方佩戴全指拳套，防守方徒手。",
          phase1_technical: "1. 捕捉(Catch)：在对方推搡接触瞬间，双手呈'蛤蜊状'包裹对方手掌。\n2. 破坏重心(Kuzushi)：向侧方45度迈步，同时将对方手腕向其肩部外侧翻折。\n3. 当身(Atemi)：在折腕同时，前脚踢击对方胫骨或裆部。",
          phase2_stress: "持续推搡训练：搭档连续、用力推搡防守者胸部（力度70%）。防守者必须在保持平衡的同时，随机选择一次推搡进行小手返控制，完成后立即扫视(Scan)四周。",
          critical_checkpoints: "1. 拇指必须用力按压对方无名指与小指根部。\n2. 身体必须转动，不要仅靠手臂力量对抗。\n3. 控制后保持距离，防止对方另一只手挥拳。"
        }
      },
      { 
        name: '入身投 (Irimi Nage)', 
        details: '合气道借力打力，瞬间破坏对方平衡',
        drill: {
          drillName: "入身投流动性练习 (Irimi Flow)",
          setup: "开阔场地，配对练习。",
          phase1_technical: "1. 入身(Irimi)：当对方直拳打来，向其外侧斜前方上步，如同'穿过'对方攻击线。\n2. 引导：一手切挡对方手臂，另一手沿对方颈部穿过，类似'晾衣杆'动作。\n3. 投掷：利用旋转离心力，将对方颈部向下后方引导，致其倒地。",
          phase2_stress: "摆拳连击防御：搭档左右连续摆拳进攻。防守者先做360防御，寻找时机切入内围实施入身投。重点在于进入时机(Timing)而非力量。",
          critical_checkpoints: "1. 胆量：必须敢于贴近对方身体。\n2. 颈部控制：手臂必须紧贴对方后颈，不能有空隙。\n3. 步法：使用'Tenkan'（转换）步法化解冲力。"
        }
      },
      { 
        name: '大外刈 (Osoto Gari)', 
        details: '柔道强力摔法，直接将对手砸向地面', 
        drill: {
          drillName: "实战大外刈 (Combat Osoto)",
          setup: "柔道垫或草地。",
          phase1_technical: "1. 破势：猛推对方下巴或锁骨，破坏其重心向后。\n2. 上步：支撑脚上步至对方脚外侧。\n3. 刈腿：像镰刀一样向后猛扫对方支撑腿，同时上半身下压。",
          phase2_stress: "僵持突破：在互相抓把僵持不下时，突然使用膝撞分散注意力，接大外刈摔倒对方。",
          critical_checkpoints: "1. 胸贴胸，不留空隙。\n2. 扫腿要幅度大且有力。\n3. 摔倒后立即保持站立或做膝压制。"
        }
      },
      { 
        name: '体落 (Tai Otoshi)', 
        details: '利用转体将对方绊倒的柔道技术', 
        drill: {
          drillName: "体落反应训练",
          setup: "柔道垫。",
          phase1_technical: "1. 引手：双手将对方重心向前上方牵引。\n2. 转身：迅速背步转身，将支撑腿挡在对方行进路线上。\n3. 施摔：利用腰部旋转和手臂下拉的力偶作用将对方摔过腿部。",
          phase2_stress: "冲撞防御：对方持盾冲撞，防守者侧闪同时施展体落。",
          critical_checkpoints: "1. 阻挡腿膝盖微曲。\n2. 转身速度要快。\n3. 手臂拉拽要有爆发力。"
        }
      },
      { 
        name: '断头台 (Guillotine)', 
        details: '针对颈部的绞杀控制', 
        drill: {
          drillName: "站立断头台防守",
          setup: "无器械。",
          phase1_technical: "1. 扣颈：当对方低头潜抱时，手臂环绕其颈部。\n2. 提拉：双手扣合，提拉手腕切入气管。\n3. 施压：身体后仰，髋部前顶，利用杠杆原理绞杀。",
          phase2_stress: "防抱腿反击：对方连续尝试下潜抱摔，防守者必须在被抱住腿之前完成断头台控制。",
          critical_checkpoints: "1. 肘部贴紧自己身体。\n2. 不要轻易主动倒地。\n3. 关注对方是否藏有武器。"
        }
      },
      { 
        name: '二教控制 (Nikkyo)', 
        details: '针对手腕与肘部的剧痛压制', 
        drill: {
          drillName: "二教极速控制",
          setup: "无器械。",
          phase1_technical: "1. 封锁：抓握对方手背，按在自己胸口。\n2. 施压：另一手肘部切入对方肘窝，利用身体下沉的力量。\n3. 旋转：螺旋向下施压，迫使对方跪地。",
          phase2_stress: "抓衣领解脱：对方强力抓衣领并推搡，防守者瞬间施展二教控制并迫使其跪地。",
          critical_checkpoints: "1. 手腕角度必须小于90度。\n2. 身体跟随下压，不仅仅用手。"
        }
      },
      { 
        name: '铁锤拳 (Hammer Fist)', 
        details: '攻击面部与后脑的打击技', 
        drill: {
          drillName: "全方位铁锤拳",
          setup: "手靶 x2。",
          phase1_technical: "1. 握拳：拳心相对，拳底如锤。\n2. 轨迹：可从上至下、侧向、后向打击。\n3. 连贯：利用核心旋转带动连续打击。",
          phase2_stress: "30秒极限连击：持靶者不断变换位置与角度，训练者需无间断打击。",
          critical_checkpoints: "1. 手腕保持刚性，防止扭伤。\n2. 打击后迅速收回防守。"
        }
      },
      { 
        name: '肘击 (Elbow Slash)', 
        details: '近距离如刀锋般的肘部切击', 
        drill: {
          drillName: "泰拳式内围肘击",
          setup: "手靶或泰拳靶。",
          phase1_technical: "1. 护头：非打击手始终护住头部。\n2. 旋转：脚跟旋转，腰胯发力带动肘部。\n3. 切割：肘尖水平或斜下划过目标。",
          phase2_stress: "贴身缠斗(Clinch)中的肘击：在双方纠缠状态下，寻找空隙打出致命一击。",
          critical_checkpoints: "1. 距离要够近。\n2. 动作幅度不要过大，隐蔽性第一。"
        }
      },
      { 
        name: '击裆 (Groin Strike)', 
        details: '生死关头的必要手段', 
        drill: {
          drillName: "本能反应击裆",
          setup: "踢靶。",
          phase1_technical: "1. 隐蔽：上半身不动，不给预兆。\n2. 鞭打：小腿弹射，力达脚背或胫骨。\n3. 回收：击中后迅速收腿，防止被抱。",
          phase2_stress: "被掐脖时的瞬间反应：当对方双手掐脖，第一时间做出击裆反应。",
          critical_checkpoints: "1. 不要盯着看目标。\n2. 即使没踢中也要利用假动作创造距离。"
        }
      },
      { 
        name: '插眼 (Eye Gouge)', 
        details: '阻断对方视线的战术动作', 
        drill: {
          drillName: "战术手指鞭打",
          setup: "佩戴护目镜（必须）。",
          phase1_technical: "1. 放松：手指微曲放松，像鞭子一样甩出。\n2. 目标：针对眼球软组织。\n3. 连续：左右手连续快速干扰。",
          phase2_stress: "被压制时的绝地反击：模拟被骑乘压制，无法起身时使用插眼迫使对方后仰。",
          critical_checkpoints: "1. 并非硬戳，而是鞭打，防止手指折断。\n2. 结合吼叫增加震慑。"
        }
      },
      { 
        name: '战术起立', 
        details: '在防御中安全回到站立姿态', 
        drill: {
          drillName: "受身与战术起立",
          setup: "软垫。",
          phase1_technical: "1. 防御：一手护头，一手撑地，一腿蹬防。\n2. 抬臀：利用支撑手脚抬起臀部。\n3. 抽离：将前腿迅速抽回至后方站起。",
          phase2_stress: "连续干扰下起立：搭档利用踢击靶干扰，训练者需寻找时机安全站起并后撤。",
          critical_checkpoints: "1. 始终目视对手，不要背对。\n2. 起身后立即保持格斗式。"
        }
      },
      { 
        name: '四方投 (Shiho Nage)', 
        details: '折叠手臂破坏肩关节的投技', 
        drill: {
          drillName: "四方投控制技术",
          setup: "无器械。",
          phase1_technical: "1. 入身：抓握对方手腕，身体切入其腋下。\n2. 举臂：将对方手臂举过头顶，如挥刀状。\n3. 斩下：转身同时双手向下斩击，折叠其手臂。",
          phase2_stress: "对方挥刀劈砍时的防御：模拟对方竖劈，通过四方投化解并夺刀。",
          critical_checkpoints: "1. 必须保护好自己的头部。\n2. 转身要快，利用腰部力量。"
        }
      }
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
      '痛点打击 (Vital Points): 力量悬殊时，必须攻击眼、喉、裆等软弱部位以博取生存机会。',
      '杠杆原理 (Leverage): 利用关节技的小支点撬动大力量，而非与男性进行力量对抗。',
      '声音武器 (Verbal Weapon): 战术尖叫不仅能震慑歹徒，更能吸引周围救援，打破冻结反应。',
      '地面生存 (Ground Survival): 绝不让背部平贴地面超过3秒，利用虾行(Shrimping)创造空间起立。'
    ],
    scenarios: [
      { danger: '在电梯内被陌生男子从背后强行熊抱', response: '攻击手背小关节 (Small Joint Manipulation) + 猛踩脚面 + 肘击后撤' },
      { danger: '被暴力扯住头发向车内或暗处拖拽', response: '双手固定发根减痛 + 顺势转身 + 肘击/膝撞 (Strike) + 逃离' },
      { danger: '被按在墙角双手掐脖（甚至双脚离地）', response: '合气道二教 (Nikkyo) 强力折腕 + 膝撞腹股沟 (Knee to Groin)' },
      { danger: '歹徒将受害者扑倒并处于骑乘位掐脖 (强暴体位)', response: '巴西柔术起桥 (Upa/Bridge) 翻转逃脱 + 肘击面部' },
      { danger: '手腕被强力抓住无法挣脱', response: '针对虎口弱点旋转解脱 (Thumb Release) + 掌根击下巴' },
      { danger: '被对方压在身下双手按住手腕 (十字架姿态)', response: '巴西柔术雪天使 (Snow Angel) 摆脱 + 膝肘连接防守' },
      { danger: '遭遇色狼正面袭胸或搂抱腰部', response: '拇指压迫天突穴 (喉咙窝) + 掌根推击 (Palm Strike) + 战术呼救 (-1 辅助)' },
      { danger: '被推倒在地，歹徒试图进入两腿之间 (Guard)', response: '地面剪刀扫 (Scissor Sweep) + 蹬腿踹脸 (Up Kick)' },
      { danger: '在夜跑时被从后方勒住脖子拖行', response: '下巴内收防窒息 + 攻击腹股沟 + 柔道过肩摔 (Seoi Nage) 变体' },
      { danger: '对方试图强行亲吻或啃咬面部', response: '双拇指挤压眼球 (Eye Gouge) + 猛推鼻梁 + 膝撞' }
    ],
    techniques: [
      { 
        name: '二教折腕 (Nikkyo)', 
        details: '针对手腕S型锁死的剧痛控制',
        drill: {
          drillName: "女子二教防身术 (Nikkyo Self-Defense)",
          setup: "配对练习，模拟抓胸或抓肩。",
          phase1_technical: "1. 固定：单手按住对方抓握的手背，使其贴紧自己身体。\n2. 切割：另一只手如刀般切入对方肘窝与手腕连接处，强行弯曲其手腕。\n3. 螺旋：身体下沉并向对方后方旋转，施加螺旋压力致其跪地。",
          phase2_stress: "墙角解脱：防守者背靠墙，攻击者双手掐脖。防守者需在窒息压力下（模拟），迅速锁定一只手腕实施二教，并膝撞面部逃离。",
          critical_checkpoints: "1. 必须利用身体重量下压，而非仅靠臂力。\n2. 保持对方手肘角度小于90度。\n3. 疼痛产生后立即推开对方逃跑，不要持续纠缠。"
        }
      },
      { 
        name: '三教控制 (Sankyo)', 
        details: '利用螺旋劲控制手腕与肩膀', 
        drill: {
          drillName: "螺旋扭腕解脱",
          setup: "无器械。",
          phase1_technical: "1. 反抓：被抓手腕时，反手扣住对方虎口。\n2. 上旋：像拧毛巾一样向上螺旋发力。\n3. 踮脚：迫使对方重心上提，失去平衡。",
          phase2_stress: "被强力抓手腕时的反制：对方用力抓握不放，通过三教动作迫使其松手。",
          critical_checkpoints: "1. 力量方向垂直向上。\n2. 身体配合转动。"
        }
      },
      { 
        name: '起桥 (Bridge/Upa)', 
        details: '地面柔术核心爆发力逃脱', 
        drill: {
          drillName: "地面起桥逃脱 (Trap and Roll)",
          setup: "柔道垫。",
          phase1_technical: "1. 封锁：单手抓住对方手腕，同侧脚勾住对方脚踝。\n2. 起桥：双脚蹬地，臀部爆发力向上顶起。\n3. 翻转：向封锁侧翻滚，形成上位压制。",
          phase2_stress: "被骑乘位压制打脸时的反应：对方模拟地面打击，防守者需护头并寻找时机起桥翻转。",
          critical_checkpoints: "1. 封锁必须牢固，破坏其支撑点。\n2. 起桥高度决定成败。"
        }
      },
      { 
        name: '虾行 (Shrimping)', 
        details: '地面移动与防守恢复', 
        drill: {
          drillName: "地面虾行逃脱",
          setup: "柔道垫。",
          phase1_technical: "1. 侧身：身体完全侧向一边。\n2. 折叠：收腿，臀部向后上方顶出。\n3. 恢复：利用空间将膝盖插入对方身体之间，恢复防守(Guard)。",
          phase2_stress: "被侧压(Side Control)时的恢复：在对方体重压制下，利用虾行创造空间。",
          critical_checkpoints: "1. 身体必须侧过来，不能平躺。\n2. 尽量缩小身体投影面积。"
        }
      },
      { 
        name: '咬合技术', 
        details: '近身被压制时的撕咬反击', 
        drill: {
          drillName: "受限空间反击",
          setup: "佩戴护具或针对软靶。",
          phase1_technical: "1. 寻找：针对颈部、耳朵、手臂内侧等敏感部位。\n2. 咬合：利用门牙和犬齿猛烈咬合。\n3. 配合：疼痛产生瞬间推开对方。",
          phase2_stress: "绝对力量压制下的挣脱：在无法使用肢体打击时，启动撕咬反击。",
          critical_checkpoints: "1. 仅在生命受威胁时使用。\n2. 咬住后要摇头撕扯。"
        }
      },
      { 
        name: '拇指压迫', 
        details: '针对喉结/眼睛的压迫技', 
        drill: {
          drillName: "精准压点控制",
          setup: "假人模型。",
          phase1_technical: "1. 叠指：双拇指重叠增加硬度。\n2. 找点：锁骨窝、喉结旁、耳后穴位。\n3. 钻压：利用体重向前钻压。",
          phase2_stress: "贴身缠抱解脱：对方死抱不放，利用痛点压迫迫使其后退。",
          critical_checkpoints: "1. 寻找痛点要准。\n2. 力量要持续深入。"
        }
      },
      { 
        name: '反关节臂锁', 
        details: '站立姿态下的直臂反关节', 
        drill: {
          drillName: "站立十字固 (Standing Armbar)",
          setup: "无器械。",
          phase1_technical: "1. 夹臂：将对方手臂紧夹在双腿或腋下。\n2. 支点：双手按压对方肘关节上方。\n3. 施压：身体下沉，反向折断。",
          phase2_stress: "对方推搡时的瞬间反制：借力打力，顺势拉直对方手臂施展臂锁。",
          critical_checkpoints: "1. 支点必须在肘关节后方。\n2. 动作要果断。"
        }
      },
      { 
        name: '剪刀扫 (Scissor Sweep)', 
        details: '利用双腿杠杆将对方扫倒', 
        drill: {
          drillName: "地面剪刀扫技术",
          setup: "柔道垫。",
          phase1_technical: "1. 框架：一腿膝盖横拦对方胸口，一腿贴地。\n2. 破坏：双手拉拽对方衣领和袖子，破坏重心。\n3. 剪切：双腿像剪刀一样交错发力扫倒对方。",
          phase2_stress: "Guard位置的反击：对方试图起身打击时，利用剪刀扫将其摔倒并上位。",
          critical_checkpoints: "1. 手脚配合要协调。\n2. 必须先破坏对方重心。"
        }
      },
      { 
        name: '掌根推击', 
        details: '击打下巴造成脑震荡', 
        drill: {
          drillName: "强力掌根推击",
          setup: "手靶。",
          phase1_technical: "1. 形态：手掌背屈，露出坚硬掌根。\n2. 路线：直线向前上方。\n3. 目标：下巴底部或鼻梁。",
          phase2_stress: "防止对方近身：当对方试图冲撞，利用掌根推击保持距离。",
          critical_checkpoints: "1. 手指放松防止戳伤。\n2. 力量穿透目标。"
        }
      },
      { 
        name: '折指技', 
        details: '古流柔术中的小关节破坏', 
        drill: {
          drillName: "单指破坏技术",
          setup: "无器械。",
          phase1_technical: "1. 捕捉：在混乱中抓住对方一根或两根手指。\n2. 施力：向手背方向猛烈反折。\n3. 撤离：疼痛产生瞬间拉开距离。",
          phase2_stress: "被抓衣领/头发时：不需要解脱抓握，直接折断对方手指。",
          critical_checkpoints: "1. 动作要快准狠。\n2. 不要犹豫。"
        }
      },
      { 
        name: '转身背负投', 
        details: '利用对方拉扯力道的摔法', 
        drill: {
          drillName: "借力背负投",
          setup: "柔道垫。",
          phase1_technical: "1. 夹臂：双手紧紧抓住对方抓头发的手臂。\n2. 进胯：转身，背部贴紧对方胸腹，臀部低于对方。\n3. 顶摔：蹬腿提臀，将对方从背上摔过。",
          phase2_stress: "被抓头发向后拖拽时：利用对方的拉力，顺势转身施展投技。",
          critical_checkpoints: "1. 臀部要低于对方腰部。\n2. 封锁手臂要紧。"
        }
      },
      { 
        name: '声音震慑', 
        details: '战术吼叫破坏对方节奏', 
        drill: {
          drillName: "战术吼叫 (Kiai)",
          setup: "无。",
          phase1_technical: "1. 发声：丹田发力，短促有力。\n2. 时机：配合打击动作瞬间。\n3. 眼神：死死盯着对方，展现捕猎者气势。",
          phase2_stress: "面对多人围堵：通过怒吼和肢体语言震慑潜在攻击者。",
          critical_checkpoints: "1. 声音也是武器。\n2. 不要尖叫，要怒吼。"
        }
      }
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
      '肢体语言 (Body Language): 保持抬头挺胸的自信体态，避免成为霸凌者眼中的\'软目标\'。',
      '语言边界 (Verbal Boundary): 面对挑衅需大声喝止，建立清晰的个人边界，吸引他人注意。',
      '脱困优先 (Escape First): 在校园环境中，摆脱控制并逃离优于互相殴打，避免事态升级。',
      '寻求援助 (Seek Help): 战术撤退并向成年人/老师求助是智慧的表现，而非软弱。'
    ],
    scenarios: [
      { danger: '在走廊被霸凌者故意推搡挑衅', response: '战术站位 (Fighting Stance) + 双手前推建立边界 + 侧滑步' },
      { danger: '被同学从侧面使用夹颈摔 (Headlock) 勒住并嘲笑', response: '双手下拉创造空隙 + 攻击腹股沟 (Groin Strike) + 向后翻转解脱' },
      { danger: '被多人围堵在厕所或死角', response: '猛推正前方一人 (Push) + 突然爆发冲刺 (Sprint) + 高声呼救 (-1)' },
      { danger: '书包带被强行拉扯试图拽倒', response: '顺势转身卸力 + 旋转解脱背包 (Backpack Release) + 推开距离' },
      { danger: '被按在地上羞辱或殴打', response: '龟缩防御 (Turtle) 护头 + 寻找机会抓握/咬合 + 战术起立' },
      { danger: '被抓住衣领并抵在墙上威胁', response: '双手扣腕破坏重心 (Pluck) + 掌根推击下巴 + 侧向滑步逃离' },
      { danger: '遭遇言语侮辱和推搡升级', response: '保持冷静眼神对视 (Eye Contact) + 战术后撤 (Tactical Retreat) + 寻找老师 (-1)' },
      { danger: '被抓住手腕试图强制带走', response: '针对虎口弱点旋转解脱 (Thumb Release) + 响亮求救指令' },
      { danger: '对方试图使用断头台 (Guillotine) 勒颈', response: '一手挂颈一手推胯 (Frame) + 保持背部挺直 + 侧向移动解脱' },
      { danger: '面对持棍棒/椅子的冲动攻击', response: '利用书包做盾牌 (Backpack Shield) + 蛇形跑位逃离 (Zigzag Run)' }
    ],
    techniques: [
      { 
        name: '战术站位', 
        details: '保护自己的防御性姿态', 
        drill: {
          drillName: "栅栏式防御 (The Fence)",
          setup: "无。",
          phase1_technical: "1. 手型：双手张开置于胸前，手心向外。\n2. 姿态：非攻击性，但随时可变招。\n3. 距离：保持一步半的安全距离。",
          phase2_stress: "面对推搡保持站架：搭档不断尝试推搡，训练者需维持栅栏防御不崩溃。",
          critical_checkpoints: "1. 不要握拳激怒对方。\n2. 保护好中线。"
        }
      },
      { 
        name: '语言震慑', 
        details: '利用声音建立边界', 
        drill: {
          drillName: "狮吼功训练",
          setup: "无。",
          phase1_technical: "1. 后退：身体后撤一步。\n2. 手势：做出'停止'手势。\n3. 喊话：大声喊出'停下！''走开！'。",
          phase2_stress: "面对辱骂时的冷静回应：搭档模拟言语挑衅，训练者保持冷静并坚定喝止。",
          critical_checkpoints: "1. 眼神不躲闪。\n2. 声音要洪亮。"
        }
      },
      { 
        name: '夹颈解脱', 
        details: '应对常见的Headlock勒脖', 
        drill: {
          drillName: "Headlock Escape",
          setup: "配对练习。",
          phase1_technical: "1. 呼吸：下巴内收，双手下拉对方手臂创造呼吸空间。\n2. 控制：一手抓对方手腕，一手抓面部/下颌。\n3. 翻转：利用腿部力量向后翻转，形成上位。",
          phase2_stress: "被强力勒住时的呼吸调整：在对方持续施力下完成解脱。",
          critical_checkpoints: "1. 破坏对方重心是关键。\n2. 保护颈部。"
        }
      },
      { 
        name: '抓手腕解脱', 
        details: '利用虎口弱点旋转挣脱', 
        drill: {
          drillName: "虎口逃脱技术",
          setup: "无。",
          phase1_technical: "1. 寻找：确认对方拇指与四指的连接处（虎口）。\n2. 旋转：向虎口缺口方向猛烈旋转手腕。\n3. 撤离：肘部发力向后抽回。",
          phase2_stress: "双手被抓时的解脱：双手同时被抓，利用旋转爆发力挣脱。",
          critical_checkpoints: "1. 不要硬拉，要转。\n2. 借助身体转动。"
        }
      },
      { 
        name: '抓衣领解脱', 
        details: '扣手腕破坏对方重心', 
        drill: {
          drillName: "衣领反制技术",
          setup: "无。",
          phase1_technical: "1. 扣握：双手呈'C'型扣住对方抓衣领的手掌。\n2. 施压：猛力向下折压其手腕。\n3. 后撤：身体后撤破坏其平衡。",
          phase2_stress: "被推搡晃动中解脱：在不稳定状态下完成抓握与反制。",
          critical_checkpoints: "1. 紧贴自己胸口。\n2. 利用体重下压。"
        }
      },
      { 
        name: '防推搡技术', 
        details: '重心下沉化解推力', 
        drill: {
          drillName: "不倒翁重心训练",
          setup: "无。",
          phase1_technical: "1. 站架：弓步站立，后腿蹬地。\n2. 吸收：接触瞬间身体微收吸收冲击。\n3. 卸力：利用腰部旋转将推力卸向侧面。",
          phase2_stress: "连续推搡下的稳定性：面对连续快速推搡，保持重心不失。",
          critical_checkpoints: "1. 核心收紧。\n2. 不要双脚并拢。"
        }
      },
      { 
        name: '倒地起身', 
        details: '战术起立技术', 
        drill: {
          drillName: "技术性起立",
          setup: "软垫。",
          phase1_technical: "1. 防御：一手护头，一手撑地。\n2. 抬臀：支撑手脚发力抬起身体。\n3. 撤步：前腿向后方远距离撤步站起。",
          phase2_stress: "有人踢击时的起立：模拟对方踢击头部，在防御中寻找间隙起立。",
          critical_checkpoints: "1. 始终看着对手。\n2. 起身要快。"
        }
      },
      { 
        name: '背包防御', 
        details: '利用书包阻挡攻击', 
        drill: {
          drillName: "背包盾牌战术",
          setup: "装有填充物的书包。",
          phase1_technical: "1. 举盾：双手抓紧书包带，举在胸前护住头颈。\n2. 移动：利用书包作为掩体，移动寻找出口。\n3. 反击：必要时利用书包重量撞击或投掷。",
          phase2_stress: "面对棍棒挥舞：搭档使用泡沫棍挥舞，训练者利用书包格挡并逃离。",
          critical_checkpoints: "1. 书包要举高。\n2. 不要遮挡自己视线。"
        }
      },
      { 
        name: '熊抱解脱', 
        details: '应对背后抱腰的动作', 
        drill: {
          drillName: "熊抱反制",
          setup: "无。",
          phase1_technical: "1. 下沉：迅速降低重心，防止被抱起。\n2. 打击：肘击对方肋部/面部，脚后跟跺脚面。\n3. 分离：利用疼痛迫使对方松手。",
          phase2_stress: "被抱离地面时的反应：双腿勾住对方腿部，强行落地并反击。",
          critical_checkpoints: "1. 爆发力要强。\n2. 动作连贯。"
        }
      },
      { 
        name: '掌根推击', 
        details: '拉开距离的非致命推击', 
        drill: {
          drillName: "鼻梁推击",
          setup: "手靶。",
          phase1_technical: "1. 形态：掌根向上，手指放松。\n2. 发力：蹬地转腰，直线推出。\n3. 目的：推动鼻根/下巴，创造逃跑空间。",
          phase2_stress: "被围堵时推开缺口：在多人包围中，推开一人逃跑。",
          critical_checkpoints: "1. 不是打击，是推开。\n2. 力量要足。"
        }
      },
      { 
        name: '侧闪移动', 
        details: '不与对方正面硬抗', 
        drill: {
          drillName: "斗牛士步法",
          setup: "无。",
          phase1_technical: "1. 观察：判断对方冲撞方向。\n2. 侧闪：向侧前方滑步闪避。\n3. 助推：顺势推对方背部，利用其惯性。",
          phase2_stress: "狭窄走廊的回避：在受限空间内进行侧闪练习。",
          critical_checkpoints: "1. 时机把控。\n2. 不要过早移动。"
        }
      },
      { 
        name: '求救信号', 
        details: '引起老师/成人注意', 
        drill: {
          drillName: "有效呼救训练",
          setup: "无。",
          phase1_technical: "1. 指定：手指具体某人（如'穿红衣服的叔叔'）。\n2. 指令：清晰喊出'帮我报警'或'叫老师'。\n3. 持续：不要停止呼喊，直到安全。",
          phase2_stress: "在嘈杂环境呼救：模拟喧闹环境，练习穿透性发声。",
          critical_checkpoints: "1. 具体化求助对象。\n2. 消除旁观者效应。"
        }
      }
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
      '第一道防线 (First Line): 养成上车即落锁的习惯，这是防止外部入侵的最有效手段。',
      '狭窄空间 (Confined Space): 车内格斗空间受限，多使用肘击、膝撞、头槌及咬合技术。',
      '车辆武器化 (Vehicle as Weapon): 车辆本身就是2吨重的巨型武器，遇到围堵应果断撞击逃生。',
      '离车时机 (Egress Timing): 只有在车辆无法移动或起火时才选择弃车，解安全带需防卡死。'
    ],
    scenarios: [
      { danger: '路怒者疯狂拍打车窗并试图拉开车门', response: '确认中控锁 + 挂倒档/转向 + 快速驶离 (Vehicle Escape)' },
      { danger: '车门被拉开，遭强行拖拽出车外', response: '腿部勾住方向盘/门框固定 (Hook) + 蹬踹面部 + 手臂十字固 (Armbar)' },
      { danger: '后座乘客突然使用绳索/手臂勒颈抢劫', response: '双手下拉创造呼吸空间 (Pluck) + 掰折小指 (Small Joint) + 转身肘击' },
      { danger: '副驾驶歹徒持刀威胁颈部/腰部', response: '合气道二教 (Nikkyo) 控制持刀手腕 + 猛撞仪表盘/挡风玻璃' },
      { danger: '歹徒从驾驶窗伸手进来抢夺车钥匙/方向盘', response: '利用车窗升起夹住手臂 (Trap) + 猛推手肘反关节 + 击打面部' },
      { danger: '车辆被逼停，对方持棒球棍砸窗', response: '身体向中心倾斜躲避玻璃 + 双脚猛踹挡风玻璃逃生 (Defensive Kick)' },
      { danger: '被强行推入后备箱绑架', response: '寻找内部逃生拉手 (Emergency Latch) + 踢坏尾灯求救 + 破坏锁扣 (-1 机械操作)' },
      { danger: '安全带卡死无法解脱，车辆起火/落水', response: '使用战术笔/割刀切断安全带 + 破窗锤击打边角逃生 (-1 工具使用)' },
      { danger: '停车时有人试图强行拉开副驾门抢包', response: '猛烈推开车门撞击对方 (Door Weaponizing) + 鸣笛示警' },
      { danger: '在此刻被压制在驾驶位无法动弹', response: '利用头枕撞击对方头部 + 咬合反击 (Biting) + 拇指压迫眼球' }
    ],
    techniques: [
      { 
        name: '安全带防御', 
        details: '利用安全带做勒颈或防御盾', 
        drill: {
          drillName: "安全带缠绕战术",
          setup: "模拟车辆座椅。",
          phase1_technical: "1. 阻挡：拉出安全带作为盾牌阻挡刀刺。\n2. 缠绕：将安全带绕过对方颈部。\n3. 拉紧：利用身体后仰拉紧安全带勒晕对方。",
          phase2_stress: "被压制状态下的操作：在狭窄空间内，在对方压制下完成操作。",
          critical_checkpoints: "1. 速度要快。\n2. 利用身体重量。"
        }
      },
      { 
        name: '方向盘锁臂', 
        details: '利用方向盘做杠杆折臂', 
        drill: {
          drillName: "方向盘折臂",
          setup: "模拟驾驶位",
          phase1_technical: "1. 抓腕：当对方伸手进来抓领子时，控制其手腕。\n2. 穿过：将对方手臂穿过方向盘空隙。\n3. 杠杆：利用方向盘作为支点施加反关节压力。",
          phase2_stress: "对方试图拔钥匙时的反制：在争夺钥匙的瞬间完成锁臂。",
          critical_checkpoints: "1. 动作要连贯。\n2. 锁死后立即打击面部。"
        }
      },
      { 
        name: '坐姿后蹬', 
        details: '爆发力腿法', 
        drill: {
          drillName: "车内坐姿蹬腿",
          setup: "脚靶，椅子。",
          phase1_technical: "1. 提膝：在受限空间尽量将膝盖贴近胸口。\n2. 蹬踹：利用椅背反作用力，爆发性蹬出。\n3. 目标：对方面部、胸口或车门。",
          phase2_stress: "被拉车门时的阻击：对方猛拉车门，立即蹬踹其身体迫使其后退。",
          critical_checkpoints: "1. 背部紧贴椅背借力。\n2. 核心收紧。"
        }
      },
      { 
        name: '短肘击', 
        details: '狭小空间的面部切割', 
        drill: {
          drillName: "车厢内短肘",
          setup: "手靶，并在狭窄走廊进行。",
          phase1_technical: "1. 折叠：手臂完全折叠。\n2. 旋转：利用腰部微小的旋转带动肘部。\n3. 划割：肘尖像刀片一样划过目标。",
          phase2_stress: "副驾驶侵犯时的反击：模拟副驾驶座有人扑过来，使用短肘反击。",
          critical_checkpoints: "1. 注意不要撞到车窗自伤。\n2. 另一只手要护头。"
        }
      },
      { 
        name: '头枕撞击', 
        details: '抓对方头发撞击硬物', 
        drill: {
          drillName: "环境撞击术",
          setup: "模拟环境（软包）。",
          phase1_technical: "1. 控制：双手抓住对方头发或耳朵。\n2. 引导：猛力将对方头部拉向硬物（A柱、方向盘）。\n3. 连续：连续撞击直到对方失去意识。",
          phase2_stress: "纠缠状态下的连续撞击：在无法使用拳脚时，利用环境武器。",
          critical_checkpoints: "1. 发力要猛。\n2. 选择坚硬的撞击点。"
        }
      },
      { 
        name: '车门夹击', 
        details: '利用车门撞击对方身体/四肢', 
        drill: {
          drillName: "车门武器化",
          setup: "模拟车门。",
          phase1_technical: "1. 观察：确认对方肢体在车门范围内。\n2. 猛推/拉：利用全身力量猛推车门撞击，或猛拉车门夹击。\n3. 补刀：撞击后接蹬腿。",
          phase2_stress: "对方试图强行入车：在对方手抓车门框时猛烈关门。",
          critical_checkpoints: "1. 配合脚踹效果更好。\n2. 注意不要夹到自己手。"
        }
      },
      { 
        name: '钥匙穿刺', 
        details: '握持钥匙攻击软组织', 
        drill: {
          drillName: "钥匙防卫",
          setup: "钥匙。",
          phase1_technical: "1. 握持：像匕首一样握持钥匙，露出尖端。\n2. 攻击：连续刺击对方面部、眼睛或手背。\n3. 逃离：造成剧痛后立即弃车逃跑。",
          phase2_stress: "被拖拽时的近身反击：模拟被拖出车外，利用钥匙攻击对方手部。",
          critical_checkpoints: "1. 握紧防止滑落。\n2. 不要掉落钥匙（如果是车钥匙）。"
        }
      },
      { 
        name: '后方勒颈解脱', 
        details: '针对气管的解脱术', 
        drill: {
          drillName: "后座勒颈解脱",
          setup: "驾驶位模拟。",
          phase1_technical: "1. 保护气管：下巴内收，双手下拉对方手臂。\n2. 攻击小关节：掰折对方手指。\n3. 反击：转身肘击或咬合。",
          phase2_stress: "窒息感下的解脱：在被勒住且视线受阻的情况下完成解脱。",
          critical_checkpoints: "1. 保护气管第一。\n2. 动作要疯狂且坚决。"
        }
      },
      { 
        name: '手腕二教 (Nikkyo)', 
        details: '狭窄空间内的手腕强控', 
        drill: {
          drillName: "车内二教",
          setup: "狭窄空间。",
          phase1_technical: "1. 抓握：控制对方伸过来的手背。\n2. 切压：利用另一手切压手腕关节。\n3. 施压：将对方手腕下压至仪表台或档位杆上。",
          phase2_stress: "对方指指点点时的控制：当路怒者伸手进车窗指责时实施控制。",
          critical_checkpoints: "1. 利用仪表台做支点。\n2. 身体重心下压。"
        }
      },
      { 
        name: '快速离车术', 
        details: '解开安全带的战术动作', 
        drill: {
          drillName: "战术离车",
          setup: "安全带。",
          phase1_technical: "1. 清理：左手扫开衣摆，露出卡扣。\n2. 解扣：右手按下卡扣，左手同时推开车门。\n3. 翻滚：身体向外翻滚出车，保持低姿态。",
          phase2_stress: "车辆侧翻模拟：在模拟侧翻或受困状态下快速离车。",
          critical_checkpoints: "1. 防止被安全带缠绕。\n2. 出车后立即寻找掩体。"
        }
      },
      { 
        name: '鸣笛震慑', 
        details: '持续鸣笛制造心理压力', 
        drill: {
          drillName: "声波战术",
          setup: "模拟。",
          phase1_technical: "1. 持续：手掌长按喇叭不放。\n2. 灯光：配合远光灯闪烁。\n3. 呼救：引起路人注意。",
          phase2_stress: "夜间遇袭：在黑暗中利用声光制造混乱。",
          critical_checkpoints: "1. 持续不间断。\n2. 不要犹豫。"
        }
      },
      { 
        name: '挡风玻璃踢击', 
        details: '双脚踹破玻璃逃生', 
        drill: {
          drillName: "破窗逃生",
          setup: "软垫模拟玻璃。",
          phase1_technical: "1. 姿势：背靠座椅，双脚抬起。\n2. 目标：瞄准挡风玻璃的边角（最脆弱处）。\n3. 发力：双脚同时猛烈蹬踹。",
          phase2_stress: "落水逃生模拟：在模拟车辆进水（时间紧迫）的情况下破窗。",
          critical_checkpoints: "1. 攻击边角而非中心。\n2. 清理残渣防止割伤。"
        }
      }
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
      '生命至上 (Life First): 面对持刀抢劫，财物可以重来，生命只有一次，顺从是首选策略。',
      '长物阻隔 (Create Distance): 面对无差别砍杀，利用椅子、棍棒等长物保持距离至关重要。',
      '移动盾牌 (Mobile Shield): 善用背包作为盾牌护住颈动脉与心脏，牺牲背包换取生存空间。',
      '控制持械手 (Control the Weapon): 近身搏斗中，控制对方持刀手比击打对方面部更重要。'
    ],
    scenarios: [
      { danger: '歹徒将刀抵在腹部低声索要钱财', response: '举手示弱分散注意 + 瞬间抓腕小手返 (Kote Gaeshi) + 逃离' },
      { danger: '火车站突发暴徒持砍刀无差别冲入人群', response: 'S型奔跑逃离 (Zigzag Run) + 寻找混凝土掩体 (Cover) + 引导疏散' },
      { danger: '被逼入死角，对方持刀挥舞逼近', response: '脱下背包做盾牌 (Shield) + 正蹬 (Teep) 阻击 + 投掷物品' },
      { danger: '对方突然反手持刀从下向上捅刺 (Ice Pick)', response: '身体后弓 (Hollow Out) + 双手X型下压格挡 + 膝撞头部' },
      { danger: '歹徒正手持刀从上向下劈砍 (Psycho Stab)', response: '360度手臂格挡 (360 Defense) + 同时直拳击打面部 + 缠抱控制' },
      { danger: '身边有灭火器/椅子等环境物品', response: '喷射灭火器致盲/投掷椅子干扰 + 创造逃生通道' },
      { danger: '被歹徒从背后持刀勒颈挟持', response: '双手控制持刀手臂 (2-on-1) + 身体下沉转体 + 肘击肋部' },
      { danger: '在倒地状态下对方持刀扑上来', response: '双腿蹬踹控制距离 (Ground Kicks) + 保护重要脏器' },
      { danger: '对方试图夺取你的防御武器（如背包）', response: '低位侧踹膝盖 (Oblique Kick) + 猛拉背包破坏重心' },
      { danger: '遭遇多名持刀歹徒围攻', response: '利用地形限制对方展开 (Stacking) + 寻找出口绝不恋战' }
    ],
    techniques: [
      { 
        name: '背包盾牌术', 
        details: '正确握持背包保护颈动脉与心脏', 
        drill: { 
            drillName: "背包防刀战术", 
            setup: "背包。", 
            phase1_technical: "1. 握持：双手抓紧背带，将背包举在胸前。\n2. 角度：略微倾斜，防止刀刃垂直刺穿。\n3. 跟进：挡住第一刀后，立即蹬踹。", 
            phase2_stress: "连续劈砍防御：对方疯狂劈砍，利用背包格挡并寻找逃跑路线。", 
            critical_checkpoints: "1. 不要遮挡视线。\n2. 始终保持背包在身前。" 
        } 
      },
      { 
        name: '360度防御', 
        details: '全方位手臂格挡', 
        drill: {
          drillName: "360格挡反应",
          setup: "泡沫刀。",
          phase1_technical: "1. 识别：判断攻击角度。\n2. 格挡：小臂90度外格，同时身体前冲。\n3. 反击：格挡同时另一手攻击颈部。",
          phase2_stress: "盲眼反应测试：闭眼，听到口令睁眼应对随机角度攻击。",
          critical_checkpoints: "1. 格挡要痛击对方前臂。\n2. 必须同时反击。"
        }
      },
      { 
        name: '俄式缠腕 (2-on-1)', 
        details: '双手控制单手腕的强力控制', 
        drill: {
          drillName: "2-on-1控制",
          setup: "橡胶刀。",
          phase1_technical: "1. 抓腕：双手控制对方持刀手腕。\n2. 施压：将对方手臂紧贴自己胸口。\n3. 破坏：利用身体旋转破坏对方重心。",
          phase2_stress: "对方极力挣脱时的控制：在对方疯狂抽手时保持控制。",
          critical_checkpoints: "1. 像抱婴儿一样抱紧手臂。\n2. 身体重量压在对方肩膀。"
        }
      },
      { 
        name: '小手返夺刀', 
        details: '利用腕关节折叠迫使松手', 
        drill: {
          drillName: "动态夺刀",
          setup: "橡胶刀。",
          phase1_technical: "1. 控制：双手控制对方手腕。\n2. 折叠：拇指按压关节，向小指方向折叠。\n3. 切割：螺旋向下切，迫使松手。",
          phase2_stress: "抵抗状态下的夺刀：对方用力握刀不放，利用膝撞配合夺刀。",
          critical_checkpoints: "1. 注意刀口指向。\n2. 身体配合转动。"
        }
      },
      { 
        name: '灭火器战术', 
        details: '喷射与砸击的结合', 
        drill: {
          drillName: "灭火器攻防",
          setup: "灭火器模型。",
          phase1_technical: "1. 拔销：快速拔掉保险销。\n2. 喷射：对准面部喷射致盲。\n3. 砸击：当对方捂眼时，使用瓶底砸击。",
          phase2_stress: "模拟真实场景操作：在跑动中寻找灭火器并反击。",
          critical_checkpoints: "1. 保持距离。\n2. 喷射要持续。"
        }
      },
      { 
        name: '防暴叉/椅子使用', 
        details: '利用长物体保持距离', 
        drill: {
          drillName: "椅子防御术",
          setup: "椅子。",
          phase1_technical: "1. 抓握：双手抓握椅背。\n2. 指向：椅腿向前，对准对方面部/喉咙。\n3. 戳击：猛烈戳击迫使对方后退。",
          phase2_stress: "对方冲锋时的阻击：对方持刀冲锋，利用椅子阻挡并反击。",
          critical_checkpoints: "1. 不要让对方抓住椅子。\n2. 保持重心稳定。"
        }
      },
      { 
        name: '杠杆夺刀', 
        details: '利用手指/手腕反关节', 
        drill: {
          drillName: "指关节夺刀",
          setup: "橡胶刀。",
          phase1_technical: "1. 抓指：混乱中抓住对方手指。\n2. 折断：向手背方向猛烈反折。\n3. 夺取：对方松手瞬间踢开刀具。",
          phase2_stress: "力量悬殊下的夺刀：在无法控制手腕时，攻击手指。",
          critical_checkpoints: "1. 只要折断一根手指即可。\n2. 动作要狠。"
        }
      },
      { 
        name: '侧闪击打', 
        details: '避开攻击线同时反击', 
        drill: {
          drillName: "侧闪反击",
          setup: "泡沫刀。",
          phase1_technical: "1. 闪避：向外侧闪步，避开中线。\n2. 拍挡：拍挡对方持刀手。\n3. 反击：同时直拳打击面部。",
          phase2_stress: "连续刺击下的闪避：对方连续直刺，训练者连续侧闪反击。",
          critical_checkpoints: "1. 不要停留在中线。\n2. 闪避幅度要够。"
        }
      },
      { 
        name: '正蹬阻击', 
        details: '利用腿长优势防止近身', 
        drill: {
          drillName: "防御性正蹬 (Teep)",
          setup: "脚靶。",
          phase1_technical: "1. 提膝：迅速提膝。\n2. 蹬出：髋部发力，脚掌蹬出。\n3. 目标：对方腹部或髋部，阻断其前进。",
          phase2_stress: "对方冲刺时的阻停：在对方全速冲刺时将其蹬停。",
          critical_checkpoints: "1. 保持重心后仰。\n2. 接触点要准确。"
        }
      },
      { 
        name: '止血急救', 
        details: '战术止血带 (Tourniquet) 使用', 
        drill: {
          drillName: "CAT止血带操作",
          setup: "止血带。",
          phase1_technical: "1. 套入：迅速套入受伤肢体。\n2. 拉紧：拉紧粘扣带。\n3. 旋转：旋转绞棒直至出血停止，卡入卡槽。",
          phase2_stress: "单手自救操作：模拟一只手受伤，仅用另一只手完成止血。",
          critical_checkpoints: "1. 位置尽可能高（近心端）。\n2. 必须旋紧至不出血。"
        }
      },
      { 
        name: '群体压制', 
        details: '多对一控制持刀暴徒', 
        drill: {
          drillName: "团队压制",
          setup: "三人一组。",
          phase1_technical: "1. 分工：一人控持刀手，一人控头，一人控腿。\n2. 压制：利用体重将对方压在地面。\n3. 夺刀：在完全控制后夺刀。",
          phase2_stress: "暴徒疯狂挣扎：模拟暴徒在地面疯狂挣扎，团队保持压制不松懈。",
          critical_checkpoints: "1. 分工明确。\n2. 注意沟通。"
        }
      },
      { 
        name: '逃生路线规划', 
        details: '快速识别安全出口', 
        drill: {
          drillName: "态势感知",
          setup: "陌生环境。",
          phase1_technical: "1. 扫描：进入环境先看出口。\n2. 识别：识别掩体和潜在武器。\n3. 决策：制定A/B逃生计划。",
          phase2_stress: "混乱中的决策：模拟警报响起，人群混乱，快速找到出口。",
          critical_checkpoints: "1. 不要盲从人群。\n2. 保持冷静。"
        }
      }
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
      '保持动态 (Stay Active): 倒地后永远不要让背部平贴地面不动，需时刻保持侧卧移动。',
      '腿部防线 (Legs as Shield): 利用双腿作为盾牌和矛，阻挡对方近身并蹬踹其膝盖/面部。',
      '头部防护 (Protect Head): 龟缩防守时务必护住后脑，防止毁灭性的足球踢(Soccer Kick)。',
      '战术起立 (Technical Stand-up): 地面格斗的终极目标是安全站起，而非在地面降服对手。'
    ],
    scenarios: [
      { danger: '被击倒在地，对方站立准备实施足球踢 (Soccer Kick)', response: '地面防御姿态 (Ground Stance) + 蹬腿阻击胫骨 + 战术起立' },
      { danger: '对方试图扑入你的两腿之间 (Guard) 进行打击', response: '巴西柔术蹬离 (Up Kick) + 剪刀扫 (Scissor Sweep) + 站起' },
      { danger: '被大体重对手骑乘位 (Mount) 压制并殴打面部', response: '手臂护头 + 巴西柔术起桥 (Upa/Bridge) + 翻转逃脱' },
      { danger: '被侧压控制 (Side Control) 无法动弹', response: '铁肘推颈 + 虾行逃脱 (Shrimping) 恢复防守 + 膝盖顶入' },
      { danger: '多人围攻并进行踢踩', response: '龟缩防守 (Turtle) 护住后脑脏器 + 翻滚靠近墙壁/障碍物' },
      { danger: '对方在地面试图实施断头台绞杀', response: '手臂过肩搭扣 (Von Flue Choke预备) + 侧向移动身体解脱' },
      { danger: '被背后裸绞 (RNC) 拖入地面', response: '保护气管 + 转身进入对方防守 + 咬合/攻击腹股沟' },
      { danger: '倒地后对方试图抢夺腰间/口袋物品', response: '将身体压在物品侧 + 单手护头 + 腿部连续蹬踹 (Kicks)' },
      { danger: '在狭窄空间（如洗手间）倒地', response: '利用墙壁蹬腿借力 + 抱腿摔 (Single Leg Takedown) 反击' },
      { danger: '从楼梯滚落后遭遇追击', response: '利用高低差蹬踹对方膝盖 + 迅速占据高位' }
    ],
    techniques: [
      { 
        name: '战术起立', 
        details: '在防御状态下安全回到站立', 
        drill: {
          drillName: "技术性起立 (Technical Stand-up)",
          setup: "软垫。",
          phase1_technical: "1. 支撑：一手护头，同侧脚蹬地，对侧手撑地。\n2. 抬臀：利用支撑点抬起臀部。\n3. 撤步：前脚向后撤步，保持视线，站起成格斗式。",
          phase2_stress: "干扰下起立：搭档手持脚靶干扰，训练者需寻找空隙起立。",
          critical_checkpoints: "1. 始终看着对手。\n2. 不要交叉双腿。"
        }
      },
      { 
        name: '地面防御姿态', 
        details: '利用双腿控制距离', 
        drill: {
          drillName: "地面盾牌 (Ground Shield)",
          setup: "无。",
          phase1_technical: "1. 侧卧：身体微侧，减少受力面。\n2. 腿盾：双腿弯曲，脚掌对准敌人。\n3. 旋转：随敌人移动而旋转，始终保持脚对人。",
          phase2_stress: "360度环绕防御：搭档快速跑动试图绕过双腿，训练者快速旋转跟踪。",
          critical_checkpoints: "1. 核心收紧。\n2. 膝盖护住躯干。"
        }
      },
      { 
        name: '起桥 (Upa)', 
        details: '爆发力破坏骑乘位平衡', 
        drill: {
          drillName: "起桥翻转 (Bridge and Roll)",
          setup: "柔道垫。",
          phase1_technical: "1. 封锁：锁住对方一只手和同侧脚。\n2. 爆发：双脚蹬地，臀部猛力上顶。\n3. 翻转：向被封锁侧翻滚，形成上位。",
          phase2_stress: "骑乘位打击逃脱：对方佩戴拳套轻击面部，防守者需在压力下完成起桥。",
          critical_checkpoints: "1. 封锁要彻底。\n2. 起桥高度要足。"
        }
      },
      { 
        name: '虾行 (Shrimping)', 
        details: '地面移动的核心技术', 
        drill: {
          drillName: "虾行逃脱 (Hip Escape)",
          setup: "柔道垫。",
          phase1_technical: "1. 支点：一脚蹬地，肩膀着地。\n2. 折叠：臀部向后上方顶出，身体成虾状。\n3. 恢复：将膝盖插入对方身体之间，恢复防守。",
          phase2_stress: "侧压逃脱：在对方体重完全压制下，利用虾行创造空间。",
          critical_checkpoints: "1. 不要平躺。\n2. 动作幅度要大。"
        }
      },
      { 
        name: '剪刀扫 (Scissor Sweep)', 
        details: '利用杠杆扫倒站立对手', 
        drill: {
          drillName: "剪刀扫摔",
          setup: "柔道垫。",
          phase1_technical: "1. 框架：一腿横拦胸口，一腿贴地。\n2. 破坏：拉拽衣领和袖子。\n3. 剪切：双腿像剪刀一样交错用力扫倒对方。",
          phase2_stress: "动态扫摔：对方试图站起时，顺势施展剪刀扫。",
          critical_checkpoints: "1. 破坏重心在前。\n2. 动作要连贯。"
        }
      },
      { 
        name: '足跟勾 (Heel Hook)', 
        details: '针对膝关节的毁灭性打击 (仅限绝境)', 
        drill: {
          drillName: "足跟勾模拟",
          setup: "柔道垫，注意安全。",
          phase1_technical: "1. 缠绕：双腿缠绕对方腿部。\n2. 锁定：前臂卡住对方脚后跟。\n3. 旋转：身体旋转，施加扭力于膝关节（点到为止）。",
          phase2_stress: "绝境反击：模拟被压制无法逃脱时，攻击下肢。",
          critical_checkpoints: "1. 严禁在训练中发力。\n2. 控制为主。"
        }
      },
      { 
        name: '地面蹬踹', 
        details: '攻击对方膝盖/腹股沟', 
        drill: {
          drillName: "地面踢击",
          setup: "脚靶。",
          phase1_technical: "1. 蓄力：膝盖收回胸前。\n2. 蹬出：用脚后跟猛力蹬出。\n3. 目标：对方膝盖或裆部。",
          phase2_stress: "对方逼近时的阻击：对方持靶逼近，利用蹬踹保持距离。",
          critical_checkpoints: "1. 发力要猛。\n2. 踢完迅速收腿。"
        }
      },
      { 
        name: '龟缩防守', 
        details: '保护要害防止重击', 
        drill: {
          drillName: "龟式防御 (Turtle)",
          setup: "无。",
          phase1_technical: "1. 团身：膝盖跪地，手肘贴膝，额头触地。\n2. 护颈：双手护住后脑和颈部。\n3. 坚固：身体紧绷，不留缝隙。",
          phase2_stress: "抗击打测试：搭档轻踢背部/臀部，体验冲击力。",
          critical_checkpoints: "1. 不要露出腹部。\n2. 保护好后脑。"
        }
      },
      { 
        name: '单腿抱摔 (Single Leg)', 
        details: '地面发动抱腿摔', 
        drill: {
          drillName: "地面抱腿摔",
          setup: "柔道垫。",
          phase1_technical: "1. 抓握：抱住对方一条小腿。\n2. 夹紧：双腿夹住该腿。\n3. 旋转：利用身体旋转摔倒对方。",
          phase2_stress: "对方踢击时的抱腿：抓住对方踢过来的腿进行摔法。",
          critical_checkpoints: "1. 抱紧不要松。\n2. 借力打力。"
        }
      },
      { 
        name: '断头台防守', 
        details: '应对对方俯身冲撞', 
        drill: {
          drillName: "防抱腿断头台",
          setup: "无。",
          phase1_technical: "1. 扣颈：当对方低头时，手臂环绕颈部。\n2. 闭锁：双手扣合。\n3. 上位：倒地后双腿缠腰（Closed Guard）完成绞杀。",
          phase2_stress: "被扑倒时的反击：在被扑倒瞬间完成断头台。",
          critical_checkpoints: "1. 必须闭锁双腿。\n2. 提拉要有力。"
        }
      },
      { 
        name: '武器防护', 
        details: '倒地时防止腰间武器被抢', 
        drill: {
          drillName: "倒地护枪",
          setup: "模拟枪套。",
          phase1_technical: "1. 覆盖：身体向武器侧侧卧，压住武器。\n2. 手护：一手按住枪套。\n3. 腿防：利用双腿蹬踹敌人。",
          phase2_stress: "抢夺测试：搭档试图抢枪，防守者在地面保护武器并反击。",
          critical_checkpoints: "1. 绝不暴露武器侧。\n2. 腿部保持攻击。"
        }
      },
      { 
        name: '环境利用', 
        details: '利用墙角防止被围攻', 
        drill: {
          drillName: "墙角战术",
          setup: "墙角。",
          phase1_technical: "1. 靠墙：迅速背靠墙壁，消除后方威胁。\n2. 支起：背部贴墙，双腿防御。\n3. 攀爬：利用墙壁辅助站起。",
          phase2_stress: "多人围攻：在墙角应对两人的攻击。",
          critical_checkpoints: "1. 保护好头部。\n2. 寻找起立机会。"
        }
      }
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
      '重定向火线 (Redirect): 动作的第一步必须是移动身体并推开枪口，避开致命弹道。',
      '绝对控制 (Absolute Control): 抓握套筒或枪管时必须死死锁住，防止对方抽枪或再次射击。',
      '猛烈反击 (Aggressive Counter): 在控制武器的同时，必须用膝肘对要害进行毁灭性打击。',
      '夺取武器 (Disarm): 利用杠杆原理将武器从对方手中剥离，并立即拉开距离上膛。'
    ],
    scenarios: [
      { danger: '歹徒正面手枪指头（处决式威胁）', response: '侧闪拍挡重定向 (Redirect) + 抓握套筒防复进 + 踢裆夺枪' },
      { danger: '手枪抵住后背/后脑', response: '举手诱骗 + 快速转身扫开枪管 + 腋下夹紧手臂 (Trap) + 卷腕夺枪' },
      { danger: '歹徒持枪挟持人质（枪指侧面太阳穴）', response: '双手举起 + 猛转体推开枪口 + 古流柔术小手返 (Kote Gaeshi)' },
      { danger: '遭遇长枪/步枪正面指胸威胁', response: '切入内围拍开枪管 (C-Clamp) + 刺刀式突进 + 膝撞腹股沟' },
      { danger: '枪击发生时寻找掩体', response: '辨别Cover(防弹)与Concealment(遮挡) + 匍匐移动' },
      { danger: '在极近距离歹徒试图拔枪', response: '双手封堵枪套 (Jamming) + 头槌攻击 + 膝撞' },
      { danger: '夺枪过程中双方激烈争夺', response: '利用枪管作为杠杆猛戳面部 + 咬合手臂 (Biting) + 撕扯扳机指' },
      { danger: '歹徒持枪从侧面逼近', response: '利用余光观察 + 转身拍挡 + 俄式缠臂 (Russian Tie) 控制' },
      { danger: '被歹徒强迫跪下处决', response: '利用起身假动作 + 扑腿抱摔 + 夺枪' },
      { danger: '夺枪成功后对方试图反扑', response: '拉开距离 (Create Distance) + 拍击弹匣/上膛 (Tap-Rack) + 射击/警戒' }
    ],
    techniques: [
      { 
        name: '火线重定向', 
        details: '移开身体避开弹道', 
        drill: {
          drillName: "火线规避训练 (Redirect)",
          setup: "蓝枪（训练枪）。",
          phase1_technical: "1. 侧闪：身体向侧方移动，避开枪口指向。\n2. 拍挡：同时手掌拍击持枪手腕/枪管，使其偏离。\n3. 冻结：动作要干脆，不要回弹。",
          phase2_stress: "反应速度测试：听到口令瞬间完成火线重定向。",
          critical_checkpoints: "1. 身体移动比手快。\n2. 确保完全避开弹道。"
        }
      },
      { 
        name: '套筒抓握', 
        details: '防止手枪复进卡壳', 
        drill: {
          drillName: "套筒控制技术",
          setup: "蓝枪。",
          phase1_technical: "1. 抓握：全手掌紧紧握住手枪套筒。\n2. 锁定：利用握力防止套筒后座（会导致卡壳）。\n3. 施压：向下压枪口，破坏对方手腕。",
          phase2_stress: "强力对抗：对方用力抽枪，防守者必须握死套筒不松手。",
          critical_checkpoints: "1. 避开抛壳窗（防止烫伤，训练中模拟）。\n2. 握力要足。"
        }
      },
      { 
        name: '武器留存', 
        details: '防止对方抽回武器', 
        drill: {
          drillName: "近身留枪",
          setup: "蓝枪。",
          phase1_technical: "1. 贴身：将对方持枪手紧贴自己胸部。\n2. 夹紧：利用腋下或手臂夹紧。\n3. 打击：同时膝撞或头撞。",
          phase2_stress: "动态抽离测试：对方猛烈抽手试图退后，必须粘住对方。",
          critical_checkpoints: "1. 不要让对方拉开距离。\n2. 始终控制枪口朝外。"
        }
      },
      { 
        name: 'C型手控制', 
        details: '控制枪口指向', 
        drill: {
          drillName: "C-Clamp Control",
          setup: "蓝枪。",
          phase1_technical: "1. 虎口：虎口卡住枪管/护木。\n2. 指向：强行将枪口推向安全方向（地面或上方）。\n3. 刚性：手臂保持刚性支撑。",
          phase2_stress: "长枪控制：在对方持长枪突刺时，使用C型手控制枪管。",
          critical_checkpoints: "1. 避开扳机。\n2. 发力要果断。"
        }
      },
      { 
        name: '膝撞腹股沟', 
        details: '控制同时也攻击', 
        drill: {
          drillName: "夺枪膝撞",
          setup: "蓝枪，护裆。",
          phase1_technical: "1. 控制：双手控制持枪手。\n2. 撞击：在控制的同时，连续膝撞腹股沟。\n3. 节奏：撞击与夺枪动作结合。",
          phase2_stress: "抗压测试：在对方推搡中保持平衡并膝撞。",
          critical_checkpoints: "1. 不要因为撞击而松开手。\n2. 撞击要有穿透力。"
        }
      },
      { 
        name: '扳机护圈杠杆', 
        details: '利用护圈折断手指', 
        drill: {
          drillName: "折指夺枪",
          setup: "蓝枪。",
          phase1_technical: "1. 抓握：抓住枪身。\n2. 旋转：以扳机护圈为支点，猛烈旋转枪身。\n3. 破坏：利用杠杆原理折断对方扣扳机的手指。",
          phase2_stress: "手指对抗：对方手指扣死扳机，利用爆发力折断（模拟）。",
          critical_checkpoints: "1. 速度即力量。\n2. 旋转方向要正确（通常向手指反关节方向）。"
        }
      },
      { 
        name: '枪口偏转', 
        details: '持续改变枪口方向', 
        drill: {
          drillName: "动态偏转",
          setup: "蓝枪。",
          phase1_technical: "1. 跟踪：随对方动作调整。\n2. 偏转：始终保持枪口不指向自己。\n3. 借力：利用对方调整方向的力量反向控制。",
          phase2_stress: "挣扎中的偏转：在地面扭打中保持枪口朝外。",
          critical_checkpoints: "1. 哪怕一瞬间指向自己也是致命的。\n2. 全身协力。"
        }
      },
      { 
        name: '旋转夺枪', 
        details: '利用扭矩夺取武器', 
        drill: {
          drillName: "Whip Disarm",
          setup: "蓝枪。",
          phase1_technical: "1. 控制：一手握枪管，一手握握把/手腕。\n2. 撕裂：猛烈向对方拇指缺口方向撕扯。\n3. 回收：夺枪后立即后撤上膛。",
          phase2_stress: "全速夺枪：全速完成夺枪动作并拉开距离。",
          critical_checkpoints: "1. 利用腰部旋转力量。\n2. 夺枪后立即进入战斗状态。"
        }
      },
      { 
        name: '排障上膛', 
        details: '夺枪后的战术动作', 
        drill: {
          drillName: "Tap-Rack-Bang",
          setup: "蓝枪。",
          phase1_technical: "1. 拍击：拍击弹匣底部确认到位 (Tap)。\n2. 拉栓：拉动套筒上膛/排除故障 (Rack)。\n3. 瞄准：指向威胁目标 (Ready/Bang)。",
          phase2_stress: "夺枪后立即射击：夺枪后在1秒内完成上膛并射击。",
          critical_checkpoints: "1. 动作要形成肌肉记忆。\n2. 保持视线在目标上。"
        }
      },
      { 
        name: '逃生规划', 
        details: '枪击现场的路线选择', 
        drill: {
          drillName: "Z字形逃生",
          setup: "障碍物。",
          phase1_technical: "1. 跑动：不走直线。\n2. 掩体：在掩体间移动。\n3. 低姿：降低身体投影面积。",
          phase2_stress: "枪声模拟：在模拟枪声中快速穿越障碍区。",
          critical_checkpoints: "1. 速度第一。\n2. 不要停留在开阔地。"
        }
      },
      { 
        name: '扑倒防御', 
        details: '最后手段的近身扑击', 
        drill: {
          drillName: "自杀式扑倒",
          setup: "软垫。",
          phase1_technical: "1. 接近：趁对方换弹或分神。\n2. 扑击：低姿态扑向对方腰部。\n3. 缠抱：死死抱住并带入地面。",
          phase2_stress: "绝境冲锋：在无路可逃时发动最后冲锋。",
          critical_checkpoints: "1. 犹豫就会败北。\n2. 利用体重优势。"
        }
      },
      { 
        name: '肉盾战术', 
        details: '极端情况利用施暴者挡子弹', 
        drill: {
          drillName: "人体盾牌",
          setup: "假人或搭档。",
          phase1_technical: "1. 控制：勒住对方颈部或手臂。\n2. 旋转：将对方身体置于自己和威胁之间。\n3. 移动：拖拽对方移动。",
          phase2_stress: "多枪手场景：利用已控制的枪手挡住另一枪手的视线。",
          critical_checkpoints: "1. 缩在盾牌后面。\n2. 控制要牢固。"
        }
      }
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
      '安全屋策略 (Safe Room): 全家应约定一个坚固房间作为避难所，配备通讯工具与防卫器械。',
      '家庭暗号 (Family Code): 设立紧急暗号，一旦喊出，全员立即执行既定的撤离或躲避计划。',
      '扼守咽喉 (Choke Point): 楼梯口是最佳战术防守点，利用高低差优势阻击入侵者。',
      '固守待援 (Stand Ground): 除非家人受威胁，否则绝不主动离开安全屋去搜寻入侵者。'
    ],
    scenarios: [
      { danger: '开门瞬间被歹徒强行冲撞闯入', response: '身体重心顶门 + 猛踹膝盖 (Stop Kick) + 柔道大外刈 (Osoto Gari)' },
      { danger: '深夜在卧室惊醒发现入侵者逼近床边', response: '投掷枕头/台灯致盲 + 蹬腿保持距离 (Front Kick) + 寻找隐蔽武器' },
      { danger: '在狭窄走廊与持刀歹徒遭遇', response: '利用墙壁支撑正蹬 (Teep) + 撤退至安全屋 + 锁门' },
      { danger: '必须保护身后的家人/孩子', response: '人体盾牌站位 (Human Shield) + 指挥家人撤退/报警 + 殊死搏斗' },
      { danger: '在厨房遭遇袭击', response: '利用椅子阻挡 (Barrier) + 投掷厨具/开水 + 寻找刀具反击' },
      { danger: '歹徒试图从阳台/窗户爬入', response: '攻击手指/手部 (Joint Manipulation) + 关窗夹击 + 推落' },
      { danger: '全家撤离至安全屋但歹徒试图破门', response: '利用家具堵门 + 侧向站位 (Tactical Angle) 防止穿透射击 + 准备伏击' },
      { danger: '在沙发/客厅区域发生扭打', response: '利用家具作为掩体 + 柔道扫踢破坏重心 (De-Ashibarai) + 简易武器打击' },
      { danger: '夜间黑暗环境中听到异响', response: '战术手电强光致盲 (Strobe) + 保持静默 + 确认身份' },
      { danger: '歹徒挟持一名家庭成员作为人质', response: '举手安抚情绪 + 寻找瞬间机会突袭 (头部/持械手) (-1 极高风险)' }
    ],
    techniques: [
      { 
        name: '门禁阻挡', 
        details: '身体重心顶门技术', 
        drill: {
          drillName: "门禁防守",
          setup: "门。",
          phase1_technical: "1. 姿势：弓步，肩膀和脚抵住门。\n2. 发力：利用腿部蹬地力量死顶。\n3. 呼救：同时大声呼救。",
          phase2_stress: "强力破门测试：搭档在门外用力推撞，防守者必须顶住。",
          critical_checkpoints: "1. 重心要低。\n2. 脚要防滑。"
        }
      },
      { 
        name: '走廊阻击', 
        details: '狭长地带的腿法应用', 
        drill: {
          drillName: "走廊正蹬",
          setup: "狭窄通道（如两排椅子中间）。",
          phase1_technical: "1. 支撑：双手可扶墙保持平衡。\n2. 蹬踹：连续正蹬阻断对方前进。\n3. 后退：边打边退至安全屋。",
          phase2_stress: "狭路相逢：在仅容一人的通道内阻击持刀进攻者。",
          critical_checkpoints: "1. 利用墙壁稳定身体。\n2. 不要让对方近身。"
        }
      },
      { 
        name: '简易武器', 
        details: '台灯/灭火器的战术使用', 
        drill: {
          drillName: "居家武器化",
          setup: "各种居家物品（模型）。",
          phase1_technical: "1. 识别：快速识别手边可用的硬物。\n2. 投掷：先投掷干扰，再近身攻击。\n3. 打击：利用物品尖角打击要害。",
          phase2_stress: "随机物品测试：给什么用什么，进行模拟防御。",
          critical_checkpoints: "1. 物品是消耗品。\n2. 制造机会逃跑。"
        }
      },
      { 
        name: '强光致盲', 
        details: '战术手电的使用', 
        drill: {
          drillName: "光战术 (Light Discipline)",
          setup: "高流明手电，暗室。",
          phase1_technical: "1. 频闪：开启爆闪模式对准眼睛。\n2. 移动：照一下换个位置，不要暴露自己。\n3. 打击：利用手电攻击头攻击。",
          phase2_stress: "暗夜遭遇：在全黑环境中利用手电致盲并制服入侵者。",
          critical_checkpoints: "1. 举高手电远离头部（防止对方射击光源）。\n2. 闪完即动。"
        }
      },
      { 
        name: '下路攻击', 
        details: '针对膝盖胫骨的破坏', 
        drill: {
          drillName: "低位破坏",
          setup: "踢靶。",
          phase1_technical: "1. 铲踢：脚刃铲击对方胫骨/膝盖。\n2. 踩踏：用力踩踏脚面。\n3. 扫踢：扫击脚踝破坏平衡。",
          phase2_stress: "对抗中破坏下盘：在纠缠中不断攻击下盘。",
          critical_checkpoints: "1. 隐蔽性高。\n2. 破坏移动能力。"
        }
      },
      { 
        name: '楼梯防御', 
        details: '利用高低差踢击', 
        drill: {
          drillName: "高地防守",
          setup: "楼梯或台阶。",
          phase1_technical: "1. 站位：站在高处，居高临下。\n2. 踢击：向下踢击对方面部或胸口。\n3. 推落：利用重力将对方推下楼梯。",
          phase2_stress: "楼梯口攻防：死守楼梯口，不让入侵者上来。",
          critical_checkpoints: "1. 利用地形优势。\n2. 注意自身平衡。"
        }
      },
      { 
        name: '藏械策略', 
        details: '家中防御武器的放置', 
        drill: {
          drillName: "武器部署",
          setup: "居家环境图纸。",
          phase1_technical: "1. 规划：在玄关、卧室、客厅隐蔽处放置防卫工具。\n2. 记忆：形成肌肉记忆，闭眼能摸到。\n3. 快速取用：练习3秒内取用。",
          phase2_stress: "突发状况取械：模拟警报响起，从床上跳起取械。",
          critical_checkpoints: "1. 隐蔽但易取。\n2. 避免被儿童触及。"
        }
      },
      { 
        name: '安全屋流程', 
        details: '快速撤退与固守', 
        drill: {
          drillName: "全家撤离演练",
          setup: "房间。",
          phase1_technical: "1. 集合：清点人数。\n2. 撤退：进入安全屋并锁门。\n3. 防御：堵门、报警、持械待命。",
          phase2_stress: "限时撤离：全家在30秒内完成所有动作。",
          critical_checkpoints: "1. 保持安静。\n2. 坚守不出。"
        }
      },
      { 
        name: '近身肘击', 
        details: '极近距离的打击', 
        drill: {
          drillName: "贴身短打",
          setup: "手靶。",
          phase1_technical: "1. 爆发：在极近距离爆发肘击。\n2. 连击：左右连肘。\n3. 缠抱：结合缠抱膝撞。",
          phase2_stress: "贴身扭打：在被抱住时使用肘击开路。",
          critical_checkpoints: "1. 转腰发力。\n2. 攻击面部。"
        }
      },
      { 
        name: '家具掩体', 
        details: '利用沙发/床做防御', 
        drill: {
          drillName: "掩体利用",
          setup: "家具。",
          phase1_technical: "1. 阻隔：始终保持家具在两人中间。\n2. 绕行：围绕家具移动。\n3. 投掷：扔枕头、台灯干扰。",
          phase2_stress: "绕桌游斗：利用桌子与持刀者周旋。",
          critical_checkpoints: "1. 保持距离。\n2. 不要被逼入死角。"
        }
      },
      { 
        name: '双人战术', 
        details: '夫妻/室友配合制敌', 
        drill: {
          drillName: "双人协同",
          setup: "两人一组。",
          phase1_technical: "1. 站位：一人在前防御，一人在后报警/保护孩子。\n2. 支援：必要时利用长物支援前方。\n3. 沟通：使用暗号。",
          phase2_stress: "模拟入侵：两人配合应对一名入侵者。",
          critical_checkpoints: "1. 保护背后。\n2. 默契配合。"
        }
      },
      { 
        name: '报警话术', 
        details: '准确传达信息', 
        drill: {
          drillName: "紧急呼叫",
          setup: "手机。",
          phase1_technical: "1. 关键信息：地址、人数、武器、目前状况。\n2. 保持通话：不要挂断（除非有危险）。\n3. 免提：开启免提，解放双手。",
          phase2_stress: "高压报警：在心跳极快、极度紧张下清晰报警。",
          critical_checkpoints: "1. 地址最重要。\n2. 声音清晰。"
        }
      }
    ],
    tags: ['家庭防卫', '入侵应对', '简易武器']
  },
  {
    id: 'civ-9',
    category: 'CIVILIAN',
    difficulty: 'ADVANCED',
    title: '短棍防卫与菲律宾魔杖实战',
    hooks: ['雨伞、自拍杆的战术应用', '菲律宾魔杖 (Kali) 入门', '以长制短的智慧'],
    description: '融合菲律宾魔杖 (Kali/Escrima) 与 KMCN深圳马伽术 (Krav Maga) 民用短棍技术。教授如何利用手中的雨伞、登山杖进行有效防身防御，保持安全距离。',
    principles: [
      '肢体延伸 (Extension): 将短棍、雨伞视为手臂的延伸，大幅增加防御半径与打击力度。',
      '去牙战术 (Defang the Snake): 优先打击对方持械手(蛇牙)，使其丧失攻击能力而非硬拼。',
      '流动卸力 (Flow): 利用菲律宾魔杖的流动性，通过旋转卸掉对方重武器的冲击力。',
      '距离控制 (Range Control): 始终保持在长兵器的打击范围内，而在对方徒手攻击范围外。'
    ],
    scenarios: [
      { danger: '对方持木棍/铁管从上向下劈击', response: '菲律宾魔杖屋顶式格挡 (Roof Block) + 击打持械手腕' },
      { danger: '对方试图抓住你手中的棍子/雨伞', response: '蛇形缠绕缴械 (Snake Disarm) + 关节控制 + 击打面部' },
      { danger: '遭遇持刀歹徒挥舞攻击', response: '利用长距离优势击打持刀手 (Defanging the Snake) + 保持移动' },
      { danger: '手持长柄雨伞面对威胁', response: '突然撑开雨伞致盲 + 刺刀式突刺面部/喉咙' },
      { danger: '在极近距离被对方贴身缠抱', response: '利用棍尾 (Punyo) 锤击面部/锁骨 + 勾啄眼球' },
      { danger: '对方持棍横扫腰部', response: '竖棍格挡 (Wing Block) + 击打手背 + 扫棍反击' },
      { danger: '被多名歹徒围攻', response: 'X型连续劈砍 (Figure 8) 制造防御圈 + 寻找缺口逃离' },
      { danger: '手中只有短小的战术笔/自拍杆', response: '加强拳头硬度 + 锤击太阳穴/手背 + 戳击软组织' },
      { danger: '对方冲撞试图夺取武器', response: '双手持棍猛力推击胸口 (Power Push) + 后撤步' },
      { danger: '利用短棍进行地面压制', response: '棍身卡喉/关节施压 (Choke/Lock) + 膝盖压制' }
    ],
    techniques: [
      { 
        name: 'X型打击', 
        details: '对角线连续打击技术', 
        drill: {
          drillName: "Figure 8 打击",
          setup: "短棍/魔杖。",
          phase1_technical: "1. 轨迹：画∞字，连续斜下劈击。\n2. 连贯：利用手腕转动保持棍势不停。\n3. 步法：配合三角步移动。",
          phase2_stress: "连续攻防：与搭档进行连续的对棍练习 (Sumbrada)。",
          critical_checkpoints: "1. 棍头要快。\n2. 护住另一只手。"
        }
      },
      { 
        name: 'Abanico (扇面打)', 
        details: '快速手腕翻转打击', 
        drill: {
          drillName: "Abanico 干扰",
          setup: "短棍。",
          phase1_technical: "1. 手腕：利用手腕快速翻转，如扇扇子。\n2. 目标：对方面部或太阳穴。\n3. 速度：快进快出，用于干扰。",
          phase2_stress: "近身快打：在近距离快速使用扇面打逼退对手。",
          critical_checkpoints: "1. 握棍要松紧适度。\n2. 动作要突然。"
        }
      },
      { 
        name: 'Punyo 击打', 
        details: '近身利用棍尾攻击', 
        drill: {
          drillName: "棍尾近战",
          setup: "短棍。",
          phase1_technical: "1. 握法：留出一截棍尾 (Punyo)。\n2. 勾挂：利用棍尾勾住对方颈部或手臂。\n3. 砸击：近距离砸击面部。",
          phase2_stress: "缠斗解脱：在被抱住时使用棍尾攻击。",
          critical_checkpoints: "1. 棍尾是近战利器。\n2. 力量集中一点。"
        }
      },
      { 
        name: '蛇形缴械', 
        details: '缠绕对方手臂夺取武器', 
        drill: {
          drillName: "Snake Disarm",
          setup: "短棍配对。",
          phase1_technical: "1. 缠绕：用棍子像蛇一样缠绕对方持棍手臂。\n2. 杠杆：利用棍子做杠杆支点。\n3. 剥离：施压迫使对方松手。",
          phase2_stress: "对抗缴械：对方用力抵抗，必须利用身体转动完成缴械。",
          critical_checkpoints: "1. 缠绕要紧。\n2. 利用身体力量。"
        }
      },
      { 
        name: '屋顶格挡', 
        details: '防御上方垂直攻击', 
        drill: {
          drillName: "Roof Block",
          setup: "泡沫棍。",
          phase1_technical: "1. 架起：棍子斜向上架起，形成屋顶状。\n2. 支撑：另一只手辅助支撑棍身。\n3. 卸力：利用斜面滑开对方攻击。",
          phase2_stress: "连续劈头防御：对方疯狂劈头，连续使用屋顶格挡并反击。",
          critical_checkpoints: "1. 棍头要高于手（防滑落）。\n2. 保护头部。"
        }
      },
      { 
        name: '推棍技术', 
        details: '双手持棍推击创造距离', 
        drill: {
          drillName: "双手推击",
          setup: "短棍。",
          phase1_technical: "1. 持棍：双手握住棍两端。\n2. 推击：猛力推击对方胸口或颈部。\n3. 空间：利用推击创造出的空间进行打击。",
          phase2_stress: "近身推开：对方贴身时，利用棍身推开。",
          critical_checkpoints: "1. 发力要猛。\n2. 保持重心。"
        }
      },
      { 
        name: '手腕杠杆', 
        details: '利用棍子增强关节技力量', 
        drill: {
          drillName: "棍辅助锁技",
          setup: "短棍。",
          phase1_technical: "1. 插入：将棍子插入对方关节空隙。\n2. 施压：利用棍子作为杠杆施压。\n3. 控制：剧痛迫使服从。",
          phase2_stress: "控制降服：利用棍子完成关节控制并带离。",
          critical_checkpoints: "1. 支点要准。\n2. 小心骨折（训练中点到为止）。"
        }
      },
      { 
        name: '红东多 (Redondo)', 
        details: '圆形轨迹回旋打击', 
        drill: {
          drillName: "Redondo Strike",
          setup: "轮胎靶。",
          phase1_technical: "1. 轨迹：棍头画圆，借力打力。\n2. 连击：利用回弹力进行第二次打击。\n3. 发力：放松手腕，鞭打效果。",
          phase2_stress: "力量耐力：在轮胎上连续进行1分钟Redondo打击。",
          critical_checkpoints: "1. 不要硬停。\n2. 顺势而为。"
        }
      },
      { 
        name: '击打神经', 
        details: '针对膝盖/手肘的麻痹打击', 
        drill: {
          drillName: "精准神经打击",
          setup: "棍靶。",
          phase1_technical: "1. 瞄准：针对骨骼突起处或神经密集区。\n2. 抽击：快速抽打。\n3. 效果：造成瞬间麻痹。",
          phase2_stress: "动态目标打击：打击移动中的手腕或膝盖。",
          critical_checkpoints: "1. 准度比力度重要。\n2. 破坏武器手。"
        }
      },
      { 
        name: '雨伞战术', 
        details: '开伞与收伞的格斗应用', 
        drill: {
          drillName: "特工雨伞",
          setup: "长柄伞。",
          phase1_technical: "1. 刺击：像刺刀一样使用伞尖。\n2. 开伞：突然开伞致盲/吓阻。\n3. 勾拉：利用伞柄钩拉对方颈部/腿部。",
          phase2_stress: "雨伞防御战：利用雨伞对抗持刀者。",
          critical_checkpoints: "1. 伞骨脆弱，主要用刺。\n2. 开伞时机要准。"
        }
      },
      { 
        name: '步法移动', 
        details: '三角步法 (Triangle Footwork)', 
        drill: {
          drillName: "三角步 (V-Step)",
          setup: "地面标记。",
          phase1_technical: "1. 路线：沿V字形或倒V字形移动。\n2. 角度：始终处于对方侧面。\n3. 配合：步法与打击同步。",
          phase2_stress: "双棍对练：配合步法进行双棍攻防。",
          critical_checkpoints: "1. 不要交叉脚。\n2. 保持格斗距离。"
        }
      },
      { 
        name: '缴械术', 
        details: '夺取对方棍棒的技术', 
        drill: {
          drillName: "空手夺棍",
          setup: "泡沫棍。",
          phase1_technical: "1. 贴近：进入内围，避开打击点。\n2. 封锁：控制持棍手。\n3. 夺取：利用杠杆夺棍。",
          phase2_stress: "实战夺棍：在对方连续攻击中寻找机会夺棍。",
          critical_checkpoints: "1. 胆大心细。\n2. 必须先控制手臂。"
        }
      }
    ],
    tags: ['防卫器械', '菲律宾魔杖', '长距离']
  },

  // =========================================================================
  // MILITARY THEMES (6 Total)
  // =========================================================================
  {
    id: 'mil-1',
    category: 'MILITARY',
    difficulty: 'INTERMEDIATE',
    title: 'FBI特工必修：近身控制与逮捕术 (CQC)',
    hooks: ['五秒制服：从接触到手铐', '古流柔术逮捕技', '不仅是打倒，是彻底控制'],
    description: '针对执法人员。重点在于如何在保护自己武器的同时，利用古流柔术的关节锁和投技，迅速将嫌疑人从站立控制到地面并完成上铐。',
    principles: [
      '武器留存 (Weapon Retention): 在近身格斗中，保护自己的配枪不被抢夺是最高优先级。',
      '中轴控制 (Centerline): 破坏对方脊柱与中轴线平衡，使其无法发力，从而实施抓捕。',
      '疼痛服从 (Pain Compliance): 利用关节技和压点控制制造剧痛，迫使嫌疑人放弃抵抗。',
      '战术协同 (Contact & Cover): 始终保持一人控制(Contact)、一人掩护(Cover)的战术站位。'
    ],
    scenarios: [
      { danger: '嫌疑人在盘查时突然推搡并试图抢枪', response: '武器留存 (Retention) 下压固定 + 肘击面部 + 脇固 (Waki Gatame)' },
      { danger: '嫌疑人双手抱胸抗拒执法', response: '直臂压制 (Arm Bar) 强制分离手臂 + 施压带倒' },
      { danger: '嫌疑人挥拳抵抗逮捕', response: '潜避 (Duck Under) + 拿背 + 站立裸绞 (RNC) 控制' },
      { danger: '地面压制时嫌疑人激烈翻滚挣扎', response: '膝盖压腹 (Knee on Belly) 控制呼吸 + 警棍击打大腿神经' },
      { danger: '被嫌疑人死死抱住腰部', response: '强力推脸 (Cross Face) 制造痛感 + 腕缄 (Kimura) 锁臂' },
      { danger: '嫌疑人倒地后隐藏双手拒绝背手', response: '鹅颈腕锁 (Goose Neck) + 警棍撬压 + 拇指痛点控制' },
      { danger: '押解途中嫌疑人突然头撞反抗', response: '折腕提拉 + 扫腿摔 (Sweep) + 膝盖压颈' },
      { danger: '双人小组面对暴恐分子持刀冲锋', response: '一人持枪掩护 (Cover) + 一人侧翼突入控制 (Contact)' },
      { danger: '在狭窄楼道进行搜身', response: '控制嫌疑人额头贴墙 + 破坏重心 (Spread Eagle) + 单手搜身' },
      { danger: '嫌疑人假装配合突然掏出匕首', response: '控制持械手腕 + 肘关节反折 + 夺刀制服' }
    ],
    techniques: [
      { 
        name: '武器留存 (Weapon Retention)', 
        details: '枪套防御/双手固守',
        drill: {
          drillName: "Holster Retention Drill (枪套防抢训练)",
          setup: "佩戴模拟训练枪（蓝枪）及枪套，配对练习。",
          phase1_technical: "1. 下压(Clamp)：当嫌疑人手触碰枪柄，立即用同侧手猛力下压其手，将其手'钉'在枪套上。\n2. 降低重心(Base)：向持枪侧后撤步，降低重心防止被推倒。\n3. 攻击(Attack)：利用闲置手肘击嫌疑人面部，或膝撞其腹股沟，直至其松手。",
          phase2_stress: "360度抢夺：闭眼站立，听到口令后睁眼，应对来自不同方向的抢枪尝试。必须在5秒内完成解脱并拉开距离拔枪警戒。",
          critical_checkpoints: "1. 绝不松开按压枪套的手。\n2. 身体必须随对方拉力转动，不要硬抗。\n3. 解脱后立即建立'反应间隙' (Reactionary Gap)。"
        }
      },
      { 
        name: '脇固 (Waki Gatame)', 
        details: '利用腋下夹紧手臂折断肘关节', 
        drill: {
          drillName: "站立脇固控制",
          setup: "无器械。",
          phase1_technical: "1. 抓腕：双手控制对方手腕，拉直其手臂。\n2. 夹臂：将对方手臂夹在腋下，大臂压住肘关节。\n3. 施压：身体前倾下压，折断其肘部（模拟）。",
          phase2_stress: "指指点点反制：当嫌疑人手指指点点时，迅速施展脇固。",
          critical_checkpoints: "1. 夹紧不要松。\n2. 步法配合身体前压。"
        }
      },
      { 
        name: '腕缄 (Kimura)', 
        details: '针对肩关节的强力锁技', 
        drill: {
          drillName: "站立Kimura",
          setup: "无器械。",
          phase1_technical: "1. 抓腕：一手抓腕。\n2. 穿梭：另一手穿过腋下抓自己手腕 (Figure 4)。\n3. 旋转：将对方手臂向其背后旋转，破坏肩关节。",
          phase2_stress: "抱腰反制：在对方抱腰时，利用腕缄控制并摔倒。",
          critical_checkpoints: "1. 肘部贴紧身体。\n2. 利用旋转力。"
        }
      },
      { 
        name: '裸绞 (RNC)', 
        details: '针对颈动脉的血绞晕厥控制', 
        drill: {
          drillName: "战术裸绞",
          setup: "无器械。",
          phase1_technical: "1. V字锁：前臂和上臂形成V字夹住颈部。\n2. 加固：手掌搭在二头肌，另一手推后脑。\n3. 收紧：深吸气，收紧背部肌肉。",
          phase2_stress: "挣扎控制：对方试图掰手指解脱，保持裸绞并施压。",
          critical_checkpoints: "1. 不要交叉双脚（防足跟勾）。\n2. 施压要持续。"
        }
      },
      { 
        name: '膝盖压腹', 
        details: '膝盖压制腹腔神经丛', 
        drill: {
          drillName: "Knee on Belly (KOB)",
          setup: "柔道垫。",
          phase1_technical: "1. 压制：膝盖顶住腹腔神经丛。\n2. 支撑：另一腿伸直保持平衡。\n3. 拔枪：在压制状态下拔枪警戒。",
          phase2_stress: "地面转上铐：从KOB姿态转换到俯卧上铐。",
          critical_checkpoints: "1. 重心全在膝盖。\n2. 保持头部观察。"
        }
      },
      { 
        name: '鹅颈腕锁', 
        details: '手腕折叠控制技术', 
        drill: {
          drillName: "鹅颈押解",
          setup: "无器械。",
          phase1_technical: "1. 抓手：双手控制对方手掌。\n2. 折叠：向内猛烈折叠手腕。\n3. 顶肘：用胸口顶住对方肘部固定。",
          phase2_stress: "押解反抗：押解途中嫌疑人反抗，加力施压迫使其踮脚。",
          critical_checkpoints: "1. 手腕要折到底。\n2. 紧贴对方身体。"
        }
      },
      { 
        name: '警棍打击', 
        details: '击打大腿腓总神经', 
        drill: {
          drillName: "警棍击打区",
          setup: "击打靶。",
          phase1_technical: "1. 劈击：45度斜下劈击。\n2. 目标：大腿外侧腓总神经或手臂三头肌。\n3. 回收：打击后立即回收警戒。",
          phase2_stress: "持刀冲锋阻击：在后退中精准打击持刀手或腿部。",
          critical_checkpoints: "1. 避开头部（非致命武力）。\n2. 力量穿透。"
        }
      },
      { 
        name: '战术上铐', 
        details: '站立/跪姿/卧姿上铐流程', 
        drill: {
          drillName: "三姿上铐",
          setup: "手铐。",
          phase1_technical: "1. 命令：命令嫌疑人背手。\n2. 接近：从侧后方盲区接近。\n3. 上铐：先控手再上铐，缺口朝前。",
          phase2_stress: "抵抗上铐：嫌疑人抗拒背手，配合关节技强制上铐。",
          critical_checkpoints: "1. 始终控制一只手。\n2. 检查松紧度。"
        }
      },
      { 
        name: '穴位压迫', 
        details: '耳下/锁骨穴位剧痛控制', 
        drill: {
          drillName: "痛点控制 (Pressure Points)",
          setup: "无器械。",
          phase1_technical: "1. 定位：下颚角后方或锁骨窝。\n2. 施压：利用指关节（凤眼拳）钻压。\n3. 命令：配合大声命令。",
          phase2_stress: "消极抵抗处理：嫌疑人瘫软在地，利用痛点使其站起。",
          critical_checkpoints: "1. 力量要集中。\n2. 作为过渡手段。"
        }
      },
      { 
        name: '扫腿摔', 
        details: '破坏重心扫倒嫌疑人', 
        drill: {
          drillName: "战术扫腿",
          setup: "柔道垫。",
          phase1_technical: "1. 推搡：推上半身破坏平衡。\n2. 扫击：脚掌扫击脚踝。\n3. 跟进：倒地后立即膝压。",
          phase2_stress: "行进间扫摔：在移动中扫倒嫌疑人。",
          critical_checkpoints: "1. 手脚同步。\n2. 扫击要有力。"
        }
      },
      { 
        name: '双人夹击', 
        details: '团队配合摔法', 
        drill: {
          drillName: "Contact & Cover",
          setup: "三人一组。",
          phase1_technical: "1. 掩护：一人持枪掩护 (Cover)。\n2. 接触：一人上前控制 (Contact)。\n3. 配合：两人协同摔倒嫌疑人。",
          phase2_stress: "暴起反抗：嫌疑人突然反抗，两人配合制服。",
          critical_checkpoints: "1. 避免交叉火力。\n2. 沟通顺畅。"
        }
      },
      { 
        name: '搜身战位', 
        details: '控制盲区防止反击', 
        drill: {
          drillName: "战术搜身",
          setup: "无。",
          phase1_technical: "1. 姿态：嫌疑人分腿，重心前倾。\n2. 控制：脚顶住嫌疑人脚内侧。\n3. 切割：手掌像刀一样切割搜索腰部。",
          phase2_stress: "搜出武器：模拟搜出武器后的紧急处置。",
          critical_checkpoints: "1. 破坏平衡是关键。\n2. 搜身要细致。"
        }
      }
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
      '静默接近 (Stealth): 控制重心滚动步态，在进入攻击距离前绝不发出任何声响。',
      '阻断发声 (Silence): 攻击的第一瞬间必须破坏气管或捂住口鼻，防止目标发出警报。',
      '致命效率 (Lethality): 选择颈动脉、肾脏等致死部位，追求一击必杀，不留后患。',
      '心理脱敏 (Psychological): 克服杀戮本能的迟疑，将敌人视为需要清除的战术目标。'
    ],
    scenarios: [
      { danger: '夜间潜入需从背后无声解决敌方哨兵', response: '战术捂嘴 (Muzzle Hold) + 肾脏穿刺 + 颈动脉切割 (Sentry Removal)' },
      { danger: '接近时哨兵突然转身发现', response: '双手拍击控制武器 + 喉部重击 + 双腿抱摔 (Double Leg)' },
      { danger: '近距离遭遇敌方匕首突袭', response: '菲律宾 Kali 夺刀 + 反刺腋下动脉 + 连续刺击' },
      { danger: '狭窄战壕内的遭遇战 (Trench Fight)', response: '头盔撞击面部 + 戳眼 + 战术刀具连续刺击' },
      { danger: '被敌人从后捂嘴试图割喉', response: '双手控制持刀手腕 + 柔道背负投 (Seoi Nage) + 反杀' },
      { danger: '在地面扭打中被敌人骑乘压制', response: '腰部顶起破坏平衡 + 战术折刀隐蔽出刀 + 划割股动脉' },
      { danger: '利用头盔带进行绞杀', response: '从后抓住头盔下沿 + 猛力后拉勒颈 + 膝撞脊柱' },
      { danger: '主武器卡壳，敌人持枪冲锋', response: '枪口戳击 (Muzzle Thump) + 快速切换手枪/匕首' },
      { danger: '处理倒地但未死亡的敌人', response: '控制双手 + 确认解除武装 + 致命补刀 (模拟)' },
      { danger: '双人小组清除房间内多名敌人', response: '闪光弹投掷 + 同步突入 + 快速双击 (Double Tap)' }
    ],
    techniques: [
      { 
        name: '摸哨技术', 
        details: '锁喉+肾击+颈动脉割', 
        drill: {
          drillName: "Sentry Removal",
          setup: "橡胶刀，假人。",
          phase1_technical: "1. 接近：静步接近背后。\n2. 控制：一手捂嘴勒颈，一手持刀。\n3. 终结：刺入肾脏，随即切割颈部（模拟）。",
          phase2_stress: "动态摸哨：目标在移动中，必须同步移动并完成清除。",
          critical_checkpoints: "1. 绝对静默。\n2. 破坏声带防止叫喊。"
        }
      },
      { 
        name: '徒手绞杀', 
        details: '强力裸绞/断颈模拟', 
        drill: {
          drillName: "致命绞杀",
          setup: "无。",
          phase1_technical: "1. 锁入：瞬间锁死裸绞。\n2. 破坏：利用体重后仰折断颈椎（模拟）。\n3. 拖拽：绞杀后立即拖入阴影。",
          phase2_stress: "挣扎对抗：对方拼命挣扎，保持绞杀直至昏迷。",
          critical_checkpoints: "1. 动作要快。\n2. 确认对方失去意识。"
        }
      },
      { 
        name: '静步移动', 
        details: '战术步伐与重心控制', 
        drill: {
          drillName: "Stalking Walk",
          setup: "有枯枝的地面。",
          phase1_technical: "1. 滚动：脚外侧先着地，慢慢滚动到全脚掌。\n2. 重心：后腿保持重心，前脚探路。\n3. 姿态：低姿态。",
          phase2_stress: "无声测试：在满是枯叶的地面行走不发出声音。",
          critical_checkpoints: "1. 耐心。\n2. 随时准备冻结。"
        }
      },
      { 
        name: '捂嘴技巧', 
        details: '防止发声的战术动作', 
        drill: {
          drillName: "Muzzle Hold",
          setup: "无。",
          phase1_technical: "1. 手型：手掌捂嘴，手指扣住鼻孔。\n2. 牵引：向后猛拉头部。\n3. 配合：配合膝盖顶腰破坏平衡。",
          phase2_stress: "防止咬手：在捂嘴时防止对方咬手指。",
          critical_checkpoints: "1. 必须封住口鼻。\n2. 力量要大。"
        }
      },
      { 
        name: '肾脏攻击', 
        details: '解剖学攻击角度', 
        drill: {
          drillName: "Kidney Stab",
          setup: "橡胶刀。",
          phase1_technical: "1. 定位：后腰肋骨下方。\n2. 刺入：45度向上刺入。\n3. 搅动：扩大伤口。",
          phase2_stress: "解剖学定位：在黑暗中快速摸到肾脏位置。",
          critical_checkpoints: "1. 避开肋骨。\n2. 制造剧痛休克。"
        }
      },
      { 
        name: '颈动脉切割', 
        details: '致死性刀具应用', 
        drill: {
          drillName: "Carotid Cut",
          setup: "橡胶刀。",
          phase1_technical: "1. 暴露：拉开头部暴露颈部。\n2. 切割：从耳后拉到喉结。\n3. 深度：深切至椎骨。",
          phase2_stress: "动态切割：在对方挣扎乱动时准确切割。",
          critical_checkpoints: "1. 刀刃向内。\n2. 避开自己手臂。"
        }
      },
      { 
        name: '战壕格斗', 
        details: '受限空间匕首术', 
        drill: {
          drillName: "Trench Fighting",
          setup: "狭窄通道。",
          phase1_technical: "1. 姿态：缩短武器力臂。\n2. 刺击：短促连续刺击。\n3. 推进：利用身体冲撞推进。",
          phase2_stress: "转角遭遇：在战壕转角突然遭遇敌人。",
          critical_checkpoints: "1. 速度第一。\n2. 狠辣。"
        }
      },
      { 
        name: '头盔控制', 
        details: '利用头盔带勒颈', 
        drill: {
          drillName: "Helmet Manipulation",
          setup: "战术头盔。",
          phase1_technical: "1. 抓握：从后方抓住头盔下沿。\n2. 提拉：向后上方猛拉，利用帽带勒颈。\n3. 控制：控制视野朝天。",
          phase2_stress: "盔带勒杀：利用对方的头盔作为绞杀工具。",
          critical_checkpoints: "1. 借力打力。\n2. 破坏视线。"
        }
      },
      { 
        name: '要害打击', 
        details: '太阳穴/延髓打击', 
        drill: {
          drillName: "Vital Point Strike",
          setup: "假人。",
          phase1_technical: "1. 目标：延髓（后脑勺下方）。\n2. 武器：枪托或掌根。\n3. 效果：切断中枢神经。",
          phase2_stress: "一击必杀测试：在跑动中准确打击要害。",
          critical_checkpoints: "1. 精度至上。\n2. 力量穿透。"
        }
      },
      { 
        name: '主副武器切换', 
        details: '步枪转手枪/刀具', 
        drill: {
          drillName: "Transition Drill",
          setup: "长枪，手枪/刀。",
          phase1_technical: "1. 抛枪：长枪挂载，导向侧面。\n2. 拔取：拔出副武器。\n3. 攻击：无缝衔接攻击。",
          phase2_stress: "卡壳切换：主武器卡壳，立即切换副武器清除近身威胁。",
          critical_checkpoints: "1. 不要看枪套。\n2. 保持视线在敌人身上。"
        }
      },
      { 
        name: '尸体搬运', 
        details: '快速拖拽与隐藏', 
        drill: {
          drillName: "Body Drag",
          setup: "假人（负重）。",
          phase1_technical: "1. 抓握：抓背心提手或腋下。\n2. 发力：倒退走，利用腿部力量。\n3. 隐藏：拖入掩体。",
          phase2_stress: "负重拖拽：全装具状态下拖拽成人体重。",
          critical_checkpoints: "1. 保持警戒。\n2. 保护腰部。"
        }
      },
      { 
        name: '反伏击反应', 
        details: '被偷袭时的肌肉记忆', 
        drill: {
          drillName: "Counter Ambush",
          setup: "无。",
          phase1_technical: "1. 转向：向攻击方向猛转。\n2. 爆发：全速冲向敌人（近距）或寻找掩体（远距）。\n3. 反击：以暴制暴。",
          phase2_stress: "背后突袭：被从背后推搡或勒颈时的瞬间反击。",
          critical_checkpoints: "1. 进攻是最好的防守。\n2. 打破冻结反应。"
        }
      }
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
      '肉盾原则 (Body Cover): 在袭击发生的0.5秒内，必须用身体完全覆盖VIP，充当防弹盾牌。',
      '撤离优先 (Evacuate First): 任务目标是VIP活着离开，而非击毙袭击者，能跑绝不恋战。',
      '射击界限 (Fields of Fire): 在混乱的人群中开火必须极其谨慎，严防误伤VIP和平民。',
      '牺牲精神 (Sacrifice): 宁可自己承受子弹与刀锋，也绝不能让VIP受到任何伤害。'
    ],
    scenarios: [
      { danger: '人群中突然有人持刀冲向VIP', response: '肉盾冲撞 (Body Block) + 强力推开VIP + 制服袭击者' },
      { danger: '广场枪声响起 (遭遇狙击手)', response: '按倒VIP (Down) + 身体完全覆盖 (Cover) + 拖拽至掩体' },
      { danger: 'VIP被狂热粉丝拉住衣服不放', response: '手刀切断手臂控制 (Chop) + 强力推离 + 快速带离' },
      { danger: '护送车辆遭遇伏击堵截', response: '车辆反伏击驾驶 (J-Turn) + 下车火力压制 + 转移' },
      { danger: '撤离路线被人群/障碍物堵死', response: 'CQB 战术突击开路 (Aggressive Clearing) + 暴力撞击' },
      { danger: 'VIP受到自杀式炸弹袭击威胁', response: '识别引爆征兆 + 将VIP推向反方向 + 扑向炸弹 (Sacrifice)' },
      { danger: '在室内宴会厅遭遇混乱', response: '菱形阵型 (Diamond Formation) 收缩 + 360度警戒撤离' },
      { danger: '上下车过程中遭遇袭击', response: '车门作为掩体 + 按压VIP头部入车 + 快速关门驶离' },
      { danger: 'VIP因惊恐僵硬无法移动', response: '抓提腰带强行拖拽 (Belt Drag) + 语言吼叫刺激' },
      { danger: '护卫队员中弹倒地', response: '补位填补防御缺口 + 保持阵型完整 + 呼叫支援 (-1 通讯)' }
    ],
    techniques: [
      { 
        name: '菱形阵型', 
        details: '360度护卫站位', 
        drill: {
          drillName: "Diamond Formation",
          setup: "4-5人小组。",
          phase1_technical: "1. 站位：前后左右各一人，VIP在中间。\n2. 观察：每个人负责90度扇区。\n3. 移动：步伐同步，像一个人一样移动。",
          phase2_stress: "穿过人群：保持阵型穿过拥挤人群，不露空隙。",
          critical_checkpoints: "1. 不要看VIP，看威胁。\n2. 保持间距。"
        }
      },
      { 
        name: '身体覆盖', 
        details: '完全覆盖VIP身体', 
        drill: {
          drillName: "Body Cover",
          setup: "无。",
          phase1_technical: "1. 按倒：一手按颈，一手按腰，将VIP按倒。\n2. 覆盖：身体呈大字形完全覆盖VIP。\n3. 观察：头部抬起观察威胁。",
          phase2_stress: "枪声反应：听到枪声0.5秒内完成覆盖。",
          critical_checkpoints: "1. 尽可能张大身体。\n2. 不要压得VIP无法呼吸。"
        }
      },
      { 
        name: '推离撤退', 
        details: '强力推人撤离法', 
        drill: {
          drillName: "Evacuation Push",
          setup: "无。",
          phase1_technical: "1. 抓握：抓腰带或抱腰。\n2. 姿态：低头弯腰。\n3. 奔跑：推着VIP全速奔跑。",
          phase2_stress: "负重撤离：VIP受伤或惊慌腿软，强行拖拽撤离。",
          critical_checkpoints: "1. 这一刻VIP是行李。\n2. 速度至上。"
        }
      },
      { 
        name: '行进间射击', 
        details: '保护VIP同时还击', 
        drill: {
          drillName: "One-Handed Protection Shooting",
          setup: "蓝枪。",
          phase1_technical: "1. 护卫：一手按住VIP头部/身体。\n2. 射击：单手持枪射击。\n3. 移动：边打边退。",
          phase2_stress: "反向撤离射击：向后撤离时向前方目标射击。",
          critical_checkpoints: "1. 枪口不要指到VIP。\n2. 身体挡在VIP和枪口之间。"
        }
      },
      { 
        name: '第三人防御', 
        details: '处理针对他人的攻击', 
        drill: {
          drillName: "Third Party Protection",
          setup: "三人一组。",
          phase1_technical: "1. 拦截：横向移动拦截攻击者。\n2. 阻挡：身体阻挡攻击路线。\n3. 反击：制服攻击者，队友带走VIP。",
          phase2_stress: "自杀式袭击拦截：发现炸弹背心，必须扑向袭击者远离VIP。",
          critical_checkpoints: "1. 牺牲精神。\n2. 也就是所谓的“挡子弹”。"
        }
      },
      { 
        name: '人群分流', 
        details: '快速穿过密集人群', 
        drill: {
          drillName: "Crowd Splitting",
          setup: "多人模拟人群。",
          phase1_technical: "1. 楔形：前卫组成楔形开路。\n2. 手势：温和但坚定的手势分流。\n3. 力量：必要时使用肢体力量推开。",
          phase2_stress: "恶意人群：人群中有推搡和阻挡，保持阵型通过。",
          critical_checkpoints: "1. 保持礼貌但强硬。\n2. 防止被冲散。"
        }
      },
      { 
        name: '自杀炸弹应对', 
        details: '识别与推离爆炸物', 
        drill: {
          drillName: "Suicide Bomber Response",
          setup: "道具。",
          phase1_technical: "1. 识别：大衣、异常出汗、紧握引爆器。\n2. 射击：头部中枢神经射击（模拟）。\n3. 掩护：无法射击时，推开VIP并扑向炸弹。",
          phase2_stress: "瞬间决断：发现炸弹，立即做出牺牲决策。",
          critical_checkpoints: "1. 只有一次机会。\n2. 保护VIP远离冲击波。"
        }
      },
      { 
        name: '上下车程序', 
        details: '车辆护卫流程', 
        drill: {
          drillName: "Arrival/Departure Drill",
          setup: "车辆。",
          phase1_technical: "1. 扫视：下车前扫视周围。\n2. 站位：车门处形成保护圈。\n3. 掩护：利用车门作为掩体。",
          phase2_stress: "下车伏击：VIP刚下车遭遇伏击，立即推回车内并撤离。",
          critical_checkpoints: "1. 动作迅速。\n2. 360度警戒。"
        }
      },
      { 
        name: '换手射击', 
        details: '根据VIP位置切换持枪手', 
        drill: {
          drillName: "Switch Hands",
          setup: "蓝枪。",
          phase1_technical: "1. 判断：VIP在右侧，左手持枪；VIP在左侧，右手持枪。\n2. 切换：快速换手。\n3. 目的：避免枪口掠过VIP。",
          phase2_stress: "动态切换：在S型撤离路线中不断切换持枪手。",
          critical_checkpoints: "1. 流畅性。\n2. 枪口意识。"
        }
      },
      { 
        name: '战术检伤', 
        details: '快速评估VIP伤情', 
        drill: {
          drillName: "Tactical Triage",
          setup: "假人。",
          phase1_technical: "1. 摸索：从头到脚快速摸索出血点。\n2. 观察：看手上是否有血。\n3. 止血：发现出血立即止血。",
          phase2_stress: "黑暗检伤：在掩体后无光环境下检查VIP伤情。",
          critical_checkpoints: "1. 速度快。\n2. 不要遗漏背部。"
        }
      },
      { 
        name: '要员控制', 
        details: '强制控制惊慌的VIP', 
        drill: {
          drillName: "VIP Handling",
          setup: "不配合的VIP。",
          phase1_technical: "1. 抓握：抓皮带提裤子。\n2. 压头：压低头部防止中弹。\n3. 拖拽：强行拖拽僵硬的VIP。",
          phase2_stress: "VIP恐慌冻结：VIP吓傻了不肯走，必须暴力带离。",
          critical_checkpoints: "1. 此时不能客气。\n2. 救命要紧。"
        }
      },
      { 
        name: '肩撞开路', 
        details: '暴力开路技术', 
        drill: {
          drillName: "Shoulder Check",
          setup: "撞击靶。",
          phase1_technical: "1. 姿态：沉肩。\n2. 发力：利用腿部蹬地和肩膀冲撞。\n3. 连续：连续撞开多重阻碍。",
          phase2_stress: "封锁突破：撤离路线被堵，暴力撞开通道。",
          critical_checkpoints: "1. 保护好肩膀。\n2. 动量不能停。"
        }
      }
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
      '速度与暴烈 (Speed & Violence): 突入房间时必须以压倒性的速度和火力，瞬间瓦解敌人意志。',
      '切角搜索 (Pieing): 利用切蛋糕战术(Pieing the corner)逐步暴露视野，先敌发现先敌开火。',
      '枪即肢体 (Weapon as Limb): 当弹尽或故障时，枪身就是最坚硬的钝器，直接砸击要害。',
      '战斗意志 (Never Quit): 即使负伤、即使倒地，只要还有一口气，就绝不停止战斗。'
    ],
    scenarios: [
      { danger: '突入房间时被伏击，枪管被敌人抓住上推', response: '枪口杠杆下压 (Leverage) + 身体前冲撞击 + 恢复射击' },
      { danger: '拐角处遭遇敌人试图夺枪', response: '猛烈旋转枪身 (Whip) + 枪托砸脸 (Buttstroke) + 后撤' },
      { danger: '主武器卡壳，敌人持刀冲锋', response: '枪口戳击 (Muzzle Thump) 阻滞 + 快速拔副武器 (Transition)' },
      { danger: '地面缠斗中长枪无法使用', response: '柔术蜘蛛防守 (Spider Guard) 控制距离 + 蹬腿 + 拔刀/枪' },
      { danger: '在门口 (Fatal Funnel) 被火力压制', response: '切角搜索 (Pieing) + 快速闪身射击 + 投掷震撼弹' },
      { danger: '清理房间时遭遇藏匿在家具后的敌人', response: '近距离枪械格斗 (Gun Fu) + 弹匣角击打 + 接触射击' },
      { danger: '单手受伤无法正常换弹', response: '利用膝盖/枪套固定枪支 + 单手换弹 (One-hand Reload)' },
      { danger: '在狭窄走廊与多名敌人肉搏', response: '利用走廊宽度蹬墙借力 + 枪身推击 + 连续膝撞' },
      { danger: '敌人试图从墙角盲目射击', response: '控制其伸出的枪管 + 射击其手臂/手掌 + 绕过射击' },
      { danger: '全装具状态下倒地无法快速起立', response: '利用背部着地防御 + 枪口始终指向威胁 + 战术起立' }
    ],
    techniques: [
      { 
        name: '枪口戳击', 
        details: '硬物击打面部/喉咙', 
        drill: {
          drillName: "Muzzle Thump",
          setup: "长枪模型，靶。",
          phase1_technical: "1. 突刺：双手持枪，用枪口猛刺。\n2. 目标：面部、喉咙、胸口。\n3. 创造距离：击退敌人后射击。",
          phase2_stress: "卡壳反应：射击中卡壳，敌人逼近，立即戳击。",
          critical_checkpoints: "1. 力量要大。\n2. 保持持枪姿态。"
        }
      },
      { 
        name: '枪托砸击', 
        details: '重击头骨致晕', 
        drill: {
          drillName: "Buttstroke",
          setup: "长枪模型，靶。",
          phase1_technical: "1. 挥击：利用枪托横向或斜向挥击。\n2. 目标：头部侧面。\n3. 恢复：砸击后迅速恢复射击姿态。",
          phase2_stress: "侧面威胁：处理侧面突然出现的近身威胁。",
          critical_checkpoints: "1. 不要失去对枪的控制。\n2. 连贯性。"
        }
      },
      { 
        name: '弹匣角击打', 
        details: '利用尖锐部位攻击', 
        drill: {
          drillName: "Magazine Strike",
          setup: "长枪模型。",
          phase1_technical: "1. 角度：将枪身横置。\n2. 击打：用弹匣底部尖角砸击。\n3. 目标：头顶、锁骨。",
          phase2_stress: "贴身缠斗：在无法伸展手臂时使用。",
          critical_checkpoints: "1. 短促有力。\n2. 痛感极强。"
        }
      },
      { 
        name: '长枪防抢', 
        details: '利用力矩防止夺枪', 
        drill: {
          drillName: "Long Gun Retention",
          setup: "长枪模型。",
          phase1_technical: "1. 下沉：降低重心。\n2. 旋转：以对方抓握点为支点，猛烈画圆旋转枪身。\n3. 射击：枪口对准敌人瞬间射击。",
          phase2_stress: "死命抢夺：对方双手抓住枪管死命拖拽，利用身体旋转解脱。",
          critical_checkpoints: "1. 利用杠杆。\n2. 身体协力。"
        }
      },
      { 
        name: '主副切换', 
        details: '快速拔出手枪', 
        drill: {
          drillName: "Transition Drill",
          setup: "全套装备。",
          phase1_technical: "1. 甩枪：将长枪甩向弱侧。\n2. 拔枪：强手拔出手枪。\n3. 接战：建立瞄准线。",
          phase2_stress: "行进间切换：在向目标推进过程中完成切换。",
          critical_checkpoints: "1. 眼睛不离目标。\n2. 速度。"
        }
      },
      { 
        name: '切角搜索', 
        details: '战术过角技术', 
        drill: {
          drillName: "Pieing the Corner",
          setup: "墙角。",
          phase1_technical: "1. 切割：像切蛋糕一样一点点暴露视野。\n2. 距离：离墙角越远越好。\n3. 武器：枪口随视线移动。",
          phase2_stress: "动态切角：快速切角并识别威胁/非威胁目标。",
          critical_checkpoints: "1. 暴露面积最小化。\n2. 不要探出枪管。"
        }
      },
      { 
        name: '走廊格斗', 
        details: '狭长空间限制格斗', 
        drill: {
          drillName: "Hallway CQB",
          setup: "狭窄通道。",
          phase1_technical: "1. 纵深：利用纵深优势。\n2. 腿法：正蹬控制距离。\n3. 墙壁：利用墙壁支撑防摔。",
          phase2_stress: "狭路相逢：在走廊遭遇多名敌人。",
          critical_checkpoints: "1. 不要被包围。\n2. 边打边退。"
        }
      },
      { 
        name: '全装具格斗', 
        details: '负重状态下的地面技', 
        drill: {
          drillName: "Full Kit Grappling",
          setup: "战术背心，头盔。",
          phase1_technical: "1. 适应：适应装备的限制。\n2. 翻滚：避免装备卡住。\n3. 武器：保护装备上的武器不被抢。",
          phase2_stress: "负重起立：全装具倒地后快速起立。",
          critical_checkpoints: "1. 体能消耗极大。\n2. 避免装备挂钩。"
        }
      },
      { 
        name: '背心拔刀', 
        details: '从战术背心快速出刀', 
        drill: {
          drillName: "Kit Knife Draw",
          setup: "训练刀，背心。",
          phase1_technical: "1. 位置：熟悉刀在背心上的位置（通常颈部或腰部）。\n2. 拔刀：弱手推开敌人，强手拔刀。\n3. 划割：拔刀即攻击（Get off me cut）。",
          phase2_stress: "缠抱拔刀：被敌人抱住时拔刀反击。",
          critical_checkpoints: "1. 盲操熟练度。\n2. 防止割断装备带。"
        }
      },
      { 
        name: '单手换弹', 
        details: '受伤后的战术动作', 
        drill: {
          drillName: "One-Handed Reload",
          setup: "蓝枪。",
          phase1_technical: "1. 固定：将枪夹在膝盖或利用枪套固定。\n2. 换弹：单手取出弹匣插入。\n3. 上膛：利用鞋底、腰带挂蹭照门上膛。",
          phase2_stress: "受伤模拟：一只手完全不能用，完成换弹射击。",
          critical_checkpoints: "1. 寻找固定点。\n2. 保持冷静。"
        }
      },
      { 
        name: '盲射防御', 
        details: '应对墙角盲目射击', 
        drill: {
          drillName: "Blind Fire Counter",
          setup: "墙角。",
          phase1_technical: "1. 识别：识别对方盲目伸出的枪管。\n2. 控制：抓住枪管向下拉或推。\n3. 射击：向墙壁穿透射击或绕过射击。",
          phase2_stress: "转角遭遇盲射：快速处理转角威胁。",
          critical_checkpoints: "1. 避开枪口。\n2. 控制枪管。"
        }
      },
      { 
        name: '突入技术', 
        details: '双人/四人小组突入', 
        drill: {
          drillName: "Room Entry",
          setup: "房间模型。",
          phase1_technical: "1. 堆叠：门口堆叠准备。\n2. 突入：Hook或Cross方式突入。\n3. 清角：主要负责死角。",
          phase2_stress: "多目标突入：房间内有多个威胁和人质。",
          critical_checkpoints: "1. 唯快不破。\n2. 相信队友。"
        }
      }
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
      '动态生存 (Mobility): 面对利刃，静止即死亡。必须保持不断的步伐移动，让对方难以锁定。',
      '切割优先 (Slash > Stab): 在高压缠斗中，大幅度的切割比精准的穿刺更容易造成有效伤害。',
      '控制刀手 (Control the Hand): 无论攻防，控制住对方持刀的手腕是活下来的唯一希望。',
      '战术牺牲 (Sacrifice): 做好手臂被划伤的心理准备，以此换取刺入对方颈部动脉的机会。'
    ],
    scenarios: [
      { danger: '敌方正手持刀大开大合劈砍', response: '菲律宾 Kali 格挡切入 (Gunting) + 割断二头肌/腋下' },
      { danger: '敌方反手持刀 (Ice Pick) 连续捅刺', response: '双手X型格挡 + 夺刀 + 反刺颈部/锁骨窝' },
      { danger: '敌方持枪近身，我方仅有匕首', response: '拍开枪口重定向 + 匕首刺入腋下/腹股沟防弹衣缝隙' },
      { danger: '地面缠斗中我方被压制', response: '利用腿部控制 + 快速隐蔽拔刀 + 划割股动脉/跟腱' },
      { danger: '暗哨摸排时需无声解决', response: '捂嘴 + 肾击 (Kidney Stab) + 颈动脉切割' },
      { danger: '双方持刀对峙 (Knife on Knife)', response: '攻击对方持刀手腕 (Defanging the Snake) + 假动作诱杀' },
      { danger: '在极近距离缠抱 (Clinch) 状态', response: '缝纫机式高频短刺 (Sewing Machine) 攻击侧腹' },
      { danger: '敌方试图抓住我方持刀手', response: '手腕旋转划割对方手指 + 转换持刀手 (Hand Switch)' },
      { danger: '利用衣物/外套辅助格斗', response: '弱手缠绕外套做盾牌 + 强手持刀突刺' },
      { danger: '在光线不足环境遭遇袭击', response: '利用听觉/触觉感知 + 快速连续切割防御圈' }
    ],
    techniques: [
      { 
        name: '五角度攻击', 
        details: '标准的5种攻击轨迹', 
        drill: {
          drillName: "5 Angles of Attack",
          setup: "橡胶刀。",
          phase1_technical: "1. 角度1-2：X型劈砍颈部。\n2. 角度3-4：水平腹部切割。\n3. 角度5：直线突刺。",
          phase2_stress: "全速攻防：双方按照五角度进行全速格挡与反击。",
          critical_checkpoints: "1. 动作流畅。\n2. 步法配合。"
        }
      },
      { 
        name: '肢体破坏 (Defanging)', 
        details: '优先攻击对方持刀手腕', 
        drill: {
          drillName: "Defanging the Snake",
          setup: "橡胶刀，手部护具。",
          phase1_technical: "1. 时机：在对方出手瞬间。\n2. 目标：手腕内侧动脉/肌腱。\n3. 动作：快速点击收回。",
          phase2_stress: "蛇咬训练：试图在不被碰到的情况下攻击对方手部。",
          critical_checkpoints: "1. 不要贪刀。\n2. 保持距离。"
        }
      },
      { 
        name: '流血区解剖', 
        details: '颈动脉/股动脉/锁骨下动脉', 
        drill: {
          drillName: "Anatomy Targeting",
          setup: "人体图解，假人。",
          phase1_technical: "1. 识别：大动脉位置。\n2. 角度：最佳切割角度。\n3. 深度：足以致命的深度。",
          phase2_stress: "盲刺测试：蒙眼触摸假人并准确刺中动脉点。",
          critical_checkpoints: "1. 知识就是力量。\n2. 精准。"
        }
      },
      { 
        name: '反手持刀术', 
        details: '利于隐蔽与勾割的握法', 
        drill: {
          drillName: "Ice Pick Grip",
          setup: "橡胶刀。",
          phase1_technical: "1. 握法：刀尖朝下。\n2. 优势：力量大，隐蔽，便于勾割 (Hooking)。\n3. 动作：下扎，横割，勾拉。",
          phase2_stress: "近身勾割：在缠抱距离利用反手刀勾割对方背部/颈部。",
          critical_checkpoints: "1. 拇指顶住刀柄底。\n2. 利用身体下沉力量。"
        }
      },
      { 
        name: '格挡反击 (Hubud)', 
        details: '菲律宾格斗术中的流动练习', 
        drill: {
          drillName: "Hubud Flow",
          setup: "配对。",
          phase1_technical: "1. 流程：格挡-拍压-反击。\n2. 循环：形成无限循环的肌肉记忆。\n3. 变速：忽快忽慢。",
          phase2_stress: "中断流动：突然打破循环进行真攻击。",
          critical_checkpoints: "1. 手不离手。\n2. 感受对方力量。"
        }
      },
      { 
        name: '夺刀反杀', 
        details: '夺取敌人武器并立即使用', 
        drill: {
          drillName: "Return to Sender",
          setup: "橡胶刀。",
          phase1_technical: "1. 夺刀：完成夺刀动作。\n2. 转向：立即将刀尖指向敌人。\n3. 终结：使用夺来的刀终结。",
          phase2_stress: "压力夺刀：在被击打中完成夺刀反杀。",
          critical_checkpoints: "1. 无缝衔接。\n2. 杀意决绝。"
        }
      },
      { 
        name: '近身缠斗刀术', 
        details: 'Clinch 状态下的短刀应用', 
        drill: {
          drillName: "Clinch Knife",
          setup: "白T恤，记号笔（模拟刀）。",
          phase1_technical: "1. 制造空间：用头撞或推。\n2. 缝纫机：像缝纫机一样高频短刺。\n3. 部位：侧腹、大腿内侧。",
          phase2_stress: "墨水测试：看谁在白T恤上留下的痕迹多且致命。",
          critical_checkpoints: "1. 不要停止攻击。\n2. 另一只手控制对方。"
        }
      },
      { 
        name: '假动作诱杀', 
        details: '佯攻上路实取下路', 
        drill: {
          drillName: "High-Low Feint",
          setup: "橡胶刀。",
          phase1_technical: "1. 佯攻：假装刺脸，引诱格挡。\n2. 变线：瞬间下潜。\n3. 实攻：刺腹部或大腿。",
          phase2_stress: "反应博弈：看谁能骗过谁。",
          critical_checkpoints: "1. 假动作要逼真。\n2. 变线要快。"
        }
      },
      { 
        name: '战术换手', 
        details: '在战斗中切换持刀手', 
        drill: {
          drillName: "Knife Hand Switch",
          setup: "橡胶刀。",
          phase1_technical: "1. 抛接：空中微抛换手。\n2. 传递：背后或身前传递。\n3. 目的：改变攻击角度。",
          phase2_stress: "受困换手：持刀手被抓住时，换手继续攻击。",
          critical_checkpoints: "1. 防止掉刀。\n2. 换手即攻。"
        }
      },
      { 
        name: '地面刀术', 
        details: '在地面被压制时的出刀', 
        drill: {
          drillName: "Ground Knife Defense",
          setup: "橡胶刀。",
          phase1_technical: "1. 拔刀：在地面拔刀。\n2. 防御：用腿蹬开对方。\n3. 切割：攻击对方脚踝/腿部。",
          phase2_stress: "地面求生：被骑乘位压制，利用刀具反杀。",
          critical_checkpoints: "1. 保护好刀不被夺。\n2. 攻击最近的目标。"
        }
      },
      { 
        name: '隐蔽出刀', 
        details: '从常态快速进入战斗', 
        drill: {
          drillName: "Covert Draw",
          setup: "折刀。",
          phase1_technical: "1. 伪装：双手下垂或插兜。\n2. 展开：单手开刀。\n3. 突袭：出刀即刺。",
          phase2_stress: "对话突袭：在对话中突然出刀。",
          critical_checkpoints: "1. 隐蔽性。\n2. 速度。"
        }
      },
      { 
        name: '心理威慑', 
        details: '利用刀具光泽制造恐惧', 
        drill: {
          drillName: "Psychological Edge",
          setup: "金属训练刀。",
          phase1_technical: "1. 展示：让对方看清刀刃。\n2. 动作：娴熟的玩刀花。\n3. 眼神：锁定对方。",
          phase2_stress: "逼退测试：仅用刀具威慑逼退无武器对手。",
          critical_checkpoints: "1. 气场压制。\n2. 随时准备实战。"
        }
      }
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
      '环境武器 (Environmental Weapons): 训练那双发现武器的眼睛，笔、手机、椅子皆可杀敌。',
      '属性打击 (Hard vs Soft): 硬物(手机)砸击骨骼关节，软物(外套)遮挡视线干扰。',
      '出其不意 (Surprise): 在对方以为你赤手空拳时突然使用物品攻击，利用惊愕时间差。',
      '投掷突进 (Distract & Enter): 投掷物品迫使对方眨眼或躲避，利用这0.5秒瞬间近身终结。'
    ],
    scenarios: [
      { danger: '被对方双手抓住衣领', response: '战术笔/钥匙 猛刺手背 + 戳击面部/太阳穴' },
      { danger: '对方持刀逼近，手边只有外套', response: '迅速脱下外套缠绕弱手 (Jacket Shield) + 踢裆 + 强手突袭' },
      { danger: '坐在餐厅被攻击', response: '推起椅子阻挡 (Barrier) + 投掷餐具/热饮 (Distraction) + 寻找出口' },
      { danger: '夜路遇袭，手持强光手电', response: '手电筒频闪致盲 (Strobe) + 攻击头边缘砸击面部 (Hammer Strike)' },
      { danger: '手里拿着手机被抓头发', response: '紧握手机用边角 (Phone Hammer) 猛砸太阳穴/鼻梁' },
      { danger: '被逼入死角，手边有灭火器', response: '喷射干粉致盲 + 钢瓶底部撞击 + 制造混乱逃生' },
      { danger: '对方冲过来，手中只有一瓶水', response: '向对方面部投掷水瓶/泼水 (Distraction) + 抱腿摔' },
      { danger: '利用皮带应对持刀者', response: '抽出皮带挥舞扣头 (Belt Whip) 控制距离 + 威慑' },
      { danger: '在书店/办公室遭遇袭击', response: '厚书本/杂志卷起护臂 + 笔戳击 (Stab)' },
      { danger: '被按在地上，手边有沙土/石块', response: '抓沙扬撒眼睛 (Sand Throw) + 石块砸击面部' }
    ],
    techniques: [
      { 
        name: '战术笔应用', 
        details: '攻击穴位与软组织', 
        drill: {
          drillName: "Kubotan Strike",
          setup: "战术笔。",
          phase1_technical: "1. 握法：冰锥握法，拇指顶住笔尾。\n2. 目标：锁骨、肋骨、手背、太阳穴。\n3. 动作：连续锤击。",
          phase2_stress: "解脱控制：被抓手腕时，用战术笔钻压骨头解脱。",
          critical_checkpoints: "1. 握紧防止滑落。\n2. 力量集中于一点。"
        }
      },
      { 
        name: '外套缠绕术', 
        details: '防御利刃切割', 
        drill: {
          drillName: "Jacket Shield",
          setup: "外套。",
          phase1_technical: "1. 缠绕：迅速将外套缠绕在弱手小臂。\n2. 阻挡：用缠绕的手臂格挡刀刃。\n3. 掩盖：或将外套罩住对方头部。",
          phase2_stress: "刀具防御：仅用外套防御橡胶刀攻击。",
          critical_checkpoints: "1. 缠绕要厚实。\n2. 不要挡刺（易穿透）。"
        }
      },
      { 
        name: '椅子防御', 
        details: '利用椅背与椅腿控制距离', 
        drill: {
          drillName: "Chair Defense",
          setup: "椅子。",
          phase1_technical: "1. 持椅：抓椅背，椅腿向前。\n2. 戳击：用椅腿戳面部。\n3. 旋压：卡住对方身体并旋压倒地。",
          phase2_stress: "疯狗防御：对方疯狂进攻，利用椅子保持距离。",
          critical_checkpoints: "1. 保持结构稳固。\n2. 视线穿过椅子。"
        }
      },
      { 
        name: '投掷干扰', 
        details: '利用水瓶/硬币制造瞬间盲区', 
        drill: {
          drillName: "Distraction Throw",
          setup: "网球/水瓶。",
          phase1_technical: "1. 投掷：向对方面部投掷。\n2. 突进：在对方眨眼/躲避瞬间突进。\n3. 重击：接重拳或抱摔。",
          phase2_stress: "投掷-突进连贯性：练习投掷与起动的无缝衔接。",
          critical_checkpoints: "1. 投掷准确度。\n2. 时机把握。"
        }
      },
      { 
        name: '手机锤击', 
        details: '硬质边角的打击技术', 
        drill: {
          drillName: "Phone Hammer",
          setup: "手机模型。",
          phase1_technical: "1. 握持：紧握手机，露出一角。\n2. 打击：用硬角砸击额头、鼻梁。\n3. 连续：像铁锤一样连续砸。",
          phase2_stress: "近身反击：被贴身时掏出手机猛砸。",
          critical_checkpoints: "1. 抓紧手机。\n2. 攻击骨骼。"
        }
      },
      { 
        name: '皮带鞭打', 
        details: '抽出皮带作为软兵器', 
        drill: {
          drillName: "Belt Whip",
          setup: "皮带。",
          phase1_technical: "1. 抽出：快速解开抽出皮带，皮带扣折叠。\n2. 抽打：用皮带扣端抽打面部/手部。\n3. 声势：利用破空声威慑。",
          phase2_stress: "长距离控制：利用皮带长度优势控制持刀者。",
          critical_checkpoints: "1. 注意皮带扣回弹伤己。\n2. 保持距离。"
        }
      },
      { 
        name: '书本盾牌', 
        details: '厚书本防御刺击', 
        drill: {
          drillName: "Book Armor",
          setup: "硬皮书/杂志。",
          phase1_technical: "1. 紧贴：将杂志卷起或书本贴在小臂/胸口。\n2. 格挡：用书本格挡刺击。\n3. 攻击：用书脊砸击。",
          phase2_stress: "杂志防御：卷起杂志防御刀具。",
          critical_checkpoints: "1. 书本要厚。\n2. 护住动脉。"
        }
      },
      { 
        name: '钥匙指虎', 
        details: '握持钥匙增加拳头杀伤力', 
        drill: {
          drillName: "Key Knuckles",
          setup: "钥匙。",
          phase1_technical: "1. 握法：将钥匙夹在指缝中（注意不要伤己）。\n2. 划割：横扫划割面部。\n3. 戳击：直拳戳击。",
          phase2_stress: "抓脸解脱：被抓脸时用钥匙反击。",
          critical_checkpoints: "1. 最好握柄在掌心。\n2. 攻击软组织。"
        }
      },
      { 
        name: '强光致盲', 
        details: '战术手电的使用', 
        drill: {
          drillName: "Flash and Bash",
          setup: "战术手电。",
          phase1_technical: "1. 致盲：强光直射眼睛。\n2. 砸击：用手电攻击头攻击圈（Bezel）砸击。\n3. 组合：光照-砸击-光照。",
          phase2_stress: "夜战模拟：全黑环境下的攻防。",
          critical_checkpoints: "1. 频繁变换位置。\n2. 凶猛砸击。"
        }
      },
      { 
        name: '热咖啡泼洒', 
        details: '高温液体的防御作用', 
        drill: {
          drillName: "Hot Liquid Defense",
          setup: "水杯（冷水模拟）。",
          phase1_technical: "1. 泼洒：向面部泼洒。\n2. 投杯：将杯子也扔出去。\n3. 逃离：趁乱逃跑。",
          phase2_stress: "遭遇战反应：手里拿着咖啡时突然遇袭。",
          critical_checkpoints: "1. 泼准。\n2. 动作连贯。"
        }
      },
      { 
        name: '环境陷阱', 
        details: '利用地形绊倒对手', 
        drill: {
          drillName: "Terrain Trap",
          setup: "障碍物。",
          phase1_technical: "1. 引导：引诱对方跨越障碍。\n2. 攻击：在对方跨越重心不稳时推击。\n3. 绊摔：利用地毯/台阶。",
          phase2_stress: "障碍区格斗：在满是杂物的房间内格斗。",
          critical_checkpoints: "1. 熟悉环境。\n2. 借势。"
        }
      },
      { 
        name: '心理伪装', 
        details: '假装拿钱包实则取武器', 
        drill: {
          drillName: "Feigned Compliance",
          setup: "钱包/武器。",
          phase1_technical: "1. 示弱：举手，声称拿钱。\n2. 取械：手伸向口袋取出战术笔/喷雾。\n3. 反击：突然发动攻击。",
          phase2_stress: "抢劫情景模拟：在压力下完成伪装反击。",
          critical_checkpoints: "1. 演技逼真。\n2. 降低对方戒心。"
        }
      }
    ],
    tags: ['简易武器', '战术笔', '环境利用']
  },

  // =========================================================================
  // INSTRUCTOR THEMES (6 Total)
  // =========================================================================
  {
    id: 'inst-public-safety',
    category: 'INSTRUCTOR',
    difficulty: 'ADVANCED',
    title: '公共安全与反恐生存：避险与逃生',
    hooks: ['Public Safety & Anti-Terror Survival: Avoidance and Escape', '遭遇恐袭时的Run-Hide-Fight', '重大公共事件处理原则'],
    description: '针对教官的公共安全与反恐生存策略。重点在于如何规避风险，以及在恐袭、枪击、持械伤人等重大公共事件中的处理原则：避免(Avoid)、逃避(Escape)、躲藏(Hide)、反击(Fight)。',
    principles: [
      '跑-藏-打 (Run-Hide-Fight): 恐袭应对黄金法则：能跑先跑，跑不掉藏，藏不住才殊死一搏。',
      '态势感知 (Situational Awareness): 时刻保持黄色警觉状态，进入陌生环境先确认安全出口。',
      '掩体识别 (Cover vs Concealment): 区分能挡子弹的\'掩体\'(Cover)与只能挡视线的\'遮蔽物\'(Concealment)。',
      'OODA循环 (Decision Cycle): 观察(Observe)-调整(Orient)-决策(Decide)-行动(Act)，比敌人更快循环。'
    ],
    scenarios: [
      { danger: '火车站突发持刀无差别砍杀事件', response: '利用行李箱阻挡 + S型路线逃离 (Zigzag Run) + 引导人群疏散 (Evacuation) (-1 疏散)' },
      { danger: '商场/校园遭遇Active Shooter (枪击)', response: '寻找防弹掩体 (Cover) + 保持静默 + 伺机逃生 (Run-Hide-Fight) (-1 隐蔽)' },
      { danger: '室内场所发生爆炸和火灾', response: '低姿匍匐 (Low Crawl) 避开烟雾 + 寻找安全出口 + 湿布捂鼻 (-1 消防)' },
      { danger: '被暴恐分子堵在死角无法逃脱', response: '利用身边一切硬物 (灭火器/椅子) 进行殊死一搏 (Fight) + 突袭要害' },
      { danger: '暴徒驾驶车辆冲撞人群 (Vehicle Ramming)', response: '利用粗大路障/石墩躲避 (Hard Cover) + 避免沿直线奔跑 + 侧向跳跃 (-1 避险)' },
      { danger: '被劫持为人质 (Hostage Situation)', response: '保持顺从降低存在感 + 观察劫持者规律 + 等待特警救援 (-1 心理)' },
      { danger: '在大型集会中发生群体踩踏', response: '保持拳击架姿态护胸 (Combat Stance) + 顺流移动 + 避免摔倒' },
      { danger: '发现疑似爆炸物/可疑包裹', response: '5C原则 (Confirm, Clear, Cordon, Check, Control) + 立即撤离 (-1 排爆)' },
      { danger: '驾车时遭遇暴徒围堵/打砸', response: '锁死车门 + 持续鸣笛 + 即使撞击也要低速驶离 (Vehicle Escape)' },
      { danger: '遭遇化学毒气/喷雾袭击', response: '屏住呼吸 + 逆风向/高处撤离 + 紧急冲洗 (-1 生化)' }
    ],
    techniques: [
      { 
        name: 'Run-Hide-Fight', 
        details: '美国国土安全部标准反恐流程', 
        drill: {
          drillName: "RHF Protocol Drill",
          setup: "建筑物。",
          phase1_technical: "1. Run：识别出口，丢弃重物，快速逃离。\n2. Hide：锁门，关灯，静音手机，寻找掩体。\n3. Fight：伏击，利用简易武器，群体反击。",
          phase2_stress: "全流程模拟：警报响起，教官需快速判断并执行RHF。",
          critical_checkpoints: "1. 顺序不能乱（能跑绝不打）。\n2. 隐藏要彻底。"
        }
      },
      { 
        name: 'Cooper颜色代码', 
        details: '白/黄/橙/红 心理状态切换与威胁识别', 
        drill: {
          drillName: "Color Code Awareness",
          setup: "日常环境。",
          phase1_technical: "1. 白色：放松无防备（仅在家）。\n2. 黄色：警觉放松（外出常态）。\n3. 橙色：发现潜在威胁（聚焦）。\n4. 红色：战斗/逃生（行动）。",
          phase2_stress: "状态切换：在模拟情境中快速从黄切红。",
          critical_checkpoints: "1. 避免陷入白色状态。\n2. 早期识别。"
        }
      },
      { 
        name: '快速疏散引导', 
        details: '如何在恐慌人群中建立秩序并带队逃生', 
        drill: {
          drillName: "Evacuation Leadership",
          setup: "多人模拟人群。",
          phase1_technical: "1. 声音：大声、自信、简短指令（“跟我走！”）。\n2. 手势：明确指向出口。\n3. 控制：制止恐慌行为。",
          phase2_stress: "恐慌控制：面对尖叫乱跑的人群，建立秩序。",
          critical_checkpoints: "1. 成为领导者。\n2. 防止踩踏。"
        }
      },
      { 
        name: '掩体识别', 
        details: '区分能防弹的掩体与仅能遮挡视线的遮蔽物', 
        drill: {
          drillName: "Cover vs Concealment",
          setup: "各种材质物品。",
          phase1_technical: "1. Cover：防弹（发动机、混凝土柱、实心墙）。\n2. Concealment：遮挡视线（灌木、窗帘、石膏板）。\n3. 移动：在掩体间跃进。",
          phase2_stress: "掩体选择测试：在几秒内指出环境中的有效掩体。",
          critical_checkpoints: "1. 知道区别能救命。\n2. 尽量找Cover。"
        }
      },
      { 
        name: '简易止血', 
        details: '战术止血带与填塞法处理大出血', 
        drill: {
          drillName: "Emergency Hemorrhage Control",
          setup: "止血带，填塞纱布。",
          phase1_technical: "1. 直压：直接按压伤口。\n2. 止血带：高位结扎，旋紧。\n3. 填塞：向伤口深处填塞纱布并加压。",
          phase2_stress: "黑暗中华止血：在无光条件下完成止血操作。",
          critical_checkpoints: "1. 时间就是生命。\n2. 必须旋紧。"
        }
      },
      { 
        name: '环境扫描', 
        details: '进入陌生环境先找出口 (Exit Strategy)', 
        drill: {
          drillName: "Exit Strategy Scan",
          setup: "餐厅/教室。",
          phase1_technical: "1. 入门：进入房间先看安全出口。\n2. 观察：观察人群异常（穿着、行为）。\n3. 坐位：背靠墙，面向门。",
          phase2_stress: "3秒扫描：进入房间3秒内指出所有出口。",
          critical_checkpoints: "1. 养成习惯。\n2. 始终留后路。"
        }
      },
      { 
        name: '反跟踪术', 
        details: '识别是否被尾随及摆脱技巧', 
        drill: {
          drillName: "Anti-Surveillance",
          setup: "街道。",
          phase1_technical: "1. 确认：停步看橱窗、系鞋带、突然过马路。\n2. 摆脱：进入繁忙商场，多出口建筑。\n3. 求助：走向警察或安保。",
          phase2_stress: "尾随识别：在模拟街道中找出尾随者。",
          critical_checkpoints: "1. 不要频繁回头（利用反射物）。\n2. 走向人多处。"
        }
      },
      { 
        name: '诡雷识别', 
        details: '识别异常物品与潜在爆炸物', 
        drill: {
          drillName: "IED Awareness",
          setup: "模拟包裹。",
          phase1_technical: "1. 征兆：暴露的电线、奇怪的气味、异常的包裹。\n2. 5C原则：Confirm, Clear, Cordon, Check, Control。\n3. 距离：远离，不要触碰手机（防遥控）。",
          phase2_stress: "搜索演练：在房间内找出疑似爆炸物。",
          critical_checkpoints: "1. 绝对不要碰。\n2. 迅速撤离。"
        }
      },
      { 
        name: '群体恐慌应对', 
        details: '防止踩踏事故的三角站位', 
        drill: {
          drillName: "Anti-Stampede Stance",
          setup: "推挤人群。",
          phase1_technical: "1. 姿态：拳击架，手肘护胸，重心降低。\n2. 移动：顺流而动，向侧面移动。\n3. 跌倒：蜷缩侧卧，护头。",
          phase2_stress: "人浪冲击：在多人推挤中保持平衡。",
          critical_checkpoints: "1. 保护胸腔呼吸空间。\n2. 绝不能倒下。"
        }
      },
      { 
        name: '报警话术', 
        details: '向警方准确报告位置、人数、武器类型', 
        drill: {
          drillName: "911/110 Reporting",
          setup: "模拟电话。",
          phase1_technical: "1. 位置：由于GPS误差，必须口述具体位置。\n2. 描述：袭击者人数、武器（长枪/手枪/刀）、衣着。\n3. 现状：伤亡情况。",
          phase2_stress: "压力报告：在模拟枪声背景下清晰报告。",
          critical_checkpoints: "1. 简明扼要。\n2. 保持在线。"
        }
      },
      { 
        name: '心理调适', 
        details: '重大创伤后的心理干预基础', 
        drill: {
          drillName: "Psychological First Aid",
          setup: "受惊吓学员。",
          phase1_technical: "1. 接触：温和接触，确认安全。\n2. 稳定：引导深呼吸，提供水。\n3. 倾听：不评判，仅倾听。",
          phase2_stress: "创伤模拟：处理歇斯底里的受害者。",
          critical_checkpoints: "1. 建立安全感。\n2. 不要强迫回忆。"
        }
      },
      { 
        name: '防御性驾驶', 
        details: '车辆作为逃生工具的应用', 
        drill: {
          drillName: "Vehicle Escape",
          setup: "车辆。",
          phase1_technical: "1. 观察：时刻留出车距（能看到前车后轮）。\n2. 撞击：必要时撞击车辆尾部偏离轴线处逃生。\n3. 倒车：J-Turn（理论讲解）。",
          phase2_stress: "被围堵逃生：车辆被人群围堵时的低速推进。",
          critical_checkpoints: "1. 车辆是武器。\n2. 保持车门锁定。"
        }
      }
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
      '安全红线 (Safety First): 训练安全是底线，教官必须对学员的生命健康负绝对责任。',
      '预防机制 (Prevention): 通过热身、护具检查和场地排查，消除90%的潜在受伤风险。',
      '分级训练 (Graded Exposure): 循序渐进增加对抗强度，严禁让初学者直接进行全速实战。',
      '急救响应 (Emergency Response): 熟练掌握CPR/AED及运动损伤处理，做训练场上的守护者。'
    ],
    scenarios: [
      { danger: '学员在高强度训练中心脏骤停倒地', response: '立即CPR (心肺复苏) + 使用AED除颤 + 呼叫120急救 (-1 急救)' },
      { danger: '实战演练中学员被击晕 (KO) 失去意识', response: '检查气道 + 稳定颈椎 + 复苏体位 (Recovery Position) 防止误吸 (-1 急救)' },
      { danger: '训练中发生关节扭伤或肌肉拉伤', response: '立即停止训练 + 冷敷 + 加压包扎 (R.I.C.E原则) (-1 医疗)' },
      { danger: '夏季室外训练学员出现中暑症状', response: '移至阴凉处 + 降温 + 补充电解质水 (-1 医疗)' },
      { danger: '学员在对抗中出现过度恐慌/过度通气', response: '隔离休息 + 引导战术呼吸 (Box Breathing) + 心理安抚 (-1 心理)' },
      { danger: '发现学员未佩戴护齿进行实战', response: '立即叫停 (STOP) + 强制佩戴护具 + 安全教育 (-1 规范)' },
      { danger: '学员头部受到撞击出现脑震荡迹象', response: '瞳孔/意识检查 (Concussion Check) + 禁止继续训练 + 送医 (-1 医疗)' },
      { danger: '训练场地面有水渍/汗水导致滑倒风险', response: '暂停训练 + 清理场地 + 检查环境安全 (-1 场控)' },
      { danger: '学员出现低血糖晕厥', response: '平卧抬高双腿 + 补充糖分 + 观察恢复情况 (-1 医疗)' },
      { danger: '颈部绞杀训练中出现喉喉软骨损伤', response: '冰敷颈部 + 密切观察呼吸 + 及时送医 (-1 医疗)' }
    ],
    techniques: [
      { 
        name: 'CPR心肺复苏', 
        details: '标准按压频率与人工呼吸比例', 
        drill: {
          drillName: "CPR Certification Drill",
          setup: "假人，AED。",
          phase1_technical: "1. 评估：拍肩呼叫，检查呼吸。\n2. 按压：胸骨中下段，深5-6cm，频率100-120/分。\n3. 通气：30次按压:2次呼吸。",
          phase2_stress: "2分钟高质量按压：连续进行2分钟标准按压（非常累）。",
          critical_checkpoints: "1. 尽量减少中断。\n2. 回弹充分。"
        }
      },
      { 
        name: 'AED操作', 
        details: '自动体外除颤器的使用流程', 
        drill: {
          drillName: "AED Protocol",
          setup: "AED训练机。",
          phase1_technical: "1. 开机：听语音提示。\n2. 贴片：右锁骨下，左乳头外下。\n3. 除颤：离开病人，按下电击键。",
          phase2_stress: "CPR配合：在CPR过程中穿插AED操作。",
          critical_checkpoints: "1. 听指令。\n2. 确保无人接触。"
        }
      },
      { 
        name: '脑震荡评估', 
        details: '快速识别脑震荡症状 (瞳孔/意识)', 
        drill: {
          drillName: "Concussion Check",
          setup: "手电筒。",
          phase1_technical: "1. 问询：你是谁？在哪？刚才发生了什么？\n2. 观察：瞳孔是否等大，平衡感。\n3. 决策：任何疑似立即停止训练并送医。",
          phase2_stress: "击倒模拟：学员倒地后模拟神志不清，教官快速评估。",
          critical_checkpoints: "1. 宁严勿松。\n2. 防止二次撞击。"
        }
      },
      { 
        name: 'R.I.C.E原则', 
        details: 'Rest, Ice, Compression, Elevation', 
        drill: {
          drillName: "Acute Injury Mgmt",
          setup: "冰袋，绷带。",
          phase1_technical: "1. Rest：制动。\n2. Ice：冷敷15-20分钟。\n3. Compression：加压包扎。\n4. Elevation：抬高患肢。",
          phase2_stress: "现场急救：模拟脚踝扭伤的现场处理。",
          critical_checkpoints: "1. 不要热敷。\n2. 避免冻伤。"
        }
      },
      { 
        name: '海姆立克急救', 
        details: '气道异物梗阻处理', 
        drill: {
          drillName: "Heimlich Maneuver",
          setup: "配对。",
          phase1_technical: "1. 站位：背后环抱。\n2. 手法：一手握拳抵住脐上两指，另一手包住拳。\n3. 发力：向内向上冲击。",
          phase2_stress: "不同体型：对胖子或孕妇的胸部冲击法。",
          critical_checkpoints: "1. 发力方向正确。\n2. 观察异物排出。"
        }
      },
      { 
        name: '止血包扎', 
        details: '动脉出血的加压止血法', 
        drill: {
          drillName: "Bleeding Control",
          setup: "绷带。",
          phase1_technical: "1. 检查：找到出血点。\n2. 压迫：直接指压。\n3. 包扎：使用绷带加压包扎。",
          phase2_stress: "头部流血处理：处理头部外伤流血。",
          critical_checkpoints: "1. 压力要够。\n2. 戴手套（防感染）。"
        }
      },
      { 
        name: '热身规范', 
        details: '关节活动度与心率提升流程', 
        drill: {
          drillName: "Warm-up Routine",
          setup: "无。",
          phase1_technical: "1. 关节：从头到脚关节活动。\n2. 激活：开合跳、高抬腿提升心率。\n3. 专项：针对本格斗课的特定热身（如练拳先热肩）。",
          phase2_stress: "带操考核：教官带领全班进行标准热身。",
          critical_checkpoints: "1. 循序渐进。\n2. 关注学员状态。"
        }
      },
      { 
        name: '护具检查', 
        details: '头盔/护齿/护裆的佩戴标准', 
        drill: {
          drillName: "Gear Check",
          setup: "全套护具。",
          phase1_technical: "1. 护齿：必须咬合贴合。\n2. 护裆：位置正确。\n3. 拳套：手腕魔术贴拉紧。",
          phase2_stress: "快速检查：在1分钟内检查全班护具。",
          critical_checkpoints: "1. 零容忍（无护具不实战）。\n2. 检查破损。"
        }
      },
      { 
        name: '配对原则', 
        details: '按体重/水平/性别合理分组', 
        drill: {
          drillName: "Partner Matching",
          setup: "学员群。",
          phase1_technical: "1. 体重：体重相差不过大。\n2. 水平：老带新（控制力度）或强强对抗。\n3. 轮换：定期更换搭档。",
          phase2_stress: "问题处理：处理力量悬殊导致的训练风险。",
          critical_checkpoints: "1. 安全是配对第一原则。\n2. 关注攻击性强的学员。"
        }
      },
      { 
        name: '停止信号', 
        details: '建立绝对权威的“STOP”口令', 
        drill: {
          drillName: "Freeze Drill",
          setup: "课堂。",
          phase1_technical: "1. 约定：听到“停”或哨音必须立即冻结。\n2. 练习：在激烈对抗中突然喊停。\n3. 后果：强调不止停的严重性。",
          phase2_stress: "混乱中止：在场面失控边缘瞬间叫停。",
          critical_checkpoints: "1. 口令穿透力。\n2. 立即执行。"
        }
      },
      { 
        name: '心理急救', 
        details: '处理学员训练中的恐慌发作', 
        drill: {
          drillName: "Panic Attack Mgmt",
          setup: "模拟恐慌学员。",
          phase1_technical: "1. 隔离：带离训练区。\n2. 呼吸：引导4-7-8呼吸法。\n3. 陪伴：待其平复。",
          phase2_stress: "PTSD触发：处理因模拟场景触发创伤回忆的学员。",
          critical_checkpoints: "1. 不要围观。\n2. 保持冷静。"
        }
      },
      { 
        name: '场地排查', 
        details: '清除训练区的尖锐物与隐患', 
        drill: {
          drillName: "Area Sweep",
          setup: "训练场。",
          phase1_technical: "1. 地面：水渍、杂物。\n2. 墙面：突出的钩子、镜子。\n3. 边界：软垫缝隙。",
          phase2_stress: "隐患找茬：在场地中预设隐患，教官需全部找出。",
          critical_checkpoints: "1. 细节决定成败。\n2. 动态隐患（如水杯）。"
        }
      }
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
      '标准规范 (Standardization): 教官的动作就是学员的标尺，必须展示教科书般的技术细节。',
      '本能反应 (Instinctive): 马伽术核心在于将技术转化为压力下的本能，而非死记硬背。',
      '全域作战 (All Domains): 掌握从徒手到器械、从站立到地面的全方位战斗技能体系。',
      '以技服人 (Skill Mastery): 保持高水平的实战能力，是赢得学员尊重与信任的基石。'
    ],
    scenarios: [
      { danger: '学员要求演示标准马伽术打击发力', response: '展示直拳/掌底/肘击/膝撞的生物力学原理与穿透力 (Striking Mechanics)' },
      { danger: '演示被抓握与抱摔的解脱全流程', response: '分解展示360防御 + 抓腕解脱 + 倒地受身 (Breakfalls)' },
      { danger: '高级课程：面对持刀歹徒的夺刀教学', response: '展示空手入白刃 (Disarm) + 风险控制 + 压力测试' },
      { danger: '特色课程：使用短棍/雨伞进行防卫', response: '展示菲律宾魔杖 (Kali) 的X型打击、缴械与流动练习 (Flow)' },
      { danger: '团队保护任务 (VIP) 战术演示', response: '展示三人小组的菱形阵型 (Diamond) + 撤离技术 + 挡弹' },
      { danger: '地面格斗教学与示范', response: '展示地面防御姿态 + 虾行 (Shrimping) + 战术起立的标准动作' },
      { danger: '应对多名攻击者 (Zombie Drill)', response: '展示步法移动 (Stacking) + 连续打击 + 寻找出口' },
      { danger: '控制与带离技术示范', response: '展示鹅颈腕锁 (Goose Neck) + 痛点控制 + 强制押解' },
      { danger: '简易武器使用教学', response: '展示战术笔/手机/外套的攻防应用与转换' },
      { danger: '全速全力的压力对抗演示', response: '在疲劳状态下保持技术动作不变形 + 战术决策' }
    ],
    techniques: [
      { 
        name: '站架与移动', 
        details: '标准/中性站姿切换，多向滑步', 
        drill: {
          drillName: "Perfect Stance & Footwork",
          setup: "镜子。",
          phase1_technical: "1. 站架：双脚与肩同宽，后脚跟抬起，手护脸。\n2. 移动：前脚进后脚跟，不交叉。\n3. 扫描：移动中保持头部扫描。",
          phase2_stress: "多向反应移动：跟随教官手势快速向前后左右移动。",
          critical_checkpoints: "1. 保持平衡。\n2. 手不掉落。"
        }
      },
      { 
        name: '核心打击技', 
        details: '掌底、肘击(挑/横/砸)、膝撞、踢裆', 
        drill: {
          drillName: "Master Striking",
          setup: "重沙袋。",
          phase1_technical: "1. 旋转：强调髋部旋转发力。\n2. 穿透：打击点在目标后方10厘米。\n3. 回收：打击后迅速回收。",
          phase2_stress: "组合打击：直拳-肘击-膝撞-踢裆 连贯组合。",
          critical_checkpoints: "1. 动力链完整。\n2. 呼吸配合。"
        }
      },
      { 
        name: '360度防御', 
        details: '针对外围摆拳与刀刺的本能防御', 
        drill: {
          drillName: "Perfect 360",
          setup: "泡沫刀。",
          phase1_technical: "1. 角度：小臂与大臂90度。\n2. 接触：腕部肌肉处接触。\n3. 同步：防御与反击完全同步。",
          phase2_stress: "高频攻击防御：应对快速连续的多角度攻击。",
          critical_checkpoints: "1. 身体前迎。\n2. 眼睛不闭。"
        }
      },
      { 
        name: '抓握解脱', 
        details: '手腕被抓、掐脖、熊抱的解脱技术', 
        drill: {
          drillName: "Release Mastery",
          setup: "配对。",
          phase1_technical: "1. 支点：寻找拇指缺口或杠杆支点。\n2. 爆发：利用身体爆发力而非死力。\n3. 打击：解脱前或同时必须有打击。",
          phase2_stress: "盲眼解脱：闭眼感受抓握并解脱。",
          critical_checkpoints: "1. 技术细节准确。\n2. 必须有反击。"
        }
      },
      { 
        name: '倒地受身', 
        details: '侧倒/后倒/前滚翻，保护头部', 
        drill: {
          drillName: "Breakfalls",
          setup: "软垫。",
          phase1_technical: "1. 团身：下巴收紧，背部拱起。\n2. 拍地：手臂45度拍地分散冲击。\n3. 护头：绝对不能让头撞地。",
          phase2_stress: "推倒受身：被毫无预警地推倒。",
          critical_checkpoints: "1. 拍地时机。\n2. 保护颈部。"
        }
      },
      { 
        name: '短棍/魔杖', 
        details: '利用棍术进行攻防，以棍破刀', 
        drill: {
          drillName: "Stick Mechanics",
          setup: "短棍。",
          phase1_technical: "1. 握法：留出一寸棍尾。\n2. 轨迹：X线与圆线打击。\n3. 活手：左手辅助控制。",
          phase2_stress: "对棍实战：轻接触的对棍攻防。",
          critical_checkpoints: "1. 手腕灵活。\n2. 步法配合。"
        }
      },
      { 
        name: '夺刀术', 
        details: '控制持刀手腕，关节折叠夺刀', 
        drill: {
          drillName: "Expert Disarm",
          setup: "橡胶刀。",
          phase1_technical: "1. 控制：绝对控制持刀手腕。\n2. 杠杆：利用杠杆原理夺刀（如折腕）。\n3. 距离：夺刀时身体贴近。",
          phase2_stress: "全速夺刀：在全速攻击中完成夺刀。",
          critical_checkpoints: "1. 控制第一。\n2. 避免划伤。"
        }
      },
      { 
        name: '简易武器', 
        details: '使用钥匙、皮带、手机作为防卫工具', 
        drill: {
          drillName: "Improvised Proficiency",
          setup: "日常物品。",
          phase1_technical: "1. 识别：快速识别环境武器。\n2. 应用：根据物品特性（硬/软/长/短）攻击。\n3. 转换：物品失效后徒手格斗。",
          phase2_stress: "随机物品格斗：抽签决定使用什么物品进行防卫。",
          critical_checkpoints: "1. 创意。\n2. 实用性。"
        }
      },
      { 
        name: 'VIP保护', 
        details: '第三方保护技术与撤离阵型', 
        drill: {
          drillName: "VIP Drill",
          setup: "三人组。",
          phase1_technical: "1. 站位：贴身护卫。\n2. 反应：遇袭立即覆盖或推离。\n3. 撤离：强行带离。",
          phase2_stress: "刺杀演练：应对突发的刺杀企图。",
          critical_checkpoints: "1. 牺牲精神。\n2. 保护要员。"
        }
      },
      { 
        name: '地面防守', 
        details: '倒地后的防御姿态与战术起立', 
        drill: {
          drillName: "Ground Survival",
          setup: "软垫。",
          phase1_technical: "1. 姿态：侧卧，脚对敌。\n2. 踢击：准确踢击膝盖/面部。\n3. 起立：技术性起立。",
          phase2_stress: "1对2地面：在地面应对两名站立攻击者。",
          critical_checkpoints: "1. 保持移动。\n2. 尽快起立。"
        }
      },
      { 
        name: '控制与带离', 
        details: '关节技控制并押送嫌疑人', 
        drill: {
          drillName: "Control & Escort",
          setup: "配对。",
          phase1_technical: "1. 锁技：鹅颈或反关节。\n2. 施压：痛感控制。\n3. 带离：强制行走。",
          phase2_stress: "挣扎带离：嫌疑人不配合，加强控制力度。",
          critical_checkpoints: "1. 控制重心。\n2. 保持警惕。"
        }
      },
      { 
        name: '教学示范', 
        details: '镜面示范与分解动作展示能力', 
        drill: {
          drillName: "Demo Skills",
          setup: "面向学员。",
          phase1_technical: "1. 镜面：左右相反示范。\n2. 分解：慢动作关键帧。\n3. 角度：多角度展示。",
          phase2_stress: "纠错示范：模仿学员错误并纠正。",
          critical_checkpoints: "1. 动作标准。\n2. 讲解清晰。"
        }
      }
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
      '压力接种 (Stress Inoculation): 在可控环境中模拟极端高压，让学员对肾上腺素反应脱敏。',
      '本能触发 (Trigger Instinct): 在大脑缺氧和体能透支时，依靠肌肉记忆做出最直接的反应。',
      '永不放弃 (Never Quit): 培养\'只要心脏还在跳动，战斗就未结束\'的钢铁意志。',
      '极限决策 (Under-fire Decision): 训练在混乱、噪音和疲劳干扰下，依然能做出正确战术选择。'
    ],
    scenarios: [
      { danger: '多名暴徒连续围堵推搡 (Zombie Drill)', response: '力竭状态下连续反击 + 避免纠缠 + 寻找空档突围 (Stacking)' },
      { danger: '完全黑暗中被突然勒颈/抱摔', response: '触觉本能反应 (Sensory) + 瞬间解脱 + 打击要害' },
      { danger: '原地旋转10圈后面对随机攻击 (眩晕测试)', response: '克服前庭失衡 + 恢复格斗姿态 + 准确打击目标' },
      { danger: '在极度疲劳 (Tabata后) 下进行复杂决策', response: 'OODA快速识别敌友/武器 + 决策反击或逃跑' },
      { danger: '被压在地面遭受多人踢打', response: '龟缩防守 (Turtle) 护头 + 抓住时机翻滚 + 战术起立' },
      { danger: '单手/单腿“受伤”状态下的格斗', response: '利用剩余肢体战斗 + 调整战术策略 + 绝不放弃' },
      { danger: '在噪音/闪光干扰下进行精细操作 (如换弹/止血)', response: '屏蔽感官干扰 + 专注核心任务 + 肌肉记忆执行' },
      { danger: '遭遇突然的冷水泼洒或窒息感体验', response: '战术呼吸控制心率 + 保持冷静 + 恢复行动能力' },
      { danger: '全装具负重状态下的长距离奔袭与格斗', response: '克服体能极限 + 合理分配体力 + 完成任务' },
      { danger: '面对持刀者的全速全力进攻 (Shark Tank)', response: '生存第一 + 牺牲非要害部位 + 创造反杀机会' }
    ],
    techniques: [
      { 
        name: 'Tabata体能', 
        details: '高强度间歇性体能爆发', 
        drill: {
          drillName: "Combat Tabata",
          setup: "计时器，靶具。",
          phase1_technical: "1. 动作：波比跳、重拳、踢腿。\n2. 节奏：20秒极限做，10秒休，8组。\n3. 强度：必须全力以赴。",
          phase2_stress: "力竭格斗：Tabata结束后立即进行1分钟实战。",
          critical_checkpoints: "1. 动作不变形。\n2. 意志力。"
        }
      },
      { 
        name: '暗黑盲斗', 
        details: '蒙眼/无光环境下的触觉防御', 
        drill: {
          drillName: "Blindfolded Fighting",
          setup: "眼罩。",
          phase1_technical: "1. 感知：通过接触感知对方动向 (Sticky Hands)。\n2. 防御：收缩防线，护头。\n3. 缠抱：进入缠抱限制打击。",
          phase2_stress: "盲斗求生：蒙眼应对随机攻击。",
          critical_checkpoints: "1. 不要乱挥。\n2. 保持镇定。"
        }
      },
      { 
        name: '眩晕对抗', 
        details: '克服前庭失衡的战斗能力', 
        drill: {
          drillName: "Dizzy Fight",
          setup: "棒球棍（原地转圈用）。",
          phase1_technical: "1. 旋转：原地低头旋转10圈。\n2. 恢复：通过盯着一个点或降低重心恢复。\n3. 战斗：立即应对攻击。",
          phase2_stress: "眩晕打靶：旋转后准确打击移动靶。",
          critical_checkpoints: "1. 宽站架。\n2. 凭本能。"
        }
      },
      { 
        name: '1对多突围', 
        details: 'Zombie Drill 连续摆脱', 
        drill: {
          drillName: "Zombie Drill",
          setup: "多名陪练。",
          phase1_technical: "1. 移动：不断移动，避免被包围。\n2. 堆叠：让敌人排成一条线 (Stacking)。\n3. 摆脱：推搡、打击、逃离。",
          phase2_stress: "尸潮模式：5-6人慢速围堵，训练者寻找缝隙突围。",
          critical_checkpoints: "1. 不要纠缠。\n2. 保持视野。"
        }
      },
      { 
        name: '受身护头', 
        details: '力竭倒地时的自我保护', 
        drill: {
          drillName: "Fatigue Breakfalls",
          setup: "软垫。",
          phase1_technical: "1. 倒地：在推搡下安全倒地。\n2. 护头：无论多累，头不能撞地。\n3. 起立：利用肌肉记忆起立。",
          phase2_stress: "连续倒地起立：连续20次被推倒并起立。",
          critical_checkpoints: "1. 颈部力量。\n2. 核心支撑。"
        }
      },
      { 
        name: '抗击打训练', 
        details: '腹部/大腿的排打适应', 
        drill: {
          drillName: "Body Conditioning",
          setup: "实心球/拳套。",
          phase1_technical: "1. 绷紧：呼气绷紧肌肉。\n2. 接受：接受适度打击。\n3. 适应：提高痛阈。",
          phase2_stress: "击打中对话：在接受击打时保持正常对话（抗压）。",
          critical_checkpoints: "1. 不要闭气。\n2. 循序渐进。"
        }
      },
      { 
        name: '压力呼吸', 
        details: '战术呼吸法控制心率', 
        drill: {
          drillName: "Tactical Breathing",
          setup: "心率表。",
          phase1_technical: "1. 节奏：吸4-屏4-呼4-屏4 (Box Breathing)。\n2. 应用：在激烈运动间隙进行。\n3. 效果：强制降低心率。",
          phase2_stress: "高压恢复：冲刺后利用呼吸法在30秒内降低心率。",
          critical_checkpoints: "1. 专注呼吸。\n2. 鼻吸口呼。"
        }
      },
      { 
        name: '决策反应', 
        details: '红绿灯/口令 快速辨识', 
        drill: {
          drillName: "Cognitive Drill",
          setup: "颜色牌/算术题。",
          phase1_technical: "1. 任务：一边打靶一边做算术或识别颜色。\n2. 干扰：语言干扰。\n3. 决策：根据答案决定打拳还是踢腿。",
          phase2_stress: "脑力过载：在高强度运动中进行复杂决策。",
          critical_checkpoints: "1. 大脑不能停。\n2. 动作准确。"
        }
      },
      { 
        name: '负重格斗', 
        details: '穿戴护具/负重背心的对抗', 
        drill: {
          drillName: "Weighted Combat",
          setup: "10kg负重背心。",
          phase1_technical: "1. 适应：适应重心变化。\n2. 发力：需要更大的核心力量。\n3. 耐力：克服缺氧感。",
          phase2_stress: "负重实战：穿背心进行3分钟实战。",
          critical_checkpoints: "1. 防止关节受伤。\n2. 保持技术动作。"
        }
      },
      { 
        name: '伤情模拟', 
        details: '模拟单手/单腿受伤后的战斗', 
        drill: {
          drillName: "Injured Fighter",
          setup: "绑带。",
          phase1_technical: "1. 限制：绑住一只手或一条腿。\n2. 适应：利用剩余肢体战斗。\n3. 策略：更依赖防守反击。",
          phase2_stress: "独臂格斗：仅用一只手应对攻击。",
          critical_checkpoints: "1. 保护受伤部位。\n2. 永不放弃。"
        }
      },
      { 
        name: '视觉剥夺', 
        details: '利用听觉定位威胁', 
        drill: {
          drillName: "Sonar Drill",
          setup: "眼罩，铃铛。",
          phase1_technical: "1. 聆听：听脚步声或铃铛声。\n2. 定位：转向声音来源。\n3. 攻击：向声源发动攻击。",
          phase2_stress: "黑暗猎杀：蒙眼追击发出声音的目标。",
          critical_checkpoints: "1. 专注力。\n2. 听声辨位。"
        }
      },
      { 
        name: '精神意志', 
        details: '极限状态下的呐喊与坚持', 
        drill: {
          drillName: "Spirit Drill",
          setup: "多人压制。",
          phase1_technical: "1. 呐喊：大声吼叫激发潜能。\n2. 挣扎：在多人压制下拼命挣扎。\n3. 突破：绝不停止直到突破。",
          phase2_stress: "鲨鱼池：在圆圈中间应对源源不断的进攻者，不能停。",
          critical_checkpoints: "1. 战斗精神。\n2. 突破极限。"
        }
      }
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
      '因材施教 (Adaptability): 针对不同体能、性别和心理素质的学员，灵活调整教学策略。',
      '正向反馈 (Positive Feedback): 善用\'三明治沟通法\'，在纠错的同时保护学员的自信心。',
      '循序渐进 (Progression): 遵循\'讲解-示范-引导-纠错\'的标准流程，科学构建技能树。',
      '控场能力 (Class Control): 敏锐察觉课堂气氛与风险，用气场与口令掌控训练节奏。'
    ],
    scenarios: [
      { danger: '学员动作错误且产生挫败感', response: '示范三明治沟通法 (Feedback) + 引导分解练习 (-1 教学)' },
      { danger: '复杂技术学员无法掌握/动作变形', response: '动作降阶 (Regression) + 慢速分解示范 (Breakdown) (-1 教学)' },
      { danger: '学员练习时动作过大有危险', response: '立即叫停 (Freeze) + 示范正确控制力度 + 安全教育 (-1 控场)' },
      { danger: '面对不同水平的混班教学', response: '分层教学 + 设立不同格斗目标 (初级练动作/高级练压力) (-1 教学)' },
      { danger: '学员提出质疑或挑战教官权威', response: '专业解答原理 + 邀请进行受控实战验证 (Sparring) + 保持风度' },
      { danger: '课堂气氛沉闷学员注意力不集中', response: '引入游戏化格斗热身 (Gamification) + 增加互动提问 (-1 教学)' },
      { danger: '处理身体僵硬/紧张的学员', response: '触觉引导放松 + 战术呼吸指导 (Breathing) + 幽默化解 (-1 教学)' },
      { danger: '异性学员教学中的身体接触问题', response: '遵循接触规范 (ASK-SHOW-TOUCH) + 使用教具辅助 (-1 规范)' },
      { danger: '突发教学事故或器材损坏', response: '启动应急预案 + 调整教学内容 + 确保安全 (-1 应急)' },
      { danger: '课后学员咨询心理创伤问题', response: '倾听与共情 + 不做心理医生 + 推荐专业援助 (-1 心理)' }
    ],
    techniques: [
      { 
        name: '讲解 (Explain)', 
        details: '阐述原理与应用场景',
        drill: {
          drillName: "30秒电梯演讲 (The Elevator Pitch)",
          setup: "镜子或录像设备。",
          phase1_technical: "1. 场景引入(Hook)：'想象你在电梯里遇到歹徒...'。\n2. 原理阐述(Principle)：'我们利用反关节而不是蛮力...'。\n3. 目标明确(Goal)：'这节课我们学会如何安全脱身'。",
          phase2_stress: "被学员打断：在讲解过程中，安排助教扮演'刺头'学员不断提问，教官需在不丢失节奏的情况下掌控全场。",
          critical_checkpoints: "1. 眼神交流(Eye Contact)。\n2. 避免过多专业术语堆砌。\n3. 声音洪亮自信。"
        }
      },
      { 
        name: '示范 (Demo)', 
        details: '常速/慢速/多角度展示', 
        drill: { 
          drillName: "标准示范流程", 
          setup: "助教。", 
          phase1_technical: "1. 完整速度：全速演示技术，展示实战效果。\n2. 多角度：正面、侧面、背面各演示一次。\n3. 分解：慢速分解动作，配合简要说明。", 
          phase2_stress: "在疲劳状态下的完美示范：进行剧烈运动后，立即进行平稳、标准的动作示范。", 
          critical_checkpoints: "1. 示范必须标准，你是学员的镜子。\n2. 注意细节规范。" 
        } 
      },
      { 
        name: '引导 (Guide)', 
        details: '手把手建立肌肉记忆', 
        drill: { 
          drillName: "触觉引导教学", 
          setup: "学员。", 
          phase1_technical: "1. 调整：直接动手调整学员肢体角度。\n2. 阻力：施加轻微阻力，引导学员对抗发力。\n3. 路径：引导肢体走正确的发力路径。", 
          phase2_stress: "纠正肢体极其僵硬的学员：面对紧张僵硬的学员，如何通过引导使其放松。", 
          critical_checkpoints: "1. 征得同意后触碰。\n2. 力度适中。" 
        } 
      },
      { 
        name: '纠错 (Correct)', 
        details: '精准指出核心错误', 
        drill: { 
          drillName: "火眼金睛训练", 
          setup: "观察模拟教学。", 
          phase1_technical: "1. 观察：不急于打断，观察整体动作。\n2. 锁定：找出影响成功率的'核心错误'。\n3. 修正：给出具体的修正指令。", 
          phase2_stress: "10秒内指出3个关键错误：快速扫描多名学员，精准指出问题。", 
          critical_checkpoints: "1. 不要一次纠正太多问题。\n2. 抓大放小。" 
        } 
      },
      { 
        name: '三明治法', 
        details: '沟通心理学应用', 
        drill: { 
          drillName: "反馈话术练习", 
          setup: "角色扮演。", 
          phase1_technical: "1. 肯定(上层面包)：'你的发力很好...'。\n2. 纠正(肉)：'但是手掉下来了，这很危险...'。\n3. 鼓励(下层面包)：'改正这点就很完美了，继续保持'。", 
          phase2_stress: "面对情绪低落的学员：如何通过三明治法重建其信心。", 
          critical_checkpoints: "1. 真诚是前提。\n2. 鼓励要具体。" 
        } 
      },
      { 
        name: '口令指挥', 
        details: '清晰/有力/节奏感', 
        drill: { 
          drillName: "指挥官嗓音训练", 
          setup: "空旷场地。", 
          phase1_technical: "1. 发声：气沉丹田，腹式呼吸。\n2. 节奏：口令要有断句，长短结合。\n3. 手势：配合明确的手势指挥。", 
          phase2_stress: "在嘈杂环境下的指挥：背景音乐开大，练习穿透性口令。", 
          critical_checkpoints: "1. 口令要短促有力。\n2. 避免破音。" 
        } 
      },
      { 
        name: '错误模拟', 
        details: '模仿学员错误以加深印象', 
        drill: {
          drillName: "Mirroring Mistakes",
          setup: "助教。",
          phase1_technical: "1. 夸张：夸张模仿学员错误（如掉手、抬头）。\n2. 对比：立即展示正确动作。\n3. 提问：问学员区别在哪里。",
          phase2_stress: "即兴纠错：在不伤害学员自尊的前提下幽默纠错。",
          critical_checkpoints: "1. 幽默感。\n2. 尊重。"
        }
      },
      { 
        name: '辅助器材', 
        details: '靶具/假人的教学应用', 
        drill: {
          drillName: "Pad Holding Teaching",
          setup: "手靶/脚靶。",
          phase1_technical: "1. 喂靶：位置模拟真实打击点。\n2. 阻力：给与适当反馈力。\n3. 安全：保护持靶者手腕。",
          phase2_stress: "教学员喂靶：教会小白学员如何安全喂靶。",
          critical_checkpoints: "1. 喂靶即喂招。\n2. 安全第一。"
        }
      },
      { 
        name: '课程设计', 
        details: '热身-复习-新课-压力-拉伸', 
        drill: {
          drillName: "Lesson Planning",
          setup: "白板。",
          phase1_technical: "1. 结构：热身(15)-复习(10)-新课(30)-压力(20)-拉伸(15)。\n2. 逻辑：从易到难，环环相扣。\n3. 时间：严格控制时间。",
          phase2_stress: "突发调整：课时被压缩一半，如何调整教案。",
          critical_checkpoints: "1. 核心目标清晰。\n2. 节奏紧凑。"
        }
      },
      { 
        name: '互动提问', 
        details: '引导学员思考而非填鸭', 
        drill: {
          drillName: "Socratic Questioning",
          setup: "课堂。",
          phase1_technical: "1. 开放式：'你感觉刚才哪里卡住了？'。\n2. 引导：'如果我们这样做会发生什么？'。\n3. 总结：归纳学员答案。",
          phase2_stress: "冷场处理：没人回答时如何打破僵局。",
          critical_checkpoints: "1. 耐心。\n2. 鼓励思考。"
        }
      },
      { 
        name: '肢体接触', 
        details: '得体的纠正动作规范', 
        drill: {
          drillName: "Appropriate Touch",
          setup: "配对。",
          phase1_technical: "1. 许可：'我可以调整你的手肘吗？'。\n2. 手位：使用手背或非敏感部位接触。\n3. 边界：严禁触碰敏感区。",
          phase2_stress: "异性教学：在教异性学员时的规范操作。",
          critical_checkpoints: "1. 专业性。\n2. 避免误会。"
        }
      },
      { 
        name: '气场控制', 
        details: '掌控全场的教官威严', 
        drill: {
          drillName: "Command Presence",
          setup: "讲台。",
          phase1_technical: "1. 站姿：挺拔，开放式姿态。\n2. 眼神：照顾到每一个学员。\n3. 声音：自信，不犹豫。",
          phase2_stress: "处理刺头：面对挑战权威的学员，如何优雅地掌控局面。",
          critical_checkpoints: "1. 自信内敛。\n2. 以德服人。"
        }
      }
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
      '防卫边界 (Stop When Safe): 威胁一旦消除必须立即停止打击，严禁报复性\'补刀\'，防止防卫过当。',
      '证据意识 (Evidence): 在冲突中要有意识地寻找监控、证人，并利用手机录音录像取证。',
      '冲突降级 (De-escalation): 最好的防身术是不打，利用语言和肢体语言化解潜在暴力。',
      '心理博弈 (Psychology): 洞察犯罪分子的筛选机制，通过自信体态避免成为\'软目标\'。'
    ],
    scenarios: [
      { danger: '制服歹徒后对方已丧失能力，是否继续打击', response: '立即停止打击 (Stop) + 保持战术警戒 (Scan) + 报警 (防卫过当红线) (-1 法律)' },
      { danger: '遭遇路怒症或醉汉的社交暴力 (非捕食者)', response: '识别非致命意图 + 栅栏式站位 (Fence Stance) + 语言降级撤离 (-1 法律)' },
      { danger: '遭遇有预谋的抢劫/绑架 (捕食者)', response: '打破其计划 (Disrupt) + 制造混乱 + 全力反击逃生 (All out Fight)' },
      { danger: '冲突后的现场处理与警察笔录', response: '表明受害者身份 + 强调"我很害怕" + 指出凶器/证据 (-1 法律)' },
      { danger: '对方言语挑衅但未动手', response: '保持栅栏式站位 (Fence) + 录音取证 + 避免互殴 (-1 法律)' },
      { danger: '被多人围堵但尚未发生肢体冲突', response: '寻找监控区域 + 保持移动 (Mobility) + 大声呼救吸引证人 (-1 策略)' },
      { danger: '在正当防卫中使用器械/武器', response: '仅在生命受威胁时使用 + 威胁消除立即停止 + 解释合理性 (-1 法律)' },
      { danger: '面对未成年人霸凌/攻击', response: '以控制/解脱为主 (Control/Escape) + 避免造成严重身体伤害 (-1 法律)' },
      { danger: '通过微表情/肢体语言识别攻击前兆', response: '握拳/咬牙/拍口袋 -> 提前预警 + 准备战斗 (Prepare to Fight) (-1 心理)' },
      { danger: '如何避免成为犯罪分子的目标 (硬目标)', response: '自信体态 (Posture) + 态势感知 (Awareness) + 避免低头看手机 (-1 心理)' }
    ],
    techniques: [
      { 
        name: '红线意识', 
        details: '识别防卫过当的界限', 
        drill: {
          drillName: "Legal Line Drill",
          setup: "案例讨论。",
          phase1_technical: "1. 识别：对方倒地/停止攻击/逃跑。\n2. 动作：立即停止追击/打击。\n3. 警戒：保持距离，防止反扑。",
          phase2_stress: "肾上腺素控制：在激烈对抗后能否立即停手。",
          critical_checkpoints: "1. 严禁补刀。\n2. 安全即止。"
        }
      },
      { 
        name: '停止打击', 
        details: '控制肾上腺素及时收手', 
        drill: {
          drillName: "Stop & Scan",
          setup: "靶具。",
          phase1_technical: "1. 疯狂打击：全速打靶。\n2. 口令：听到“停”立即后撤。\n3. 扫描：举手示警，扫描环境。",
          phase2_stress: "诱导攻击：陪练倒地后继续言语挑衅，学员必须克制不打。",
          critical_checkpoints: "1. 情绪控制。\n2. 态势感知。"
        }
      },
      { 
        name: '报警话术', 
        details: '强调“我被攻击，我很害怕”', 
        drill: {
          drillName: "Police Call Protocol",
          setup: "手机。",
          phase1_technical: "1. 身份：我是受害者。\n2. 行为：他攻击我，我被迫自卫。\n3. 诉求：我需要帮助/救护车。",
          phase2_stress: "现场笔录模拟：警察到场后，如何简短准确陈述。",
          critical_checkpoints: "1. 少说多听。\n2. 强调“害怕”。"
        }
      },
      { 
        name: '证据意识', 
        details: '录音/录像/证人', 
        drill: {
          drillName: "Evidence Gathering",
          setup: "手机。",
          phase1_technical: "1. 拍摄：开启录像，拍摄对方凶器/行为。\n2. 证人：大声呼喊吸引路人注意。\n3. 监控：寻找摄像头位置。",
          phase2_stress: "冲突中取证：在对峙中如何安全拍摄。",
          critical_checkpoints: "1. 手机不要被抢。\n2. 引导对方入镜。"
        }
      },
      { 
        name: '捕食者画像', 
        details: '冷血/有计划/寻找弱者', 
        drill: {
          drillName: "Predator ID",
          setup: "视频分析。",
          phase1_technical: "1. 眼神：死盯着猎物或游离搜索。\n2. 距离：侵入私人空间。\n3. 试探：通过推撞/问路试探反应。",
          phase2_stress: "人群识别：在人群中找出扮演“捕食者”的人。",
          critical_checkpoints: "1. 直觉。\n2. 早期规避。"
        }
      },
      { 
        name: '社交暴力', 
        details: '情绪化/面子/可降级', 
        drill: {
          drillName: "Social Violence De-escalation",
          setup: "角色扮演。",
          phase1_technical: "1. 姿态：手掌向外，防御姿态。\n2. 语言：道歉/示弱（给面子）。\n3. 撤离：慢慢后退。",
          phase2_stress: "醉汉应对：应对情绪激动的醉汉挑衅。",
          critical_checkpoints: "1. 不要激怒。\n2. 随时准备开打。"
        }
      },
      { 
        name: '非语言信号', 
        details: '识别防卫过当的界限', 
        drill: {
          drillName: "Body Language Decoding",
          setup: "观察。",
          phase1_technical: "1. 握拳/咬牙：攻击前兆。\n2. 拍打口袋：可能在找武器。\n3. 环顾四周：可能在找证人或同伙。",
          phase2_stress: "瞬时判断：根据微表情判断攻击意图。",
          critical_checkpoints: "1. 观察手部。\n2. 相信直觉。"
        }
      },
      { 
        name: '受害者筛选', 
        details: '如何避免成为软柿子', 
        drill: {
          drillName: "Hard Target Profile",
          setup: "行走。",
          phase1_technical: "1. 步态：抬头挺胸，大步流星。\n2. 眼神：短暂对视确认。\n3. 警觉：不看手机，戴耳机。",
          phase2_stress: "对比测试：表现出软弱和强硬两种状态。",
          critical_checkpoints: "1. 气场。\n2. 自信。"
        }
      },
      { 
        name: '恐惧管理', 
        details: '理解生理反应 (隧道视野)', 
        drill: {
          drillName: "Fear Management",
          setup: "高压情境。",
          phase1_technical: "1. 认知：手抖、心跳快是正常的。\n2. 呼吸：战术呼吸恢复冷静。\n3. 聚焦：专注于行动而非情绪。",
          phase2_stress: "惊吓测试：突然的巨响或袭击。",
          critical_checkpoints: "1. 接纳恐惧。\n2. 化恐惧为动力。"
        }
      },
      { 
        name: '战后心理', 
        details: 'PTSD创伤后应激干预', 
        drill: {
          drillName: "Post-Conflict Debrief",
          setup: "谈话。",
          phase1_technical: "1. 宣泄：允许哭泣或发抖。\n2. 睡眠：保证休息。\n3. 专业：必要时寻求心理医生。",
          phase2_stress: "心理急救：模拟冲突后的心理平复。",
          critical_checkpoints: "1. 这是一个过程。\n2. 不要独自承受。"
        }
      },
      { 
        name: '法律条款', 
        details: '刑法20条/无限防卫权', 
        drill: {
          drillName: "Law Knowledge",
          setup: "问答。",
          phase1_technical: "1. 正当防卫：正在进行、不法侵害。\n2. 特殊防卫：行凶、杀人、抢劫、强奸、绑架。\n3. 互殴：双方都有加害意图。",
          phase2_stress: "情境判断：快速判断案例是否属于正当防卫。",
          critical_checkpoints: "1. 清晰界限。\n2. 宁愿坐牢也不进坟墓（但在法律允许范围内）。"
        }
      },
      { 
        name: '案例分析', 
        details: '真实案件的法律复盘', 
        drill: {
          drillName: "Case Study",
          setup: "视频/新闻。",
          phase1_technical: "1. 还原：发生了什么。\n2. 分析：哪里做对了，哪里做错了。\n3. 改进：如果是我，我会怎么做。",
          phase2_stress: "模拟重演：重演经典防卫案件。",
          critical_checkpoints: "1. 吸取教训。\n2. 举一反三。"
        }
      }
    ],
    tags: ['法律', '心理学', '正当防卫']
  }
];
