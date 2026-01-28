import React, { useState, useEffect, useRef } from 'react';
import { Theme, Technique } from '../types';
import { X, CheckCircle, BrainCircuit, Activity, ShieldAlert, AlertTriangle, Target, Flame, Info, Lock, Key, Zap, Medal, Gift, Play, ChevronRight, List, MonitorPlay, Clock, Layout, BookOpen, Quote, Pause, MousePointer2, Award, CheckSquare, ArrowRight, ShoppingBag, Sword, User } from 'lucide-react';

// ==========================================
// 🔧 视频链接配置区域 (Video Configuration)
// ==========================================
// 默认主题主视频 (当找不到具体技术视频时播放)
const MAIN_VIDEO_CONFIG = {
  CIVILIAN: "https://yun.kmcn.vip/c3364607vodcq1304509294/336f82c45145403714467265465/MF8q4AOZngcA.mp4",
  MILITARY: "https://yun.kmcn.vip/c3364607vodcq1304509294/a4cc02a25145403714465718516/qJDTuUB1A1cA.mp4",
  INSTRUCTOR: "https://yun.kmcn.vip/c3364607vodcq1304509294/e61cf0a45145403714466219197/EP5d7XBa1xIA.mp4"
};

// 临时通用链接 (统一替换为指定视频)
const TEMP_LINK = "https://yun.kmcn.vip/c3364607vodcq1304509294/3380d6a41253642699132774530/xGjcuANdENoA.mp4";

// 💡 自定义视频标题配置 (Custom Video Titles)
// 如果某个主题需要特殊的视频标题（作为键名），请在此处配置。
// 格式：ThemeID: [标题1, 标题2, ... 标题12]
const CUSTOM_THEME_TITLES: Record<string, string[]> = {
  // 1. 街头格斗终结者
  'civ-1': [
    "1 争吵中对方突然伸手用力推搡胸部试图挑起斗殴",
    "2 对方双手死死揪住衣领并试图用头撞击",
    "3 深夜大排档遭遇醉汉无预警挥舞王八拳进攻",
    "4 倒地后对方站立试图足球踢头部",
    "5 被对方从侧面使用夹颈摔勒住脖子",
    "6 被对方单手抓住手腕并试图强行拖拽",
    "7 对方从背后突袭实施连臂熊抱",
    "8 被对方逼入墙角双手掐脖窒息",
    "9 被歹徒单手掐脖威胁",
    "10 对方试图使用抱腿摔",
    "11 被人从侧面双手掐脖",
    "12 面对持刀歹徒左右挥砍"
  ],
  // 2. 女子防身特辑
  'civ-2': [
    "1 遭遇背部环抱+从后方被熊抱",
    "2 头发被恶意抓扯",
    "3 被按在墙上掐脖子",
    "4 地面被骑乘压制掐脖",
    "5 手腕被强力抓握/拉走",
    "6 遭遇正面熊抱+正面熊抱",
    "7 双手抓双腕压制",
    "8 遭遇前方勒颈/头锁",
    "9 遭遇背后勒颈",
    "10 遭遇刀具威胁近距离",
    "11 被从背后熊抱抱起-双脚离地",
    "12 被侧面搂住脖颈"
  ],
  // 3. 校园铁盾
  'civ-3': [
    "1 在走廊被霸凌者故意推搡挑衅",
    "2 被同学从侧面使用夹颈摔勒住并嘲笑",
    "3 被多人围堵在厕所或死角",
    "4 书包带被强行拉扯试图拽倒",
    "5 被按在地上羞辱或殴打",
    "6 被抓住衣领并抵在墙上威胁",
    "7 遭遇言语侮辱和推搡升级王八拳击打",
    "8 被抓住手腕试图强制带走",
    "9 对方试图使用裸绞勒颈",
    "10 面对持棍棒/椅子的冲动攻击",
    "11 后方被人贩子捂嘴拖拽",
    "12 【防拐】被从背后熊抱抱起（双脚离地）"
  ],
    // 4. 电梯/车内/走廊：狭小空间自卫
  'civ-4': [
    "1 【电梯】对方强势正面双手掐脖",
    "2 小空间内敌人抓住自己的手腕试图控制",
    "3 【电梯】角落被壁咚/搂抱强吻",
    "4 狭小空间内被人从背后勒脖子",
    "5 车内或走廊中遭遇持刀攻击者刺击",
    "6 面对对方死死搂抱",
    "7 持械歹徒左右挥砍",
    "8 面对刁钻角度的直拳进攻",
    "9 被人蓄力蹬踹-避开中线+拍档",
    "10 电梯内陌生人突然逼近企图施暴"
  ],
  // 5. 刀锋之下：持刀抢劫与反恐生存
  'civ-5': [
    "1 刀抵腹部索要钱财",
    "2 疯狗模式：暴徒持砍刀冲入人群",
    "3 被逼入死角无路可逃",
    "4 对方持刀上挑/上捅",
    "5 深夜尾随：背后的割喉式锁颈威胁",
    "6 路怒升级：正面的凶狠推搡与突然拔刀直刺",
    "7 致命冰锥：高举过头的垂直如雨点般扎刺",
    "8 绑架现场：从背后被刀抵住肾脏区并强行拖拽",
    "9 倒地绝境：被打倒在地，对方骑乘抵住脖子",
    "10 歹徒正手持刀从上向下劈砍",
    "11 远距离对峙：左右挥舞恐吓与逼近反手刀",
    "12 歹徒持刀逼近"
  ],  
  // 6. 地面修罗：倒地后的生存法则
  'civ-6': [
    "1 被摔倒在地后迅速站起击退对方",
    "2 在狭小空间倒地被骑乘压制",
    "3 被击倒在地-对方站立准备实施足球踢",
    "4 对方试图扑入你的两腿之间进行打击",
    "5 被大体重对手骑乘位压制并殴打面部",
    "6 被侧压控制无法动弹",
    "7 【骑乘】对方掏出匕首抵住脖子",
    "8 被背后裸绞即将拖入地面",
    "9 在地面上被压制掐脖",
    "10 【突袭】背后被猛推/绊倒瞬间-倒地受身",
    "11 被壮汉强力冲击抱腿摔倒-锁颈舍身后倒起身制服"
  ],
  // 7. 枪械威胁应对：生死一线的抉择
  'civ-7': [
    "1 歹徒正面手枪指头(正面)",
    "2 手枪抵住后背/后脑",
    "3 歹徒持枪挟持人质（枪指侧面太阳穴）",
    "4 遭遇长枪/步枪正面指胸威胁",
    "5 在极近距离歹徒试图拔枪",
    "6 夺枪过程中双方激烈争夺",
    "7 歹徒持枪从侧面指头威胁",
    "8 被歹徒强迫跪下处决",
    "9 夺枪成功后对方试图反扑",
    "10 正面指头（极近距离-最快夺枪）"
  ],
    // 8. 家庭入侵：被堵在封闭空间如何绝地反击
  'civ-8': [
    "1 开门瞬间被歹徒遭遇前方掐颈",
    "2 遭遇背后熊抱且无后退空间",
    "3 歹徒全力抓腕拉扯",
    "4 在狭窄走廊与持刀歹徒遭遇",
    "5 面对刁钻角度的直拳进攻",
    "6 电梯内陌生人突然逼近企图施暴",
    "7 被按在沙发上掐脖子",
    "8 在楼道转角突然遭遇棍棒袭击",
    "9 歹徒抓住家人作为人质持械威胁",
    "10 狭窄走廊遭遇持刀歹徒堵截"
  ],
  // 9. 短棍防卫与菲律宾魔杖实战
  'civ-9': [
    "1 对方持木棍/铁管从上向下劈击",
    "2 遭遇持刀歹徒挥舞攻击-用棍防御击打持刀手",
    "3 面对持棍袭击歹徒-各种棍棒防御方式",
    "4 对方持棍横扫腰部+竖棍格挡",
    "5 被多名歹徒围攻+X型连续劈砍",
    "6 对方冲撞试图夺取武器+双手持棍猛力推击胸口",
    "7 对方持棍左右挥砍+近身格挡+大外刈",
    "8 持棍歹徒自上而下全力一击",
    "9 公园夜间发现嫌疑人-从背后控制歹徒（控制技）",
    "10 被人持械戳击腹部-闪身用身体做杠杆夺棍",
    "11 短兵对抗-持棍做防守反击技术！"
  ]

  // 其他主题如果需要自定义名称，请按上述格式添加 'ThemeID': [...]
};

// 💡 提示：在此处配置分集视频路径 (第 18 行开始)
// 键(Key)说明：
// 1. 如果在 CUSTOM_THEME_TITLES 中定义了，必须使用定义的全名。
// 2. 如果未定义，默认使用格式：序号 + 空格 + 主题简称 (例如: "1 校园铁盾")
// 值(Value)为视频的 URL 地址
const VIDEO_PLAYLIST_MAP: Record<string, string> = {
    // ================= CIVILIAN (民用主题 9个) =================
    
    // 1. 街头格斗终结者 (自定义标题)
    "1 争吵中对方突然伸手用力推搡胸部试图挑起斗殴": "https://yun.kmcn.vip/c3364607vodcq1304509294/5c2c1b035145403704245694159/b7vv19qaskUA.mp4",
    "2 对方双手死死揪住衣领并试图用头撞击": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "3 深夜大排档遭遇醉汉无预警挥舞王八拳进攻": "https://yun.kmcn.vip/c3364607vodcq1304509294/3d9fb6581253642699122330027/Qlo06N4r0EsA.mp4",
    "4 倒地后对方站立试图足球踢头部": "https://yun.kmcn.vip/c3364607vodcq1304509294/97149fff1253642699130657320/XMXh05QPlgEA.mp4",
    "5 被对方从侧面使用夹颈摔勒住脖子": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "6 被对方单手抓住手腕并试图强行拖拽": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "7 对方从背后突袭实施连臂熊抱": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "8 被对方逼入墙角双手掐脖窒息": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "9 被歹徒单手掐脖威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/2a1a28a41253642699132364850/3AuVza5iZksA.mp4",
    "10 对方试图使用抱腿摔": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "11 被人从侧面双手掐脖": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "12 面对持刀歹徒左右挥砍": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",

    // 2. 女子防身特辑 (自定义标题)
    "1 遭遇背部环抱+从后方被熊抱": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "2 头发被恶意抓扯": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "3 被按在墙上掐脖子": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "4 地面被骑乘压制掐脖": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "5 手腕被强力抓握/拉走": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "6 遭遇正面熊抱+正面熊抱": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "7 双手抓双腕压制": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "8 遭遇前方勒颈/头锁": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "9 遭遇背后勒颈": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "10 遭遇刀具威胁近距离": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "11 被从背后熊抱抱起-双脚离地": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "12 被侧面搂住脖颈": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",

    // 3. 校园铁盾 (自定义标题)
    "1 在走廊被霸凌者故意推搡挑衅": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "2 被同学从侧面使用夹颈摔勒住并嘲笑": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "3 被多人围堵在厕所或死角": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "4 书包带被强行拉扯试图拽倒": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "5 被按在地上羞辱或殴打": "https://yun.kmcn.vip/c3364607vodcq1304509294/3d9fb6581253642699122330027/Qlo06N4r0EsA.mp4",
    "6 被抓住衣领并抵在墙上威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "7 遭遇言语侮辱和推搡升级王八拳击打": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "8 被抓住手腕试图强制带走": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "9 对方试图使用裸绞勒颈": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "10 面对持棍棒/椅子的冲动攻击": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "11 后方被人贩子捂嘴拖拽": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "12 【防拐】被从背后熊抱抱起（双脚离地）": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    
    // 4. 电梯/车内/走廊：狭小空间自卫
    "1 【电梯】对方强势正面双手掐脖": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "2 小空间内敌人抓住自己的手腕试图控制": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "3 【电梯】角落被壁咚/搂抱强吻": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "4 狭小空间内被人从背后勒脖子": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "5 车内或走廊中遭遇持刀攻击者刺击": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "6 面对对方死死搂抱": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "7 持械歹徒左右挥砍": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "8 面对刁钻角度的直拳进攻": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "9 被人蓄力蹬踹-避开中线+拍档": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "10 电梯内陌生人突然逼近企图施暴": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",

    // 5. 刀锋之下：持刀抢劫与反恐生存
    "1 刀抵腹部索要钱财": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "2 疯狗模式：暴徒持砍刀冲入人群": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "3 被逼入死角无路可逃": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "4 对方持刀上挑/上捅": "https://yun.kmcn.vip/c3364607vodcq1304509294/27b139411253642699132251609/obxvMDcmHVIA.mp4",
    "5 深夜尾随：背后的割喉式锁颈威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "6 路怒升级：正面的凶狠推搡与突然拔刀直刺": "https://yun.kmcn.vip/c3364607vodcq1304509294/8654fe635145403704249236487/pMg2M2FeH2IA.mp4",
    "7 致命冰锥：高举过头的垂直如雨点般扎刺": "https://yun.kmcn.vip/c3364607vodcq1304509294/c69800be5145403704243851647/QwZjkIZ1ddYA.mp4",
    "8 绑架现场：从背后被刀抵住肾脏区并强行拖拽": "https://yun.kmcn.vip/c3364607vodcq1304509294/7fad04cd1253642699126952736/uvR0JOR8i3UA.mp4",
    "9 倒地绝境：被打倒在地，对方骑乘欲刺": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "10 歹徒正手持刀从上向下劈砍": "https://yun.kmcn.vip/c3364607vodcq1304509294/c69800be5145403704243851647/QwZjkIZ1ddYA.mp4",
    "11 远距离对峙：左右挥舞恐吓与逼近反手刀": "https://yun.kmcn.vip/c3364607vodcq1304509294/8058ff2c1253642699133758076/r57AW5n0ucIA.mp4",
    "12 歹徒持刀逼近": "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4",

    // 6. 地面修罗
    "1 被摔倒在地后迅速站起击退对方": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "2 在狭小空间倒地被骑乘压制": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "3 被击倒在地-对方站立准备实施足球踢": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "4 对方试图扑入你的两腿之间进行打击": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "5 被大体重对手骑乘位压制并殴打面部": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "6 被侧压控制无法动弹": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "7 【骑乘】对方掏出匕首抵住脖子": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "8 被背后裸绞即将拖入地面": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "9 在地面上被压制掐脖": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "10 【突袭】背后被猛推/绊倒瞬间-倒地受身": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "11 被壮汉强力冲击抱腿摔倒-锁颈舍身后倒起身制服": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",

    // 7. 枪械威胁应对
    "1 歹徒正面手枪指头(正面)": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "2 手枪抵住后背/后脑": "https://yun.kmcn.vip/c3364607vodcq1304509294/805659e51253642699133753605/Tb4VgyHDG24A.mp4",
    "3 歹徒持枪挟持人质（枪指侧面太阳穴）": "https://yun.kmcn.vip/c3364607vodcq1304509294/f5b2e9415145403704247632199/yaUZqraqCeUA.mp4",
    "4 遭遇长枪/步枪正面指胸威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "5 在极近距离歹徒试图拔枪": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "6 夺枪过程中双方激烈争夺": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "7 歹徒持枪从侧面指头威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "8 被歹徒强迫跪下处决": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "9 夺枪成功后对方试图反扑": "https://yun.kmcn.vip/c3364607vodcq1304509294/15ebd1cd5145403704244959859/nl2WMBWQ7HQA.mp4",
    "10 正面指头（极近距离-最快夺枪）": "https://yun.kmcn.vip/c3364607vodcq1304509294/0570178a5145403704244233011/7hwe5moDcu0A.mp4",

    // 8. 居家入侵与家庭保卫
    "1 开门瞬间被歹徒遭遇前方掐颈": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "2 遭遇背后熊抱且无后退空间": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "3 歹徒全力抓腕拉扯-": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "4 在狭窄走廊与持刀歹徒遭遇": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "5 面对刁钻角度的直拳进攻": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "6 电梯内陌生人突然逼近企图施暴": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "7 被按在沙发上掐脖子": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "8 在楼道转角突然遭遇棍棒袭击": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "9 歹徒抓住家人作为人质持械威胁": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "10 狭窄走廊遭遇持刀歹徒堵截": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",

    // 9. 短棍防卫与菲律宾魔杖实战
    "1 对方持木棍/铁管从上向下劈击": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "2 遭遇持刀歹徒挥舞攻击-用棍防御击打持刀手": "https://yun.kmcn.vip/c3364607vodcq1304509294/15a2411c5145403704244917308/xnTrz8SONlwA.mp4",
    "3 面对持棍袭击歹徒-各种棍棒防御方式": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "4 对方持棍横扫腰部+竖棍格挡": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "5 被多名歹徒围攻+X型连续劈砍": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "6 对方冲撞试图夺取武器+双手持棍猛力推击胸口": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "7 对方持棍左右挥砍+近身格挡+大外刈": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "8 持棍歹徒自上而下全力一击": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "9 公园夜间发现嫌疑人-从背后控制歹徒（控制技）": "https://yun.kmcn.vip/c3364607vodcq1304509294/c6754a6e1253642699134473578/iUsaoZMHqhMA.mp4",
    "10 被人持械戳击腹部-闪身用身体做杠杆夺棍": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "11 短兵对抗-持棍做防守反击技术！": "https://yun.kmcn.vip/c3364607vodcq1304509294/15a2411c5145403704244917308/xnTrz8SONlwA.mp4",

    // ================= MILITARY (军警主题 6个) =================
    
    // 10. FBI特工必修
    "1 FBI特工必修": TEMP_LINK,
    "2 FBI特工必修": TEMP_LINK,
    "3 FBI特工必修": TEMP_LINK,
    "4 FBI特工必修": TEMP_LINK,
    "5 FBI特工必修": TEMP_LINK,
    "6 FBI特工必修": TEMP_LINK,
    "7 FBI特工必修": TEMP_LINK,
    "8 FBI特工必修": TEMP_LINK,
    "9 FBI特工必修": TEMP_LINK,
    "10 FBI特工必修": TEMP_LINK,
    "11 FBI特工必修": TEMP_LINK,
    "12 FBI特工必修": TEMP_LINK,

    // 11. 海豹突击队战术
    "1 海豹突击队战术": TEMP_LINK,
    "2 海豹突击队战术": TEMP_LINK,
    "3 海豹突击队战术": TEMP_LINK,
    "4 海豹突击队战术": TEMP_LINK,
    "5 海豹突击队战术": TEMP_LINK,
    "6 海豹突击队战术": TEMP_LINK,
    "7 海豹突击队战术": TEMP_LINK,
    "8 海豹突击队战术": TEMP_LINK,
    "9 海豹突击队战术": TEMP_LINK,
    "10 海豹突击队战术": TEMP_LINK,
    "11 海豹突击队战术": TEMP_LINK,
    "12 海豹突击队战术": TEMP_LINK,

    // 12. 要员保护 (VIP Protection)
    "1 要员保护 (VIP Protection)": "https://yun.kmcn.vip/c3364607vodcq1304509294/61ab3db31253642699129716849/wyAEZp2NgKAA.mp4",
    "2 要员保护 (VIP Protection)": "https://yun.kmcn.vip/c3364607vodcq1304509294/9db5c4581253642699130900214/WwUYAOLaxGYA.mp4",
    "3 要员保护 (VIP Protection)": TEMP_LINK,
    "4 要员保护 (VIP Protection)": TEMP_LINK,
    "5 要员保护 (VIP Protection)": TEMP_LINK,
    "6 要员保护 (VIP Protection)": TEMP_LINK,
    "7 要员保护 (VIP Protection)": TEMP_LINK,
    "8 要员保护 (VIP Protection)": TEMP_LINK,
    "9 要员保护 (VIP Protection)": TEMP_LINK,
    "10 要员保护 (VIP Protection)": TEMP_LINK,
    "11 要员保护 (VIP Protection)": TEMP_LINK,
    "12 要员保护 (VIP Protection)": TEMP_LINK,

    // 13. 战术CQB与夺枪术
    "1 战术CQB与夺枪术": TEMP_LINK,
    "2 战术CQB与夺枪术": TEMP_LINK,
    "3 战术CQB与夺枪术": TEMP_LINK,
    "4 战术CQB与夺枪术": TEMP_LINK,
    "5 战术CQB与夺枪术": TEMP_LINK,
    "6 战术CQB与夺枪术": TEMP_LINK,
    "7 战术CQB与夺枪术": TEMP_LINK,
    "8 战术CQB与夺枪术": TEMP_LINK,
    "9 战术CQB与夺枪术": TEMP_LINK,
    "10 战术CQB与夺枪术": TEMP_LINK,
    "11 战术CQB与夺枪术": TEMP_LINK,
    "12 战术CQB与夺枪术": TEMP_LINK,

    // 14. 刀锋战士
    "1 刀锋战士": TEMP_LINK,
    "2 刀锋战士": TEMP_LINK,
    "3 刀锋战士": TEMP_LINK,
    "4 刀锋战士": TEMP_LINK,
    "5 刀锋战士": TEMP_LINK,
    "6 刀锋战士": TEMP_LINK,
    "7 刀锋战士": TEMP_LINK,
    "8 刀锋战士": TEMP_LINK,
    "9 刀锋战士": TEMP_LINK,
    "10 刀锋战士": TEMP_LINK,
    "11 刀锋战士": TEMP_LINK,
    "12 刀锋战士": TEMP_LINK,

    // 15. 万物皆兵
    "1 万物皆兵": TEMP_LINK,
    "2 万物皆兵": TEMP_LINK,
    "3 万物皆兵": TEMP_LINK,
    "4 万物皆兵": TEMP_LINK,
    "5 万物皆兵": TEMP_LINK,
    "6 万物皆兵": TEMP_LINK,
    "7 万物皆兵": TEMP_LINK,
    "8 万物皆兵": TEMP_LINK,
    "9 万物皆兵": TEMP_LINK,
    "10 万物皆兵": TEMP_LINK,
    "11 万物皆兵": TEMP_LINK,
    "12 万物皆兵": TEMP_LINK,


    // ================= INSTRUCTOR (教官主题 6个) =================
    
    // 16. 公共安全与反恐生存
    "1 公共安全与反恐生存": TEMP_LINK,
    "2 公共安全与反恐生存": TEMP_LINK,
    "3 公共安全与反恐生存": TEMP_LINK,
    "4 公共安全与反恐生存": TEMP_LINK,
    "5 公共安全与反恐生存": TEMP_LINK,
    "6 公共安全与反恐生存": TEMP_LINK,
    "7 公共安全与反恐生存": TEMP_LINK,
    "8 公共安全与反恐生存": TEMP_LINK,
    "9 公共安全与反恐生存": TEMP_LINK,
    "10 公共安全与反恐生存": TEMP_LINK,
    "11 公共安全与反恐生存": TEMP_LINK,
    "12 公共安全与反恐生存": TEMP_LINK,

    // 17. 执教风控与学员安全
    "1 执教风控与学员安全": TEMP_LINK,
    "2 执教风控与学员安全": TEMP_LINK,
    "3 执教风控与学员安全": TEMP_LINK,
    "4 执教风控与学员安全": TEMP_LINK,
    "5 执教风控与学员安全": TEMP_LINK,
    "6 执教风控与学员安全": TEMP_LINK,
    "7 执教风控与学员安全": TEMP_LINK,
    "8 执教风控与学员安全": TEMP_LINK,
    "9 执教风控与学员安全": TEMP_LINK,
    "10 执教风控与学员安全": TEMP_LINK,
    "11 执教风控与学员安全": TEMP_LINK,
    "12 执教风控与学员安全": TEMP_LINK,

    // 18. 教官必修格斗技能体系
    "1 教官必修格斗技能体系": TEMP_LINK,
    "2 教官必修格斗技能体系": TEMP_LINK,
    "3 教官必修格斗技能体系": TEMP_LINK,
    "4 教官必修格斗技能体系": TEMP_LINK,
    "5 教官必修格斗技能体系": TEMP_LINK,
    "6 教官必修格斗技能体系": TEMP_LINK,
    "7 教官必修格斗技能体系": TEMP_LINK,
    "8 教官必修格斗技能体系": TEMP_LINK,
    "9 教官必修格斗技能体系": TEMP_LINK,
    "10 教官必修格斗技能体系": TEMP_LINK,
    "11 教官必修格斗技能体系": TEMP_LINK,
    "12 教官必修格斗技能体系": TEMP_LINK,

    // 19. 身体素质与实战压力测试 (Stress Test)
    "1 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "2 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "3 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "4 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "5 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "6 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "7 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "8 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "9 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "10 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "11 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,
    "12 身体素质与实战压力测试 (Stress Test)": TEMP_LINK,

    // 20. 国际马伽术教学法与沟通艺术
    "1 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "2 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "3 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "4 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "5 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "6 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "7 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "8 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "9 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "10 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "11 国际马伽术教学法与沟通艺术": TEMP_LINK,
    "12 国际马伽术教学法与沟通艺术": TEMP_LINK,

    // 21. 法律红线与犯罪心理学
    "1 法律红线与犯罪心理学": TEMP_LINK,
    "2 法律红线与犯罪心理学": TEMP_LINK,
    "3 法律红线与犯罪心理学": TEMP_LINK,
    "4 法律红线与犯罪心理学": TEMP_LINK,
    "5 法律红线与犯罪心理学": TEMP_LINK,
    "6 法律红线与犯罪心理学": TEMP_LINK,
    "7 法律红线与犯罪心理学": TEMP_LINK,
    "8 法律红线与犯罪心理学": TEMP_LINK,
    "9 法律红线与犯罪心理学": TEMP_LINK,
    "10 法律红线与犯罪心理学": TEMP_LINK,
    "11 法律红线与犯罪心理学": TEMP_LINK,
    "12 法律红线与犯罪心理学": TEMP_LINK,
};

// 🔧 视频播放器初始背景图配置 (Video Poster Configuration)
// 可以在这里更换不同类别的初始封面图
const VIDEO_POSTER_MAP = {
  CIVILIAN: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop", // 民用：格斗训练
  MILITARY: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=1000&auto=format&fit=crop", // 军警：战术特勤
  INSTRUCTOR: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop" // 教官：教学指导
};

// 获取当前应该播放的视频
// 参数从 techniqueName 改为 videoKey (例如: "1 女子防身特辑")
const getVideoUrl = (themeCategory: string, videoKey: string | null) => {
    if (videoKey && VIDEO_PLAYLIST_MAP[videoKey]) {
        return VIDEO_PLAYLIST_MAP[videoKey];
    }
    // 如果没有找到特定分集视频，则使用该类别的默认主视频
    if (themeCategory === 'MILITARY') return MAIN_VIDEO_CONFIG.MILITARY;
    if (themeCategory === 'INSTRUCTOR') return MAIN_VIDEO_CONFIG.INSTRUCTOR;
    return MAIN_VIDEO_CONFIG.CIVILIAN;
};

// 辅助函数：截断文本
const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

// 辅助函数：获取视频键名（支持自定义标题）
const getVideoKeyName = (themeId: string, index: number, defaultShortTitle: string) => {
    const customList = CUSTOM_THEME_TITLES[themeId];
    if (customList && customList[index]) {
        return customList[index];
    }
    return `${index + 1} ${defaultShortTitle}`;
};

interface Props {
  theme: Theme;
  onClose: () => void;
  isMilitary: boolean;
}

const DetailView: React.FC<Props> = ({ theme, onClose, isMilitary }) => {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [adminPwd, setAdminPwd] = useState("");

  useEffect(() => {
    const unlockedThemes = JSON.parse(localStorage.getItem('kmcn_unlocked_themes') || '[]');
    if (unlockedThemes.includes(theme.id)) {
      setIsUnlocked(true);
    }
  }, [theme.id]);

  // 控制视频播放 (已禁用自动播放)
  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.load();
      }
  }, [selectedTechnique]);

  const handleUnlock = () => {
    const unlockedThemes = JSON.parse(localStorage.getItem('kmcn_unlocked_themes') || '[]');
    if (!unlockedThemes.includes(theme.id)) {
      unlockedThemes.push(theme.id);
      localStorage.setItem('kmcn_unlocked_themes', JSON.stringify(unlockedThemes));
    }
    setIsUnlocked(true);
  };

  const handleAdminLogin = () => {
    const lastChar = theme.id.slice(-1);
    const themeSpecificPwd = `KMCN${theme.id.toUpperCase()}${lastChar}`;
    const input = adminPwd.trim().toUpperCase();
    
    // Simple obfuscation for demo (KMCN888) - replaces plain text
    const isMasterValid = btoa(input) === "S01DTjg4OA==";
    
    if (isMasterValid || input === themeSpecificPwd) {
      handleUnlock();
      setShowAdminInput(false);
      alert(`权限验证成功：主题 [${theme.title}] 已为您解锁！`);
    } else {
      alert("密码错误。请联系管理员获取权限。");
    }
  };

  const handleSelectTechnique = (tech: Technique) => setSelectedTechnique(tech);

  // ----------------------------------------------------------------------------------
  //  🎨 Display Logic Helpers
  // ----------------------------------------------------------------------------------
  
  const getShortTitle = () => {
      return theme.title.split('：')[0].trim();
  };
  
  const getCurrentVideoKey = () => {
      if (!selectedTechnique) return null;
      const index = theme.techniques.findIndex(t => t.name === selectedTechnique.name);
      if (index === -1) return null;

      return getVideoKeyName(theme.id, index, getShortTitle());
  };

  const currentVideoUrl = getVideoUrl(theme.category, getCurrentVideoKey());
  
  const currentPlayingTitle = selectedTechnique 
      ? `${getCurrentVideoKey()} - ${selectedTechnique.name}`
      : "课程总览 (Course Overview)";

  // 获取当前主题对应的封面图
  // @ts-ignore
  const currentPoster = VIDEO_POSTER_MAP[theme.category] || VIDEO_POSTER_MAP.CIVILIAN;


  // ==========================================
  // 💰 Pricing Logic (Updated Requirement)
  // ==========================================
  const getPricingConfig = () => {
    let price = '0';
    let originalPrice = '0';
    let bundleInfo = '';
    let offlineInfo = '';
    let features = [
        `解锁本主题 ${theme.techniques.length} 节技术视频`,
        "AI 智能教案生成权限",
        "获得单项学习积分"
    ];

    if (theme.category === 'CIVILIAN') {
        if (theme.difficulty === 'BEGINNER') {
            price = '39.8';
            originalPrice = '68';
        } else if (theme.difficulty === 'INTERMEDIATE') {
            price = '69.8';
            originalPrice = '128';
        } else if (theme.difficulty === 'ADVANCED') {
            price = '99.8';
            originalPrice = '168';
        }
        bundleInfo = "自卫马伽术(Krav Maga)全系列在线课程 ¥298 (含考核+证书)";
        offlineInfo = "线下专属定制课：4节 ¥1980 / 6节 ¥2800 (含免费测试考核+证书)";
    } 
    else if (theme.category === 'MILITARY') {
        if (theme.difficulty === 'BEGINNER') {
             price = '188'; 
             originalPrice = '298';
        } else if (theme.difficulty === 'INTERMEDIATE') {
            price = '388';
            originalPrice = '588';
        } else if (theme.difficulty === 'ADVANCED') {
            price = '688';
            originalPrice = '988';
        } else {
             price = '388'; originalPrice = '588';
        }
        bundleInfo = "军警特勤(Military CQC)全系列在线课程 ¥1280 (含考核+证书)";
        offlineInfo = "线下专属定制课：4节 ¥2680 / 6节 ¥3980 (含免费测试考核+证书)";
    }
    else if (theme.category === 'INSTRUCTOR') {
         if (theme.difficulty === 'BEGINNER') {
            price = '100';
            originalPrice = '198';
         } else if (theme.difficulty === 'INTERMEDIATE') {
            price = '300';
            originalPrice = '498';
         } else if (theme.difficulty === 'ADVANCED') {
            price = '2680';
            originalPrice = '3980';
            features.push("赠送：自卫马伽术全套在线课程");
         } else {
            price = '300'; originalPrice = '498';
         }
         bundleInfo = "28800元 马伽术教官认证课程包含完整的教学技术体系+认证考核与教官必备的教学法";
         offlineInfo = "马伽术教官线下集训营请联系客服咨询排期";
    }

    return {
        title: theme.title,
        price,
        originalPrice,
        bundleInfo,
        offlineInfo,
        features
    };
  };

  const pricing = getPricingConfig();

  const renderPricing = () => (
    <div className="flex flex-col gap-4">
       <div className="flex justify-between items-end border-b border-white/10 pb-4">
           <div className="flex-1">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                   Single Theme Access
               </p>
               <h3 className="text-sm font-bold text-white leading-tight">
                   解锁：{theme.difficulty}课程
               </h3>
               <p className="text-[10px] text-gray-500 mt-0.5">永久观看权限</p>
           </div>
           <div className="text-right shrink-0 ml-4">
               <p className="text-xs text-gray-500 line-through font-mono mb-0.5">¥{pricing.originalPrice}</p>
               <div className="flex items-baseline gap-0.5 text-km-red">
                   <span className="text-sm font-bold">¥</span>
                   <span className="text-4xl font-black tracking-tighter leading-none">{pricing.price}</span>
               </div>
           </div>
       </div>
       
       {pricing.bundleInfo && (
           <div className="bg-gradient-to-r from-km-red/20 to-transparent border-l-2 border-km-red p-2.5 rounded-r">
               <div className="flex items-center gap-2 mb-1">
                   <ShoppingBag className="w-3.5 h-3.5 text-km-red" />
                   <span className="text-xs font-black text-white uppercase tracking-wider">超值打包 (Bundle)</span>
               </div>
               <p className="text-xs text-gray-200 font-medium leading-relaxed">
                   {pricing.bundleInfo}
               </p>
           </div>
       )}

       <div className="space-y-2 py-1">
           {pricing.features.map((feat, i) => (
               <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                   <CheckCircle className="w-3.5 h-3.5 text-green-500/80" />
                   <span className="font-medium">{feat}</span>
               </div>
           ))}
       </div>
       
       <button 
         onClick={() => alert("请扫描下方二维码进行支付，或联系客服开通。")}
         className="w-full mt-2 py-3.5 bg-white text-black hover:bg-gray-200 rounded-lg font-black text-sm uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group transform active:scale-[0.98]"
        >
           <Lock className="w-4 h-4 text-gray-500 group-hover:text-black transition-colors" />
           <span>立即开通此主题</span>
       </button>
    </div>
  );

  const renderContent = () => (
    <div className="flex flex-col h-full bg-[#0F0F0F] text-gray-300 overflow-y-auto custom-scrollbar">
      
      {/* === 1. TOP HEADER: TITLE & DESCRIPTION === */}
      <div className="shrink-0 px-6 pt-10 pb-6 lg:px-16 w-full relative z-20">
         <div className="max-w-5xl mx-auto text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className={`px-3 py-1 rounded text-[10px] font-bold text-white tracking-widest uppercase shadow-md ${isMilitary ? 'bg-km-darkred' : 'bg-km-red'}`}>
                    {theme.category} Application
                </span>
                <span className="px-3 py-1 rounded text-[10px] font-bold border border-white/20 text-gray-300 uppercase bg-white/5 tracking-widest">
                    Level: {theme.difficulty}
                </span>
             </div>
             
             <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-lg mb-4">
                {theme.title}
             </h1>
             
             <p className="text-base text-gray-400 leading-relaxed font-medium max-w-3xl mx-auto lg:mx-0">
                {theme.description}
             </p>
         </div>
      </div>

      {/* === 2. TACTICAL PRINCIPLES (NEW 2x2 GRID) === */}
      <div className="w-full px-4 lg:px-12 mb-8">
          <div className="max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row items-start md:items-end gap-2 mb-6 border-b-2 border-km-red pb-3">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-km-red rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                        <BrainCircuit className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                            战术原则与心法
                        </h3>
                        <p className="text-xs font-bold text-km-red uppercase tracking-[0.2em] mt-1">
                            Tactical Principles & Mindset
                        </p>
                    </div>
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {theme.principles.map((p, i) => (
                     <div key={i} className="relative bg-neutral-900/60 border-l-4 border-km-red rounded-r-lg p-4 overflow-hidden group hover:bg-neutral-900 transition-colors">
                         <span className="absolute -right-2 -top-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                             {`0${i+1}`}
                         </span>
                         <div className="relative z-10 flex flex-col h-full justify-center min-h-[50px]">
                             <div className="w-8 h-0.5 bg-km-red/50 mb-1.5 group-hover:w-12 transition-all duration-500"></div>
                             <p className="text-base font-bold text-gray-100 leading-tight shadow-black drop-shadow-sm group-hover:text-white">
                                 {p}
                             </p>
                         </div>
                     </div>
                 ))}
             </div>
          </div>
      </div>

      {/* === 3. COMPACT VIDEO PLAYER === */}
      <div className="w-full px-4 mb-10">
          <div className="max-w-5xl mx-auto bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row h-auto md:h-[450px]">
              
              <div className="flex-1 relative bg-black flex items-center justify-center border-r border-white/10 group aspect-video md:aspect-auto">
                  <video 
                      key={currentVideoUrl}
                      ref={videoRef}
                      controls
                      controlsList="nodownload"
                      className="w-full h-full object-contain"
                      poster={currentPoster}
                  >
                      <source src={currentVideoUrl} type="video/mp4" />
                  </video>
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/90 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Now Playing</span>
                     </div>
                     <h3 className="text-sm font-bold text-white shadow-black drop-shadow-md truncate">
                        {currentPlayingTitle}
                     </h3>
                  </div>
              </div>

              <div className="w-full md:w-64 bg-neutral-900/95 flex flex-col border-t md:border-t-0 z-10 h-64 md:h-full">
                  <div className="p-3 border-b border-white/10 bg-white/5 flex items-center justify-between shrink-0">
                      <h3 className="text-sm font-bold text-gray-200 flex items-center uppercase tracking-widest">
                          <List className="w-4 h-4 mr-1.5 text-km-red" /> 训练课表
                      </h3>
                      <span className="text-[9px] text-gray-500 font-mono bg-black/40 px-1.5 py-0.5 rounded">
                          {theme.techniques.length + 1} CLIPS
                      </span>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                       <button
                           onClick={() => setSelectedTechnique(null)}
                           className={`w-full text-left py-2 px-3 border-b border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors
                              ${selectedTechnique === null ? 'bg-white/10 border-l-4 border-l-km-red' : 'border-l-4 border-l-transparent'}`}
                       >
                           <Activity className={`w-4 h-4 shrink-0 ${selectedTechnique === null ? 'text-km-red' : 'text-gray-600'}`} />
                           <div className={`text-xs font-bold truncate ${selectedTechnique === null ? 'text-white' : 'text-gray-400'}`}>
                               课程总览 (Overview)
                           </div>
                       </button>

                       {theme.techniques.map((t, i) => {
                           const isActive = selectedTechnique?.name === t.name;
                           // Use helper to get the title, then truncate for display
                           const fullTitle = getVideoKeyName(theme.id, i, getShortTitle());
                           const displayName = truncateText(fullTitle, 38);

                           return (
                               <button
                                   key={i}
                                   onClick={() => handleSelectTechnique(t)}
                                   className={`w-full text-left py-2 px-3 border-b border-white/5 flex items-center gap-3 hover:bg-white/5 transition-colors
                                      ${isActive ? 'bg-white/10 border-l-4 border-l-km-red' : 'border-l-4 border-l-transparent'}`}
                               >
                                   <span className={`text-[10px] font-mono w-4 text-center ${isActive ? 'text-white' : 'text-gray-600'}`}>
                                       {String(i + 1).padStart(2, '0')}
                                   </span>
                                   <div className={`text-xs font-bold truncate flex-1 ${isActive ? 'text-white' : 'text-gray-400'}`} title={fullTitle}>
                                       {displayName}
                                   </div>
                                   {isActive && <div className="w-1.5 h-1.5 rounded-full bg-km-red shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>}
                               </button>
                           );
                       })}
                  </div>
              </div>
          </div>
      </div>

      {/* === EXPERT ADVICE BANNER === */}
      <div className="max-w-5xl mx-auto px-4 mb-10 w-full">
          <div className="relative bg-gradient-to-br from-neutral-900 to-black border border-blue-500/30 rounded-xl p-6 md:p-8 overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                  <User className="w-32 h-32 text-blue-500" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                  <div className="shrink-0 p-3 bg-blue-900/20 border border-blue-500/30 rounded-full">
                      <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                      <h4 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                          马伽术专家建议 <span className="text-blue-500 text-sm uppercase tracking-wider font-bold">Expert Advice</span>
                      </h4>
                      
                      <div className="space-y-3 text-sm text-gray-400 font-medium leading-relaxed">
                          <p>
                              <span className="text-gray-200">线上课程侧重意识与流程，但格斗核心在于肌肉记忆与对抗本能。</span>
                              <br />
                              <span className="text-xs italic opacity-80">Online learning focuses on mindset and flow, but the core of fighting lies in muscle memory and instinctive reaction.</span>
                          </p>
                          <p>
                              <span className="text-gray-200">强烈建议参加线下集训 (Intensive Training)，获取更真实的压力测试与纠错。</span>
                              <br />
                              <span className="text-xs italic opacity-80">We strongly recommend attending offline intensive training for real stress testing and correction.</span>
                          </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-500">
                              <Gift className="w-4 h-4" />
                              <span>线下课学员享专属折扣 (Exclusive Discount)</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-amber-500">
                              <CheckCircle className="w-4 h-4" />
                              <span>赠送全套线上复习资料 (Free Online Access)</span>
                          </div>
                      </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:self-center shrink-0">
                       <button 
                         onClick={() => alert("请联系客服咨询线下集训排期：13424247185")}
                         className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all transform hover:scale-105 flex items-center gap-2"
                       >
                           预约集训 <ArrowRight className="w-4 h-4" />
                       </button>
                  </div>
              </div>
          </div>
      </div>

      {/* === CERTIFICATION BANNER === */}
      <div className="max-w-4xl mx-auto px-4 mb-10 w-full">
          <div className="bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-transparent border-l-4 border-amber-500 rounded-r-lg p-4 flex flex-col sm:flex-row items-center gap-4 shadow-lg group hover:bg-amber-900/20 transition-colors">
             <div className="p-2 bg-amber-500/20 rounded-full shrink-0 animate-pulse">
                <Award className="w-5 h-5 text-amber-500" />
             </div>
             <div className="text-xs text-amber-200/90 font-medium text-center sm:text-left flex-1">
                 <div className="text-sm font-bold text-amber-100 mb-0.5">认证提示 (Certification)</div>
                 完成本主题所有技术打卡并通过视频考核，可获得 <span className="text-white underline decoration-amber-500/50 underline-offset-2 font-bold">电子证书</span> 及 <span className="inline-block bg-amber-500/20 px-1.5 rounded border border-amber-500/30 text-[10px] font-bold text-amber-100 ml-1">15 积分</span>。
             </div>
             <button className="px-4 py-1.5 rounded bg-amber-600/20 border border-amber-500/50 text-amber-400 text-xs font-bold hover:bg-amber-600 hover:text-white transition-colors uppercase tracking-wider">
                 申请考核
             </button>
          </div>
      </div>

      {/* === 4. THREAT & RESPONSE (UPDATED TABLE FORMAT) === */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
           <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
               <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-km-red" />
               <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
                   实战场景与应对策略 <span className="text-gray-600 ml-1 text-base md:text-lg">THREAT & RESPONSE</span>
               </h3>
           </div>
           
           <div className="overflow-x-auto rounded-lg border border-white/10 shadow-xl bg-neutral-900">
               <table className="w-full text-left border-collapse">
                   <thead>
                       <tr className="bg-neutral-950 text-gray-400 border-b border-white/10">
                           <th className="p-4 text-[10px] font-black uppercase tracking-widest w-12 text-center">#</th>
                           <th className="p-4 text-[10px] font-black uppercase tracking-widest text-km-red w-5/12">🚨 高危实战场景 (Real-world Threat)</th>
                           <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-400">⚔️ 战术与技术方案 (Tactical Solution)</th>
                       </tr>
                   </thead>
                   <tbody className="divide-y divide-white/5">
                       {theme.scenarios.map((s, i) => (
                           <tr key={i} className="group hover:bg-white/5 transition-colors">
                               <td className="p-4 text-xs font-mono text-gray-600 text-center font-bold">
                                   {String(i + 1).padStart(2, '0')}
                               </td>
                               <td className="p-4 align-top">
                                   <div className="text-sm font-bold text-white group-hover:text-red-100 transition-colors leading-relaxed">
                                       {s.danger}
                                   </div>
                               </td>
                               <td className="p-4 align-top">
                                   <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                       {s.response.split(/( [+|] )/).map((part, index) => {
                                          if (part.trim() === '+' || part.trim() === '|') {
                                              return <span key={index} className="text-blue-500/50 font-black mx-1">|</span>;
                                          }
                                          return <span key={index}>{part}</span>;
                                       })}
                                   </div>
                               </td>
                           </tr>
                       ))}
                   </tbody>
               </table>
           </div>
      </div>

      {/* === 5. AI LESSON & SYLLABUS === */}
      <div className="max-w-6xl mx-auto w-full px-4 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              
              {/* LEFT COLUMN: AI LESSON PLAN (60%) */}
              <div className="lg:col-span-3 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2">
                      <div className="flex items-center gap-2 text-lg md:text-xl font-black text-white uppercase tracking-widest">
                           <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
                           <span>AI专家教案库：技术详解与训练案 (Instant Load)</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                          <span className="text-[9px] text-blue-400 font-bold uppercase">Online</span>
                      </div>
                  </div>

                  <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                       {selectedTechnique ? (
                          <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative overflow-hidden min-h-[450px]">
                              {/* Background Pattern */}
                              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                  <BrainCircuit className="w-32 h-32 text-white" />
                              </div>

                              {/* Header */}
                              <div className="mb-8 relative z-10 border-b border-white/5 pb-6">
                                  <h2 className="text-2xl font-black text-white mb-2 tracking-tight">{selectedTechnique.name}</h2>
                                  <div className="inline-flex items-center px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-300">
                                      <Info className="w-3.5 h-3.5 mr-2 text-blue-400" />
                                      {selectedTechnique.details}
                                  </div>
                              </div>

                              {/* Content Grid */}
                              <div className="space-y-6 relative z-10">
                                  {/* Setup Block */}
                                  <div className="p-5 bg-black/40 rounded-lg border-l-4 border-gray-600">
                                      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center">
                                          <Target className="w-3.5 h-3.5 mr-2" /> 训练准备 (Setup & Gear)
                                      </h4>
                                      <p className="text-sm text-gray-200 leading-relaxed font-mono text-justify">{selectedTechnique.drill.setup}</p>
                                  </div>
                                  
                                  {/* Checkpoints Block */}
                                  <div className="p-5 bg-red-950/20 rounded-lg border-l-4 border-red-500">
                                      <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center">
                                          <ShieldAlert className="w-3.5 h-3.5 mr-2" /> 关键纠错 (Critical Checkpoints)
                                      </h4>
                                      <p className="text-sm text-gray-200 whitespace-pre-line leading-relaxed font-medium">{selectedTechnique.drill.critical_checkpoints}</p>
                                  </div>

                                  {/* Phases */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                      <div className="bg-blue-950/10 p-4 rounded border-t-2 border-blue-500">
                                          <h4 className="text-xs font-black text-blue-400 mb-3 uppercase tracking-wider">Phase 1: Technical</h4>
                                          <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-line">{selectedTechnique.drill.phase1_technical}</p>
                                      </div>
                                      <div className="bg-amber-950/10 p-4 rounded border-t-2 border-amber-500">
                                          <h4 className="text-xs font-black text-amber-500 mb-3 uppercase tracking-wider">Phase 2: Stress Drill</h4>
                                          <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-line">{selectedTechnique.drill.phase2_stress}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                       ) : (
                          <div className="bg-neutral-900/40 rounded-xl border-2 border-dashed border-neutral-800 p-12 text-center flex flex-col items-center justify-center min-h-[450px] group hover:border-neutral-700 transition-colors">
                              <div className="p-4 bg-neutral-800 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                  <MousePointer2 className="w-8 h-8 text-gray-500" />
                              </div>
                              <h3 className="text-base font-bold text-white mb-2">等待指令...</h3>
                              <p className="text-gray-500 text-sm max-w-xs mx-auto">请点击右侧技术列表，AI 教官将为您即时生成该技术的专属训练方案。</p>
                          </div>
                       )}
                  </div>
              </div>

              {/* RIGHT COLUMN: SYLLABUS INDEX (40%) */}
              <div className="lg:col-span-2 h-full">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2 text-lg md:text-xl font-black text-white uppercase tracking-widest">
                          <List className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                          <span>课程技术索引</span>
                      </div>
                  </div>
                  
                  <div className="space-y-1">
                      {theme.techniques.map((t, i) => {
                          const isActive = selectedTechnique?.name === t.name;
                          // Use helper to get the title, then truncate for display
                          const fullTitle = getVideoKeyName(theme.id, i, getShortTitle());
                          const displayName = truncateText(fullTitle, 38);

                          return (
                              <button 
                                  key={i}
                                  onClick={() => setSelectedTechnique(t)}
                                  className={`w-full text-left py-2 px-3 rounded-lg text-sm font-bold transition-all flex items-center justify-between group border
                                    ${isActive 
                                        ? 'bg-neutral-800 text-white shadow-lg border-l-4 border-l-km-red border-y-transparent border-r-transparent' 
                                        : 'bg-transparent text-gray-500 border-transparent hover:bg-neutral-900 hover:text-gray-300'
                                    }`}
                              >
                                  <div className="flex items-center gap-4 overflow-hidden">
                                      <span className={`font-mono text-xs w-6 h-6 flex items-center justify-center rounded shrink-0 ${isActive ? 'bg-km-red text-white' : 'bg-neutral-800 text-gray-600 group-hover:bg-neutral-700'}`}>
                                          {String(i+1).padStart(2,'0')}
                                      </span>
                                      
                                      <div className="flex flex-col overflow-hidden text-left">
                                           <span className={`truncate text-sm font-bold ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{t.name}</span>
                                           <span className={`truncate text-[10px] ${isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-500'}`} title={fullTitle}>{displayName}</span>
                                      </div>
                                  </div>
                                  <div className={`transition-transform duration-300 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'}`}>
                                      <ChevronRight className="w-4 h-4" />
                                  </div>
                              </button>
                          );
                      })}
                  </div>
              </div>

          </div>
      </div>

    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full h-full md:w-[95vw] md:h-[95vh] max-w-[1400px] md:rounded-2xl shadow-2xl overflow-hidden bg-neutral-950 text-gray-200 border border-neutral-800 animate-in fade-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-[100] p-2 rounded-full bg-black/60 hover:bg-km-red text-white border border-white/20 transition-all duration-300 group hover:rotate-90"
        >
          <X className="w-6 h-6" />
        </button>

        {/* --- MAIN CONTENT SWITCHER --- */}
        <div className={`w-full h-full flex flex-col transition-all duration-500 ${isUnlocked ? '' : 'filter blur-[12px] brightness-[0.3] pointer-events-none select-none'}`}>
           {renderContent()}
        </div>

        {/* --- LOCKED OVERLAY (SALES PAGE) --- */}
        {!isUnlocked && (
          <div className="absolute inset-0 z-40 overflow-y-auto custom-scrollbar flex flex-col items-center justify-start md:justify-center p-0 md:p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-5xl bg-neutral-900 md:rounded-2xl border-y md:border border-neutral-700 shadow-[0_0_80px_rgba(220,38,38,0.2)] overflow-hidden flex flex-col md:flex-row relative shrink-0 min-h-screen md:min-h-0 md:h-auto animate-in slide-in-from-bottom-10 fade-in duration-500">
              
              {/* Sales Left Col */}
              <div className="w-full md:w-3/5 bg-gradient-to-br from-black to-neutral-900 relative p-8 md:p-10 flex flex-col md:h-full md:overflow-y-auto h-auto custom-scrollbar">
                
                <div className="mb-6">
                   <div className="flex items-center gap-2 mb-3">
                       <span className="px-2 py-0.5 rounded text-[10px] bg-km-red text-white font-bold uppercase tracking-wider">
                           {theme.category} Application
                       </span>
                       <span className="px-2 py-0.5 rounded text-[10px] bg-neutral-800 border border-white/10 text-gray-400 font-bold uppercase tracking-wider">
                           Level: {theme.difficulty}
                       </span>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight tracking-tight">
                     {theme.title}
                   </h2>
                </div>

                <div className="aspect-video w-full relative group rounded-xl overflow-hidden border border-neutral-800 shadow-2xl mb-6 flex-shrink-0 bg-black">
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg flex items-center animate-pulse">
                           <Lock className="w-3 h-3 mr-1" /> Preview Mode
                        </span>
                    </div>
                    <video 
                        controls
                        controlsList="nodownload"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        poster={currentPoster}
                    >
                        <source src={MAIN_VIDEO_CONFIG.CIVILIAN} type="video/mp4" />
                    </video>
                </div>

                <div className="space-y-4 mb-8">
                    {theme.hooks.map((hook, index) => (
                        <div key={index} className="flex items-start bg-white/5 p-3 rounded-lg border border-white/5">
                           {index === 2 ? (
                               <Flame className="w-5 h-5 text-km-red mr-3 shrink-0 mt-0.5 fill-km-red/20" />
                           ) : (
                               <CheckCircle className="w-5 h-5 text-gray-500 mr-3 shrink-0 mt-0.5" />
                           )}
                           <p className={`text-sm leading-relaxed ${index === 2 ? 'text-white font-bold' : 'text-gray-300'}`}>
                             {hook}
                           </p>
                        </div>
                    ))}
                </div>

                <div className="mt-auto bg-blue-900/10 border border-blue-500/20 rounded-lg p-4">
                   <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-blue-200">马伽术专家建议 (Expert Advice)</span>
                   </div>
                   <p className="text-xs text-gray-400 leading-relaxed text-justify">
                      虽然线上课程打破了地域限制，让您能随时随地学习正宗马伽术的意识与技术流程，但<strong>格斗的核心在于身体对抗与肌肉记忆</strong>。为了真正掌握精髓，我们强烈建议您参加线下集训。
                      <br/><br/>
                      <span className="text-blue-300 font-medium">线下课程包含：线上全套视频 + 面对面纠错 + 免费考核认证。</span>
                   </p>
                </div>

              </div>

              {/* Sales Right Col */}
              <div className="w-full md:w-2/5 bg-neutral-800 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-neutral-700 relative overflow-hidden">
                 
                 {/* Offline Training Bonus Box */}
                 <div className="bg-gradient-to-r from-neutral-900 to-black p-4 rounded-xl border border-white/10 mb-6 relative group cursor-default shadow-lg">
                    <div className="absolute inset-0 bg-km-red/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    <div className="flex items-center gap-2 mb-2 relative z-10">
                       <Gift className="w-4 h-4 text-km-red" />
                       <span className="text-xs font-bold text-white uppercase tracking-wider">线下集训权益 (Offline Bonus)</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed relative z-10 font-medium">
                       {pricing.offlineInfo}
                    </p>
                 </div>

                 <div className="space-y-6">
                    <div className="bg-neutral-900/80 rounded-xl p-5 border border-white/5 shadow-inner">
                        {renderPricing()}
                    </div>

                    <div className="flex flex-col items-center justify-center p-2">
                       <div className="bg-white p-3 rounded-lg shadow-xl mb-4 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <img 
                              src="./payment_qrcode.png" 
                              alt="QR Code" 
                              className="w-36 h-36 object-contain"
                              onError={(e) => e.currentTarget.src = "https://placehold.co/200x200?text=Scan+To+Pay"}
                          />
                       </div>
                       <p className="text-xs text-gray-400 font-bold tracking-wide uppercase">微信扫码支付 · 极速开通</p>
                       <p className="text-xs text-km-red font-bold mt-1">支付后请联系: 13424247185</p>
                    </div>
                 </div>

                 <div className="mt-6 pt-6 border-t border-white/5">
                    <div className="flex flex-col items-center">
                        {!showAdminInput ? (
                          <button 
                            onClick={() => setShowAdminInput(true)}
                            className="text-[10px] text-gray-600 hover:text-white flex items-center transition-colors mt-2"
                          >
                            <Key className="w-3 h-3 mr-1" /> 管理员手动开通
                          </button>
                        ) : (
                          <div className="w-full bg-black/40 p-3 rounded border border-white/10 animate-in fade-in slide-in-from-bottom-2 mt-2">
                             <div className="flex gap-2">
                               <input 
                                 type="password" 
                                 placeholder="Enter Password"
                                 className="bg-neutral-900 border border-neutral-700 rounded px-3 py-1.5 text-xs text-white flex-1 focus:border-km-red outline-none transition-colors"
                                 value={adminPwd}
                                 onChange={(e) => setAdminPwd(e.target.value)}
                               />
                               <button 
                                 onClick={handleAdminLogin}
                                 className="bg-km-red hover:bg-red-600 text-white px-4 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-colors shadow-lg"
                               >
                                 UNLOCK
                               </button>
                             </div>
                          </div>
                        )}
                    </div>
                 </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DetailView;