
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
const TEMP_LINK = "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4";

// 💡 提示：在此处配置分集视频路径 (第 18 行开始)
// 键(Key)格式：主题简称 + 空格 + 序号 (例如: "女子防身特辑 1")
// 值(Value)为视频的 URL 地址
const VIDEO_PLAYLIST_MAP: Record<string, string> = {
    // ================= CIVILIAN (民用主题 9个) =================
    
    // 1. 街头格斗终结者
    "街头格斗终结者 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/5c2c1b035145403704245694159/b7vv19qaskUA.mp4",
    "街头格斗终结者 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "街头格斗终结者 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/3d9fb6581253642699122330027/Qlo06N4r0EsA.mp4",
    "街头格斗终结者 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/97149fff1253642699130657320/XMXh05QPlgEA.mp4",
    "街头格斗终结者 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "街头格斗终结者 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "街头格斗终结者 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "街头格斗终结者 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "街头格斗终结者 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/2a1a28a41253642699132364850/3AuVza5iZksA.mp4",
    "街头格斗终结者 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "街头格斗终结者 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "街头格斗终结者 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",

    // 2. 女子防身特辑
    "遭遇背部环抱+从后方被熊抱 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "头发被恶意抓扯 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "被按在墙上掐脖子 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "地面被骑乘压制掐脖 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "手腕被强力抓握/拉走 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "遭遇正面熊抱+正面熊抱 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "双手抓双腕压制 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "遭遇前方勒颈/头锁 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "遭遇背后勒颈 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "遭遇刀具威胁近距离 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "被从背后熊抱抱起-双脚离地 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "被侧面搂住脖颈 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",

    // 3. 校园铁盾
    "在走廊被霸凌者故意推搡挑衅 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "被同学从侧面使用夹颈摔勒住并嘲笑 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "被多人围堵在厕所或死角 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "书包带被强行拉扯试图拽倒 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "被按在地上羞辱或殴打 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/3d9fb6581253642699122330027/Qlo06N4r0EsA.mp4",
    "被抓住衣领并抵在墙上威胁 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "遭遇言语侮辱和推搡升级王八拳击打 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "被抓住手腕试图强制带走 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "对方试图使用裸绞勒颈 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "面对持棍棒/椅子的冲动攻击 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "后方被人贩子捂嘴拖拽 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "【防拐】被从背后熊抱抱起（双脚离地） 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    
    // 4. 狭小空间自卫
    "电梯内陌生人突然逼近企图施暴 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "狭小空间自卫 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",
    "狭小空间自卫 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/9714a8e61253642699130657552/jTtLqMeaThUA.mp4",

    // 5. 刀锋之下
    "刀抵腹部索要钱财 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "疯狗模式：暴徒持砍刀冲入人群 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "被逼入死角无路可逃 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "对方持刀上挑/上捅 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/27b139411253642699132251609/obxvMDcmHVIA.mp4",
    "深夜尾随：背后的割喉式锁颈威胁 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda21165145403704244649111/9QBTM61V8a4A.mp4",
    "路怒升级：正面的凶狠推搡与突然拔刀直刺 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/8654fe635145403704249236487/pMg2M2FeH2IA.mp4",
    "致命冰锥：高举过头的垂直如雨点般扎刺 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/c69800be5145403704243851647/QwZjkIZ1ddYA.mp4",
    "绑架现场：从背后被刀抵住肾脏区并强行拖拽 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/7fad04cd1253642699126952736/uvR0JOR8i3UA.mp4",
    "倒地绝境：被打倒在地，对方骑乘欲刺 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "歹徒正手持刀从上向下劈砍 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/c69800be5145403704243851647/QwZjkIZ1ddYA.mp4",
    "远距离对峙：左右挥舞恐吓与逼近反手刀 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/8058ff2c1253642699133758076/r57AW5n0ucIA.mp4",
    "歹徒持刀逼近 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4",

    // 6. 地面修罗
    "地面修罗 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "地面修罗 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",

    // 7. 枪械威胁应对
    "枪械威胁应对 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/805659e51253642699133753605/Tb4VgyHDG24A.mp4",
    "枪械威胁应对 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/f5b2e9415145403704247632199/yaUZqraqCeUA.mp4",
    "枪械威胁应对 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/e7d8cfd65145403704247053830/RpDMYlkEFAkA.mp4",
    "枪械威胁应对 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/15ebd1cd5145403704244959859/nl2WMBWQ7HQA.mp4",
    "枪械威胁应对 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/0570178a5145403704244233011/7hwe5moDcu0A.mp4",
    "枪械威胁应对 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/15ebd1cd5145403704244959859/nl2WMBWQ7HQA.mp4",
    "枪械威胁应对 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/0570178a5145403704244233011/7hwe5moDcu0A.mp4",

    // 8. 居家入侵与家庭保卫
    "居家入侵与家庭保卫 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/64cb11a61253642699136632085/avGdXzsRTy0A.mp4",
    "居家入侵与家庭保卫 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/946471011253642699130506365/74Q92jRgpNkA.mp4",
    "居家入侵与家庭保卫 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/b3dc89275145403704243041003/PqGGTP47ARcA.mp4",
    "居家入侵与家庭保卫 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/093d7b8d1253642699128246783/Ql4pbYL1LScA.mp4",
    "居家入侵与家庭保卫 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/131745e51253642699135427713/SyuCZaQ0ohkA.mp4",
    "居家入侵与家庭保卫 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",
    "居家入侵与家庭保卫 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/0b8fe1a51253642699128341653/cnnKKy7FmaAA.mp4",

    // 9. 短棍防卫与菲律宾魔杖实战
    "短棍防卫与菲律宾魔杖实战 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/15a2411c5145403704244917308/xnTrz8SONlwA.mp4",
    "短棍防卫与菲律宾魔杖实战 3": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 4": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 5": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 6": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 7": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 8": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 9": "https://yun.kmcn.vip/c3364607vodcq1304509294/c6754a6e1253642699134473578/iUsaoZMHqhMA.mp4",
    "短棍防卫与菲律宾魔杖实战 10": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",
    "短棍防卫与菲律宾魔杖实战 11": "https://yun.kmcn.vip/c3364607vodcq1304509294/15a2411c5145403704244917308/xnTrz8SONlwA.mp4",
    "短棍防卫与菲律宾魔杖实战 12": "https://yun.kmcn.vip/c3364607vodcq1304509294/0eda3b855145403704244649783/mmlR1WHJpmgA.mp4",


    // ================= MILITARY (军警主题 6个) =================
    
    // 10. FBI特工必修
    "FBI特工必修 1": TEMP_LINK,
    "FBI特工必修 2": TEMP_LINK,
    "FBI特工必修 3": TEMP_LINK,
    "FBI特工必修 4": TEMP_LINK,
    "FBI特工必修 5": TEMP_LINK,
    "FBI特工必修 6": TEMP_LINK,
    "FBI特工必修 7": TEMP_LINK,
    "FBI特工必修 8": TEMP_LINK,
    "FBI特工必修 9": TEMP_LINK,
    "FBI特工必修 10": TEMP_LINK,
    "FBI特工必修 11": TEMP_LINK,
    "FBI特工必修 12": TEMP_LINK,

    // 11. 海豹突击队战术
    "海豹突击队战术 1": TEMP_LINK,
    "海豹突击队战术 2": TEMP_LINK,
    "海豹突击队战术 3": TEMP_LINK,
    "海豹突击队战术 4": TEMP_LINK,
    "海豹突击队战术 5": TEMP_LINK,
    "海豹突击队战术 6": TEMP_LINK,
    "海豹突击队战术 7": TEMP_LINK,
    "海豹突击队战术 8": TEMP_LINK,
    "海豹突击队战术 9": TEMP_LINK,
    "海豹突击队战术 10": TEMP_LINK,
    "海豹突击队战术 11": TEMP_LINK,
    "海豹突击队战术 12": TEMP_LINK,

    // 12. 要员保护 (VIP Protection)
    "要员保护 (VIP Protection) 1": "https://yun.kmcn.vip/c3364607vodcq1304509294/61ab3db31253642699129716849/wyAEZp2NgKAA.mp4",
    "要员保护 (VIP Protection) 2": "https://yun.kmcn.vip/c3364607vodcq1304509294/9db5c4581253642699130900214/WwUYAOLaxGYA.mp4",
    "要员保护 (VIP Protection) 3": TEMP_LINK,
    "要员保护 (VIP Protection) 4": TEMP_LINK,
    "要员保护 (VIP Protection) 5": TEMP_LINK,
    "要员保护 (VIP Protection) 6": TEMP_LINK,
    "要员保护 (VIP Protection) 7": TEMP_LINK,
    "要员保护 (VIP Protection) 8": TEMP_LINK,
    "要员保护 (VIP Protection) 9": TEMP_LINK,
    "要员保护 (VIP Protection) 10": TEMP_LINK,
    "要员保护 (VIP Protection) 11": TEMP_LINK,
    "要员保护 (VIP Protection) 12": TEMP_LINK,

    // 13. 战术CQB与夺枪术
    "战术CQB与夺枪术 1": TEMP_LINK,
    "战术CQB与夺枪术 2": TEMP_LINK,
    "战术CQB与夺枪术 3": TEMP_LINK,
    "战术CQB与夺枪术 4": TEMP_LINK,
    "战术CQB与夺枪术 5": TEMP_LINK,
    "战术CQB与夺枪术 6": TEMP_LINK,
    "战术CQB与夺枪术 7": TEMP_LINK,
    "战术CQB与夺枪术 8": TEMP_LINK,
    "战术CQB与夺枪术 9": TEMP_LINK,
    "战术CQB与夺枪术 10": TEMP_LINK,
    "战术CQB与夺枪术 11": TEMP_LINK,
    "战术CQB与夺枪术 12": TEMP_LINK,

    // 14. 刀锋战士
    "刀锋战士 1": TEMP_LINK,
    "刀锋战士 2": TEMP_LINK,
    "刀锋战士 3": TEMP_LINK,
    "刀锋战士 4": TEMP_LINK,
    "刀锋战士 5": TEMP_LINK,
    "刀锋战士 6": TEMP_LINK,
    "刀锋战士 7": TEMP_LINK,
    "刀锋战士 8": TEMP_LINK,
    "刀锋战士 9": TEMP_LINK,
    "刀锋战士 10": TEMP_LINK,
    "刀锋战士 11": TEMP_LINK,
    "刀锋战士 12": TEMP_LINK,

    // 15. 万物皆兵
    "万物皆兵 1": TEMP_LINK,
    "万物皆兵 2": TEMP_LINK,
    "万物皆兵 3": TEMP_LINK,
    "万物皆兵 4": TEMP_LINK,
    "万物皆兵 5": TEMP_LINK,
    "万物皆兵 6": TEMP_LINK,
    "万物皆兵 7": TEMP_LINK,
    "万物皆兵 8": TEMP_LINK,
    "万物皆兵 9": TEMP_LINK,
    "万物皆兵 10": TEMP_LINK,
    "万物皆兵 11": TEMP_LINK,
    "万物皆兵 12": TEMP_LINK,


    // ================= INSTRUCTOR (教官主题 6个) =================
    
    // 16. 公共安全与反恐生存
    "公共安全与反恐生存 1": TEMP_LINK,
    "公共安全与反恐生存 2": TEMP_LINK,
    "公共安全与反恐生存 3": TEMP_LINK,
    "公共安全与反恐生存 4": TEMP_LINK,
    "公共安全与反恐生存 5": TEMP_LINK,
    "公共安全与反恐生存 6": TEMP_LINK,
    "公共安全与反恐生存 7": TEMP_LINK,
    "公共安全与反恐生存 8": TEMP_LINK,
    "公共安全与反恐生存 9": TEMP_LINK,
    "公共安全与反恐生存 10": TEMP_LINK,
    "公共安全与反恐生存 11": TEMP_LINK,
    "公共安全与反恐生存 12": TEMP_LINK,

    // 17. 执教风控与学员安全
    "执教风控与学员安全 1": TEMP_LINK,
    "执教风控与学员安全 2": TEMP_LINK,
    "执教风控与学员安全 3": TEMP_LINK,
    "执教风控与学员安全 4": TEMP_LINK,
    "执教风控与学员安全 5": TEMP_LINK,
    "执教风控与学员安全 6": TEMP_LINK,
    "执教风控与学员安全 7": TEMP_LINK,
    "执教风控与学员安全 8": TEMP_LINK,
    "执教风控与学员安全 9": TEMP_LINK,
    "执教风控与学员安全 10": TEMP_LINK,
    "执教风控与学员安全 11": TEMP_LINK,
    "执教风控与学员安全 12": TEMP_LINK,

    // 18. 教官必修格斗技能体系
    "教官必修格斗技能体系 1": TEMP_LINK,
    "教官必修格斗技能体系 2": TEMP_LINK,
    "教官必修格斗技能体系 3": TEMP_LINK,
    "教官必修格斗技能体系 4": TEMP_LINK,
    "教官必修格斗技能体系 5": TEMP_LINK,
    "教官必修格斗技能体系 6": TEMP_LINK,
    "教官必修格斗技能体系 7": TEMP_LINK,
    "教官必修格斗技能体系 8": TEMP_LINK,
    "教官必修格斗技能体系 9": TEMP_LINK,
    "教官必修格斗技能体系 10": TEMP_LINK,
    "教官必修格斗技能体系 11": TEMP_LINK,
    "教官必修格斗技能体系 12": TEMP_LINK,

    // 19. 身体素质与实战压力测试 (Stress Test)
    "身体素质与实战压力测试 (Stress Test) 1": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 2": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 3": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 4": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 5": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 6": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 7": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 8": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 9": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 10": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 11": TEMP_LINK,
    "身体素质与实战压力测试 (Stress Test) 12": TEMP_LINK,

    // 20. 国际马伽术教学法与沟通艺术
    "国际马伽术教学法与沟通艺术 1": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 2": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 3": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 4": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 5": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 6": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 7": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 8": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 9": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 10": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 11": TEMP_LINK,
    "国际马伽术教学法与沟通艺术 12": TEMP_LINK,

    // 21. 法律红线与犯罪心理学
    "法律红线与犯罪心理学 1": TEMP_LINK,
    "法律红线与犯罪心理学 2": TEMP_LINK,
    "法律红线与犯罪心理学 3": TEMP_LINK,
    "法律红线与犯罪心理学 4": TEMP_LINK,
    "法律红线与犯罪心理学 5": TEMP_LINK,
    "法律红线与犯罪心理学 6": TEMP_LINK,
    "法律红线与犯罪心理学 7": TEMP_LINK,
    "法律红线与犯罪心理学 8": TEMP_LINK,
    "法律红线与犯罪心理学 9": TEMP_LINK,
    "法律红线与犯罪心理学 10": TEMP_LINK,
    "法律红线与犯罪心理学 11": TEMP_LINK,
    "法律红线与犯罪心理学 12": TEMP_LINK,
};

// 获取当前应该播放的视频
// 参数从 techniqueName 改为 videoKey (例如: "女子防身特辑 1")
const getVideoUrl = (themeCategory: string, videoKey: string | null) => {
    if (videoKey && VIDEO_PLAYLIST_MAP[videoKey]) {
        return VIDEO_PLAYLIST_MAP[videoKey];
    }
    // 如果没有找到特定分集视频，则使用该类别的默认主视频
    if (themeCategory === 'MILITARY') return MAIN_VIDEO_CONFIG.MILITARY;
    if (themeCategory === 'INSTRUCTOR') return MAIN_VIDEO_CONFIG.INSTRUCTOR;
    return MAIN_VIDEO_CONFIG.CIVILIAN;
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
      return `${getShortTitle()} ${index + 1}`;
  };

  const currentVideoUrl = getVideoUrl(theme.category, getCurrentVideoKey());
  
  const currentPlayingTitle = selectedTechnique 
      ? `${getCurrentVideoKey()} - ${selectedTechnique.name}`
      : "课程总览 (Course Overview)";


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
                      ref={videoRef}
                      controls
                      controlsList="nodownload"
                      className="w-full h-full object-contain"
                      poster="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop"
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
                           const displayName = `${getShortTitle()} ${i + 1}`;

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
                                   <div className={`text-xs font-bold truncate flex-1 ${isActive ? 'text-white' : 'text-gray-400'}`}>
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
                                           <span className={`truncate text-[10px] ${isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-500'}`}>{t.details}</span>
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
