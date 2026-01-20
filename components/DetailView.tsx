import React, { useState, useEffect } from 'react';
import { Theme, Technique } from '../types';
import { X, CheckCircle, BrainCircuit, Activity, ShieldAlert, AlertTriangle, BarChart3, Target, ShieldCheck, Flame, Info, Lock, Key, Zap, Medal, Gift } from 'lucide-react';

// ==========================================
// 🔧 视频链接配置区域 (Video Configuration)
// ==========================================
const VIDEO_CONFIG = {
  CIVILIAN: "https://yun.kmcn.vip/c3364607vodcq1304509294/3380d6a41253642699132774530/xGjcuANdENoA.mp4",
  MILITARY: "https://yun.kmcn.vip/c3364607vodcq1304509294/61ab3db31253642699129716849/wyAEZp2NgKAA.mp4",
  INSTRUCTOR: "https://yun.kmcn.vip/c3364607vodcq1304509294/3380d6a41253642699132774530/xGjcuANdENoA.mp4"
};

const MASTER_PASSWORD = "kmcn888"; // 规则1：万能密码

interface Props {
  theme: Theme;
  onClose: () => void;
  isMilitary: boolean;
}

const DetailView: React.FC<Props> = ({ theme, onClose, isMilitary }) => {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  
  // Lock State Logic
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [adminPwd, setAdminPwd] = useState("");

  // Check LocalStorage on mount to see if already paid
  useEffect(() => {
    const unlockedThemes = JSON.parse(localStorage.getItem('kmcn_unlocked_themes') || '[]');
    if (unlockedThemes.includes(theme.id)) {
      setIsUnlocked(true);
    }
  }, [theme.id]);

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

  const getLevelLabel = () => {
    const isCiv = theme.category === 'CIVILIAN';
    const isMil = theme.category === 'MILITARY';
    const isInst = theme.category === 'INSTRUCTOR';

    let prefix = '';
    if (isCiv) prefix = 'C';
    else if (isMil) prefix = 'G';
    else if (isInst) prefix = 'P'; 

    let level = '1';
    if (theme.difficulty === 'INTERMEDIATE') level = '2';
    if (theme.difficulty === 'ADVANCED') level = '3';

    const diffMap = {
      'BEGINNER': '初级',
      'INTERMEDIATE': '进阶',
      'ADVANCED': '高阶'
    };

    return `${prefix}${level} ${diffMap[theme.difficulty]}`;
  };

  const levelLabel = getLevelLabel();

  const getVideoUrl = () => {
    if (theme.category === 'MILITARY') return VIDEO_CONFIG.MILITARY;
    if (theme.category === 'INSTRUCTOR') return VIDEO_CONFIG.INSTRUCTOR;
    return VIDEO_CONFIG.CIVILIAN;
  };
  const videoUrl = getVideoUrl();

  // Instant Select - No Loading
  const handleSelectTechnique = (tech: Technique) => {
    setSelectedTechnique(tech);
  };

  const getCurrentPrice = () => {
    const isCiv = theme.category === 'CIVILIAN';
    const isInst = theme.category === 'INSTRUCTOR';
    
    if (isInst) {
        if (theme.difficulty === 'BEGINNER') return '100';
        if (theme.difficulty === 'INTERMEDIATE') return '300';
        return '680';
    }

    if (isCiv) {
        if (theme.difficulty === 'BEGINNER') return '39.8';
        if (theme.difficulty === 'INTERMEDIATE') return '69.8';
        return '99.8';
    } else {
        if (theme.difficulty === 'BEGINNER') return '188';
        if (theme.difficulty === 'INTERMEDIATE') return '388';
        return '688';
    }
  };

  const getSeriesPrice = () => {
    const isCiv = theme.category === 'CIVILIAN';
    const isInst = theme.category === 'INSTRUCTOR';
    
    if (isInst) return { price: '2680', label: '教官全能班 (P1-P3)' };
    if (isCiv) return { price: '198', label: '民用全系列 (C1-C5)' };
    return { price: '1280', label: '军警战术全系 (G1-G5)' };
  };

  const currentPrice = getCurrentPrice();
  const seriesInfo = getSeriesPrice();

  const renderPricing = () => {
    return (
      <div className="space-y-4 text-sm">
         <div className="bg-gradient-to-r from-km-red/20 to-neutral-900 border border-km-red/30 p-4 rounded-xl flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-km-red/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center">
                    <Target className="w-3 h-3 mr-1" /> 本主题解锁 (Single)
                </div>
                <div className="text-white text-xs opacity-70">永久观看 + 专属教案</div>
            </div>
            <div className="text-right">
                <span className="text-xs text-gray-500 line-through mr-2">¥{Math.floor(parseFloat(currentPrice) * 1.5)}</span>
                <span className="text-3xl font-black text-white text-shadow-glow">¥{currentPrice}</span>
            </div>
         </div>

         <div className="bg-neutral-800/50 border border-white/10 p-3 rounded-lg flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-amber-500 font-bold text-xs flex items-center">
                    <Medal className="w-3 h-3 mr-1" /> {seriesInfo.label}
                </span>
                <span className="text-[10px] text-gray-500 mt-0.5">含所有在线课程 + <span className="text-green-400">视频考核&电子证书</span></span>
            </div>
            <span className="text-xl font-bold text-gray-200">¥{seriesInfo.price}</span>
         </div>
      </div>
    );
  };

  const renderContent = () => (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="w-full lg:w-3/4 border-r border-neutral-800 overflow-y-auto custom-scrollbar p-8 pb-24">
         <div className="mb-8 border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded text-xs font-bold tracking-widest bg-km-red text-white shadow-lg`}>
                {theme.category}
              </span>
              <span className={`flex items-center px-3 py-1 rounded text-xs font-bold tracking-widest bg-neutral-800 border border-white/10 text-white`}>
                <BarChart3 className="w-3 h-3 mr-1" />
                {levelLabel}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold mb-4 text-white">{theme.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{theme.description}</p>
         </div>

         <div className="space-y-10">
            <div className="bg-neutral-900/50 rounded-xl border border-neutral-800 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                <h3 className="text-xl font-bold text-amber-500 mb-4 flex items-center">
                    <ShieldCheck className="w-6 h-6 mr-2" /> 
                    战术原则与心法 (Tactical Principles)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {theme.principles.map((p, i) => (
                        <div key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-900/30 text-amber-500 text-xs font-bold mr-3 mt-0.5">{i+1}</span>
                            <span className="text-gray-300 font-medium">{p}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-km-red mb-6 flex items-center">
                  <ShieldAlert className="w-6 h-6 mr-2" /> 
                  实战场景与应对策略 (Threat & Response)
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {theme.scenarios.map((s, i) => (
                  <div key={i} className="bg-neutral-900 p-5 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <div className="flex items-center text-red-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <AlertTriangle className="w-3 h-3 mr-1" /> 遭遇危险 (Threat)
                        </div>
                        <div className="text-white font-bold text-lg">{s.danger}</div>
                    </div>
                    <div className="hidden md:block text-gray-600">→</div>
                    <div className="flex-1 border-l-2 border-green-500/30 pl-4 md:border-l-0 md:pl-0">
                        <div className="flex items-center text-green-500 text-xs font-bold uppercase tracking-wider mb-1">
                            <Activity className="w-3 h-3 mr-1" /> 战术对策 (Solution)
                        </div>
                        <div className="text-gray-300">{s.response}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
               <h3 className="text-xl font-bold text-blue-500 mb-6 flex items-center">
                   <BrainCircuit className="w-6 h-6 mr-2" /> 
                   专家教案库：技术详解与训练案 (Instant Load)
               </h3>
               <div className="flex flex-wrap gap-2 mb-4">
                  {theme.techniques.map((t, i) => (
                     <button key={i} onClick={() => handleSelectTechnique(t)} className={`text-xs px-3 py-1.5 rounded-full border border-neutral-700 bg-neutral-900 text-gray-400 hover:text-white transition-all ${selectedTechnique?.name === t.name ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-900/50' : ''}`}>
                       {t.name}
                     </button>
                  ))}
               </div>
               
               <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 min-h-[200px] relative transition-all duration-300">
                 {selectedTechnique ? (
                     <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                       <div className="flex justify-between items-start border-b border-white/10 pb-2">
                           <h4 className="text-white font-bold text-lg">{selectedTechnique.drill.drillName}</h4>
                           <span className="text-xs text-blue-400 border border-blue-900 bg-blue-900/20 px-2 py-0.5 rounded flex items-center">
                             <Zap className="w-3 h-3 mr-1" /> Expert System
                           </span>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="bg-black/30 p-3 rounded border-l-2 border-gray-600">
                               <div className="text-xs text-gray-500 font-bold uppercase mb-1">Setup (准备)</div>
                               <p className="text-gray-300 text-sm">{selectedTechnique.drill.setup}</p>
                           </div>
                           <div className="bg-black/30 p-3 rounded border-l-2 border-km-red">
                               <div className="text-xs text-km-red font-bold uppercase mb-1">Instructor Eye (纠错)</div>
                               <p className="text-gray-300 text-sm whitespace-pre-line">{selectedTechnique.drill.critical_checkpoints}</p>
                           </div>
                       </div>

                       <div className="bg-blue-900/10 p-4 rounded border border-blue-900/30">
                           <div className="text-xs text-blue-400 font-bold uppercase mb-2 flex items-center">
                              <Target className="w-3 h-3 mr-1" /> Phase 1: Mechanics (生物力学分解)
                           </div>
                           <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed font-mono text-xs md:text-sm">
                             {selectedTechnique.drill.phase1_technical}
                           </p>
                       </div>
                       
                       <div className="bg-amber-900/10 p-4 rounded border border-amber-900/30">
                           <div className="text-xs text-amber-500 font-bold uppercase mb-2 flex items-center">
                              <Flame className="w-3 h-3 mr-1" /> Phase 2: Stress Drill (实战压力测试)
                           </div>
                           <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed border-l-2 border-amber-500 pl-3">
                             {selectedTechnique.drill.phase2_stress}
                           </p>
                       </div>
                     </div>
                 ) : (
                    <div className="flex flex-col items-center justify-center h-full py-10 text-gray-600">
                        <BrainCircuit className="w-10 h-10 mb-3 opacity-20" />
                        <p>请点击上方具体技术，立即获取教官级详细教案</p>
                    </div>
                 )}
               </div>
            </div>
         </div>
      </div>

      <div className="w-full lg:w-1/4 bg-neutral-900 p-8 border-t lg:border-t-0 lg:border-l border-neutral-800 overflow-y-auto">
         <h3 className="text-white font-bold mb-4 flex items-center">
             <Target className="w-4 h-4 mr-2 text-km-red" /> 课程技术大纲
         </h3>
         <div className="space-y-3">
           {theme.techniques.map((t, i) => (
               <div key={i} className="flex items-start text-sm group cursor-default" onClick={() => handleSelectTechnique(t)}>
                   <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 transition-colors ${selectedTechnique?.name === t.name ? 'bg-blue-500' : 'bg-gray-700 group-hover:bg-km-red'}`}></div>
                   <div>
                       <div className={`font-medium transition-colors ${selectedTechnique?.name === t.name ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'}`}>{t.name}</div>
                       <div className="text-[10px] text-gray-600 line-clamp-1">{t.details}</div>
                   </div>
               </div>
           ))}
         </div>
         
         <div className="mt-8 pt-6 border-t border-white/5">
             <div className="bg-blue-900/10 p-4 rounded border border-blue-500/20">
                 <div className="flex items-center text-blue-400 mb-2">
                     <Medal className="w-4 h-4 mr-2" />
                     <span className="text-xs font-bold uppercase">认证提示</span>
                 </div>
                 <p className="text-[10px] text-gray-400 leading-relaxed">
                     完成本主题所有技术打卡并通过视频考核，可获得电子证书及 {theme.difficulty === 'ADVANCED' ? '30' : '15'} 积分。
                 </p>
             </div>
         </div>
      </div>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full h-full md:w-[95vw] md:h-[95vh] max-w-7xl md:rounded-2xl shadow-2xl overflow-hidden bg-neutral-950 text-gray-200 border border-neutral-800 animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-[100] p-2 rounded-full bg-black/50 hover:bg-km-red text-white border border-white/20 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`w-full h-full transition-all duration-500 ${isUnlocked ? '' : 'filter blur-[2px] brightness-[0.6] pointer-events-none select-none'}`}>
           {renderContent()}
        </div>

        {!isUnlocked && (
          <div className="absolute inset-0 z-40 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-neutral-900 rounded-2xl border border-neutral-700 shadow-[0_0_80px_rgba(220,38,38,0.2)] overflow-hidden flex flex-col md:flex-row relative animate-in slide-in-from-bottom-10 fade-in duration-500">
              
              <div className="w-full md:w-3/5 bg-gradient-to-br from-black to-neutral-900 relative p-6 md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
                
                <div className="mb-4">
                   <div className="flex items-center gap-2 mb-2">
                       <span className="px-2 py-0.5 rounded text-[10px] bg-km-red text-white font-bold uppercase tracking-wider">
                           {theme.category} Application
                       </span>
                       <span className="px-2 py-0.5 rounded text-[10px] bg-neutral-800 border border-white/10 text-gray-400 font-bold uppercase tracking-wider">
                           Level: {theme.difficulty}
                       </span>
                   </div>
                   <h2 className="text-2xl md:text-3xl font-black text-white mb-1 leading-tight">
                     {theme.title}
                   </h2>
                </div>

                <div className="aspect-video w-full relative group rounded-lg overflow-hidden border border-neutral-800 shadow-2xl mb-5 flex-shrink-0">
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                        <span className="bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 flex items-center">
                           <Lock className="w-3 h-3 mr-1" /> Preview Only
                        </span>
                    </div>
                    <video 
                        controls
                        controlsList="nodownload"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>

                <div className="space-y-3 mb-6">
                    {theme.hooks.map((hook, index) => (
                        <div key={index} className="flex items-start">
                           {index === 2 ? (
                               <Flame className="w-5 h-5 text-km-red mr-3 shrink-0 mt-0.5 fill-km-red/20 animate-pulse" />
                           ) : (
                               <CheckCircle className="w-5 h-5 text-gray-500 mr-3 shrink-0 mt-0.5" />
                           )}
                           <p className={`text-sm leading-relaxed ${index === 2 ? 'text-white font-bold' : 'text-gray-300'}`}>
                             {hook}
                           </p>
                        </div>
                    ))}
                </div>

                <div className="mt-auto bg-blue-900/10 border border-blue-500/20 rounded-lg p-3">
                   <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-blue-200">马伽术专家建议 (Expert Advice)</span>
                   </div>
                   <p className="text-[11px] text-gray-400 leading-relaxed text-justify">
                      虽然线上课程打破了地域限制，让您能随时随地学习正宗马伽术的意识与技术流程，但<strong>格斗的核心在于身体对抗与肌肉记忆</strong>。为了真正掌握精髓，我们强烈建议您参加线下集训。
                      <br/><br/>
                      <span className="text-blue-300">线下课程包含：线上全套视频 + 面对面纠错 + 免费考核认证。</span>
                   </p>
                </div>

              </div>

              <div className="w-full md:w-2/5 bg-neutral-800 p-6 md:p-8 flex flex-col justify-between border-l border-neutral-700 relative overflow-hidden">
                 
                 <div className="bg-gradient-to-r from-red-900/40 to-black p-3 rounded-lg border border-red-500/30 mb-6">
                    <div className="flex items-center gap-2 mb-1">
                       <Gift className="w-4 h-4 text-km-red" />
                       <span className="text-xs font-bold text-white uppercase">线下集训权益 (Super Bonus)</span>
                    </div>
                    <p className="text-[10px] text-gray-300 leading-relaxed">
                       报名<strong className="text-white">线下课程</strong> (¥1980起)，即可<strong className="text-white">免费获赠</strong>该主题所有线上资源及证书考核。
                    </p>
                 </div>

                 <div className="space-y-4">
                    <div className="bg-neutral-900/80 rounded-xl p-4 border border-white/5">
                        {renderPricing()}
                    </div>

                    <div className="flex flex-col items-center justify-center p-2">
                       <div className="bg-white p-2 rounded-lg shadow-xl mb-3 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <img 
                              src="./payment_qrcode.png" 
                              alt="QR Code" 
                              className="w-32 h-32 object-contain"
                              onError={(e) => e.currentTarget.src = "https://placehold.co/200x200?text=Scan+To+Pay"}
                          />
                       </div>
                       <p className="text-[10px] text-gray-400 font-medium">微信扫码支付 · 极速开通</p>
                       <p className="text-[10px] text-km-red font-bold mt-1">支付后请联系: 13424247185</p>
                    </div>
                 </div>

                 <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="flex flex-col items-center">
                        {!showAdminInput ? (
                          <button 
                            onClick={() => setShowAdminInput(true)}
                            className="text-[10px] text-gray-600 hover:text-white flex items-center transition-colors mt-2"
                          >
                            <Key className="w-3 h-3 mr-1" /> 管理员手动开通
                          </button>
                        ) : (
                          <div className="w-full bg-black/40 p-2 rounded border border-white/10 animate-in fade-in slide-in-from-bottom-2 mt-2">
                             <div className="text-[9px] text-gray-500 mb-1">
                               解锁代码: <span className="font-mono text-km-red">KMCN{theme.id.toUpperCase()}{theme.id.slice(-1)}</span>
                             </div>
                             <div className="flex gap-2">
                               <input 
                                 type="password" 
                                 placeholder="Admin Password"
                                 className="bg-neutral-900 border border-neutral-700 rounded px-2 py-1 text-xs text-white flex-1 focus:border-km-red outline-none"
                                 value={adminPwd}
                                 onChange={(e) => setAdminPwd(e.target.value)}
                               />
                               <button 
                                 onClick={handleAdminLogin}
                                 className="bg-km-red hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-bold whitespace-nowrap"
                               >
                                 解锁
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