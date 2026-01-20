import React, { useState, useEffect, useRef } from 'react';
import { Theme, Technique } from '../types';
import { X, CheckCircle, BrainCircuit, Activity, ShieldAlert, AlertTriangle, Target, Flame, Info, Lock, Key, Zap, Medal, Gift, Play, ChevronRight, List, MonitorPlay, Clock, Layout, BookOpen, Quote, Pause, MousePointer2, Award, CheckSquare, ArrowRight, ShoppingBag, Sword, User } from 'lucide-react';

// ==========================================
// 🔧 视频链接配置区域 (Video Configuration)
// ==========================================
// 默认主题主视频
const MAIN_VIDEO_CONFIG = {
  CIVILIAN: "https://yun.kmcn.vip/c3364607vodcq1304509294/946516651253642699130507926/f2GvtjMt9J8A.mp4",
  MILITARY: "https://yun.kmcn.vip/c3364607vodcq1304509294/61ab3db31253642699129716849/wyAEZp2NgKAA.mp4",
  INSTRUCTOR: "https://yun.kmcn.vip/c3364607vodcq1304509294/df61d6e61253642699131452585/8uv6gnmpCNMA.mp4"
};

// 💡 提示：在此处配置分集视频路径
const VIDEO_PLAYLIST_MAP: Record<string, string> = {
    "小手返 (Kote Gaeshi)": "https://path-to-your-video/kote-gaeshi.mp4",
  "小手返2 (Kote Gaeshi)": "https://yun.kmcn.vip/c3364607vodcq1304509294/61ab3db31253642699129716849/wyAEZp2NgKAA.mp4",
  "小手返3 (Kote Gaeshi)": "https://yun.kmcn.vip/c3364607vodcq1304509294/df61d6e61253642699131452585/8uv6gnmpCNMA.mp4",
  "小手返4 (Kote Gaeshi)": "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4",
  "小手返5 (Kote Gaeshi)": "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4",
  "小手返6 (Kote Gaeshi)": "https://yun.kmcn.vip/c3364607vodcq1304509294/e3f0848b1253642699345268209/WI3tCB9vmMwA.mp4",
    // ... 添加更多
};

// 获取当前应该播放的视频
const getVideoUrl = (themeCategory: string, techniqueName: string | null) => {
    if (techniqueName && VIDEO_PLAYLIST_MAP[techniqueName]) {
        return VIDEO_PLAYLIST_MAP[techniqueName];
    }
    if (themeCategory === 'MILITARY') return MAIN_VIDEO_CONFIG.MILITARY;
    if (themeCategory === 'INSTRUCTOR') return MAIN_VIDEO_CONFIG.INSTRUCTOR;
    return MAIN_VIDEO_CONFIG.CIVILIAN;
};

const MASTER_PASSWORD = "kmcn888"; 

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

  useEffect(() => {
      if (videoRef.current) {
          videoRef.current.load();
          videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
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
    
    if (input === MASTER_PASSWORD.toUpperCase() || input === themeSpecificPwd) {
      handleUnlock();
      setShowAdminInput(false);
      alert(`权限验证成功：主题 [${theme.title}] 已为您解锁！`);
    } else {
      alert("密码错误。请联系管理员获取权限。");
    }
  };

  const currentVideoUrl = getVideoUrl(theme.category, selectedTechnique?.name || null);
  const handleSelectTechnique = (tech: Technique) => setSelectedTechnique(tech);

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

    // 1. CIVILIAN (民用)
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
        bundleInfo = "自卫马伽术全系列在线课程 ¥298 (含考核+证书)";
        offlineInfo = "线下专属定制课：4节 ¥1980 / 6节 ¥2800 (含免费测试考核+证书)";
    } 
    // 2. MILITARY (军警)
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
        bundleInfo = "军警特勤全系列在线课程 ¥1280 (含考核+证书)";
        offlineInfo = "线下专属定制课：4节 ¥2680 / 6节 ¥3980 (含免费测试考核+证书)";
    }
    // 3. INSTRUCTOR (教官)
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
         bundleInfo = "教官认证课程包含完整的教学法与风控体系";
         offlineInfo = "教官线下集训营请联系客服咨询排期";
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
       {/* Main Single Theme Price */}
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
       
       {/* Bundle Note (Highlighted) */}
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

       {/* Features List */}
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

  // ----------------------------------------------------------------------------------
  //  🎨 Render Logic
  // ----------------------------------------------------------------------------------
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
             {/* Revised Header: Bigger and Bilingual */}
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
             
             {/* Changed to grid-cols-2 for a 2x2 layout when there are 4 items */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {theme.principles.map((p, i) => (
                     <div key={i} className="relative bg-neutral-900/60 border-l-4 border-km-red rounded-r-lg p-4 overflow-hidden group hover:bg-neutral-900 transition-colors">
                         {/* Giant Watermark Number */}
                         <span className="absolute -right-2 -top-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0">
                             {`0${i+1}`}
                         </span>
                         {/* Content */}
                         <div className="relative z-10 flex flex-col h-full justify-center min-h-[50px]">
                             <div className="w-8 h-0.5 bg-km-red/50 mb-1.5 group-hover:w-12 transition-all duration-500"></div>
                             {/* Ultra compact line height as requested (leading-none for ~50% height visual feel compared to loose) */}
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
              
              {/* Video Stage */}
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
                  {/* Overlay Info */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/90 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Now Playing</span>
                     </div>
                     <h3 className="text-sm font-bold text-white shadow-black drop-shadow-md truncate">
                        {selectedTechnique ? selectedTechnique.name : "课程总览 (Course Overview)"}
                     </h3>
                  </div>
              </div>

              {/* Compact Playlist */}
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
                                       {t.name}
                                   </div>
                                   {isActive && <div className="w-1.5 h-1.5 rounded-full bg-km-red shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>}
                               </button>
                           );
                       })}
                  </div>
              </div>
          </div>
      </div>

      {/* === EXPERT ADVICE BANNER (NEW) === */}
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

      {/* === 4. THREAT & RESPONSE (Battle Matrix) === */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
           <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-2">
               <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-km-red" />
               <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
                   实战场景与应对策略 <span className="text-gray-600 ml-1 text-base md:text-lg">THREAT & RESPONSE</span>
               </h3>
           </div>
           
           <div className="grid grid-cols-1 gap-4">
               {theme.scenarios.map((s, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-stretch bg-neutral-900 border border-white/5 rounded-lg overflow-hidden hover:border-white/20 transition-colors group shadow-lg">
                       
                       {/* Left: Threat */}
                       <div className="w-full md:w-5/12 p-5 bg-gradient-to-r from-red-950/30 to-transparent flex items-start gap-4 border-b md:border-b-0 md:border-r border-white/5 relative">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
                           <div className="p-2 bg-red-900/20 rounded-lg shrink-0">
                              <AlertTriangle className="w-5 h-5 text-red-500" />
                           </div>
                           <div>
                               <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-1">Danger / Threat</div>
                               <span className="text-sm font-bold text-white group-hover:text-red-100 transition-colors leading-relaxed">
                                   {s.danger}
                               </span>
                           </div>
                       </div>
                       
                       {/* Connector (Desktop) */}
                       <div className="hidden md:flex items-center justify-center w-12 bg-black/40 text-gray-600 relative">
                           <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                           <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-km-red group-hover:translate-x-1 transition-all duration-300" />
                       </div>

                       {/* Right: Response */}
                       <div className="flex-1 p-5 bg-gradient-to-l from-blue-950/20 to-transparent flex items-start gap-4">
                           <div className="p-2 bg-blue-900/20 rounded-lg shrink-0">
                               <Sword className="w-5 h-5 text-blue-400" />
                           </div>
                           <div>
                               <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Tactical Response</div>
                               <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                   {s.response}
                               </span>
                           </div>
                       </div>
                   </div>
               ))}
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
                                      <span className="truncate">{t.name}</span>
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
                             <div className="text-[10px] text-gray-500 mb-2 font-mono">
                               解锁代码: <span className="text-km-red font-bold">KMCN{theme.id.toUpperCase()}{theme.id.slice(-1)}</span>
                             </div>
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
