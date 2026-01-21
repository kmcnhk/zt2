
import React, { useState } from 'react';
import { THEMES } from './data';
import { Theme, Difficulty } from './types';
import ThemeCard from './components/ThemeCard';
import DetailView from './components/DetailView';
import UserProfile from './components/UserProfile';
import { SwitchCamera, ShieldAlert, Target, Shield, GraduationCap, Phone, BarChart3, Filter, User, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<'CIVILIAN' | 'MILITARY' | 'INSTRUCTOR'>('CIVILIAN');
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | Difficulty>('ALL');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [showProfile, setShowProfile] = useState(false);

  const isMilitary = mode === 'MILITARY';
  const isInstructor = mode === 'INSTRUCTOR';

  const filteredThemes = THEMES.filter(t => {
    const modeMatch = t.category === mode;
    const difficultyMatch = difficultyFilter === 'ALL' || t.difficulty === difficultyFilter;
    return modeMatch && difficultyMatch;
  });

  // Background images for different modes
  let bgImage = "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=2071&auto=format&fit=crop"; // Civilian
  if (isMilitary) {
    // Military - Now using the Firearms image (previously Instructor)
    bgImage = "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop"; 
  } else if (isInstructor) {
    // Instructor - Now using the Tactical image (previously Military)
    bgImage = "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop"; 
  }

  // ---------------------------------------------------------------------------
  // --- LOGO SETTING ---
  const logoUrl = "./logo.png";
  // ---------------------------------------------------------------------------

  const DifficultyButton = ({ level, label, colorClass }: { level: 'ALL' | Difficulty, label: string, colorClass: string }) => (
    <button
      onClick={() => setDifficultyFilter(level)}
      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border flex items-center gap-1.5
        ${difficultyFilter === level 
          ? `${colorClass} shadow-lg scale-105` 
          : 'bg-black/40 border-white/10 text-gray-500 hover:text-white hover:bg-white/5'
        }
      `}
    >
      {level !== 'ALL' && <div className={`w-1.5 h-1.5 rounded-full ${difficultyFilter === level ? 'bg-current' : 'bg-gray-600'}`}></div>}
      {label}
    </button>
  );

  return (
    <div className={`min-h-screen bg-km-black text-gray-200 selection:bg-km-red selection:text-white`}>
      
      {/* Navigation / Header */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b border-white/10 bg-black/90`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Logo Section */}
              <div className="relative group shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-km-red via-transparent to-blue-600 rounded-[50%] blur-md opacity-20 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src={logoUrl}
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/150x80/000000/ffffff?text=KMCN";
                  }}
                  alt="KMCN 深圳马伽术 Logo" 
                  className="relative h-12 sm:h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              <div className="hidden sm:block">
                <h1 className={`text-xl font-black tracking-tighter uppercase text-white drop-shadow-md leading-none`}>
                  KMCN <span className="text-km-red">KRAV MAGA</span>
                </h1>
                <p className="text-[10px] font-bold tracking-[0.2em] opacity-80 text-gray-400 mt-1">
                  深圳马伽术 · 以色列格斗术体系
                </p>
              </div>
              
              {/* Mobile Text Only */}
              <div className="sm:hidden">
                 <h1 className={`text-lg font-black tracking-tighter uppercase text-white`}>KMCN</h1>
              </div>
            </div>

            {/* Right Side: Mode Switcher & Profile */}
            <div className="flex items-center gap-4">
              
              {/* Mode Switcher */}
              <div className="hidden md:flex items-center gap-2 bg-neutral-900/80 rounded-full p-1 border border-white/10 shadow-inner">
                 <button 
                    onClick={() => setMode('CIVILIAN')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold whitespace-nowrap
                      ${mode === 'CIVILIAN'
                        ? 'bg-white text-black shadow-lg ring-1 ring-white/50' 
                        : 'text-gray-500 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <Shield className={`w-3 h-3 sm:w-4 sm:h-4 ${mode === 'CIVILIAN' ? 'text-km-red' : ''}`} />
                    <span className="hidden sm:inline">自卫马伽术</span>
                    <span className="sm:hidden">民用</span>
                  </button>

                  <button 
                    onClick={() => setMode('MILITARY')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold whitespace-nowrap
                      ${mode === 'MILITARY'
                        ? 'bg-km-red text-white shadow-[0_0_10px_rgba(220,38,38,0.4)] ring-1 ring-red-500/50' 
                        : 'text-gray-500 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">军警特勤</span>
                    <span className="sm:hidden">军警</span>
                  </button>

                  <button 
                    onClick={() => setMode('INSTRUCTOR')}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm font-bold whitespace-nowrap
                      ${mode === 'INSTRUCTOR'
                        ? 'bg-amber-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.4)] ring-1 ring-amber-500/50' 
                        : 'text-gray-500 hover:text-white hover:bg-white/10'
                      }
                    `}
                  >
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">教官特训</span>
                    <span className="sm:hidden">教官</span>
                  </button>
              </div>

              {/* Added: External Link Button (Desktop) - Moved after Mode Switcher */}
              <a 
                href="https://www.kmcn.vip/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-km-red text-gray-300 hover:text-white transition-all text-xs font-bold uppercase tracking-wider group"
              >
                <span>马伽术教学</span>
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-km-red transition-colors" />
              </a>

              {/* Profile Icon */}
              <button 
                onClick={() => setShowProfile(true)}
                className="p-2 rounded-full bg-neutral-800 border border-neutral-700 hover:border-km-red text-gray-400 hover:text-white transition-all hover:bg-neutral-700"
                title="个人中心"
              >
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Mode Switcher (Separate Row) */}
          <div className="md:hidden flex items-center justify-between pb-3 gap-2 overflow-x-auto scrollbar-hide">
              <button 
                onClick={() => setMode('CIVILIAN')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-bold whitespace-nowrap border transition-all
                  ${mode === 'CIVILIAN' ? 'bg-white text-black border-white' : 'bg-neutral-900 text-gray-500 border-neutral-800'}`}
              >
                <Shield className="w-3 h-3" /> 民用
              </button>
              <button 
                onClick={() => setMode('MILITARY')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-bold whitespace-nowrap border transition-all
                  ${mode === 'MILITARY' ? 'bg-km-red text-white border-km-red' : 'bg-neutral-900 text-gray-500 border-neutral-800'}`}
              >
                <Target className="w-3 h-3" /> 军警
              </button>
              <button 
                onClick={() => setMode('INSTRUCTOR')}
                className={`flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-bold whitespace-nowrap border transition-all
                  ${mode === 'INSTRUCTOR' ? 'bg-amber-600 text-white border-amber-600' : 'bg-neutral-900 text-gray-500 border-neutral-800'}`}
              >
                <GraduationCap className="w-3 h-3" /> 教官
              </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden py-16 sm:py-24">
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-700 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${bgImage}')`,
            opacity: 0.7
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-black/50 to-km-black" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className={`inline-block mb-4 px-3 py-1 rounded border bg-black/40 backdrop-blur text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(220,38,38,0.2)]
             ${isInstructor ? 'border-amber-500/50 text-amber-500' : 'border-km-red/50 text-km-red'}`}>
            {isMilitary ? 'Military Application Themes' : isInstructor ? 'Instructor Application Themes' : 'Civilian Application Themes'}
          </div>
          
          <h2 className={`text-4xl sm:text-7xl font-black mb-6 tracking-tight text-white uppercase drop-shadow-2xl`}>
            {isMilitary ? '军警马伽术 · 战术应用主题' : isInstructor ? '马伽术教官 · 教学应用主题' : '以色列马伽术 · 街头应用主题'}
          </h2>
          
          <div className={`text-lg sm:text-2xl max-w-4xl mx-auto mb-10 text-gray-200 leading-relaxed font-medium drop-shadow-lg space-y-2`}>
            <p>
              {isMilitary 
                ? '专为FBI特工、特种部队及执法人员设计。涵盖匕首格斗、短棍镇暴、哨兵摸排与高风险CQC逮捕技术应用。'
                : isInstructor
                ? '不仅是格斗家，更是安全专家与教育者。涵盖急救风控、实战压力测试、教学法与法律心理学应用。'
                : '实战派 KMCN马伽术(深圳) 主题应用训练营。涵盖反恐防暴、地面修罗场生存及菲律宾棍术应用。'
              }
            </p>
            <p className="text-base text-gray-400 font-normal mt-4">
              融合 <span className="text-white font-bold">KRAV MAGA</span> 核心理念与古流柔术、菲律宾格斗术精华。
            </p>
          </div>

          <div className="flex flex-col items-center gap-8">
             <div className="inline-flex flex-col sm:flex-row items-center gap-4">
               <div className={`px-10 py-4 rounded text-white font-bold uppercase tracking-wider transition-all cursor-pointer transform hover:-translate-y-1 shadow-lg
                  ${isInstructor 
                    ? 'bg-amber-600 hover:bg-amber-700 shadow-[0_0_20px_rgba(217,119,6,0.4)]' 
                    : 'bg-km-red hover:bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                  }`}>
                 {isInstructor ? '申请教官考核' : '开始主题训练'}
               </div>
               <div className="px-10 py-4 rounded border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur text-white font-bold uppercase tracking-wider transition-all cursor-pointer hover:border-white/40">
                 {filteredThemes.length} 个核心{isInstructor ? '认证' : '应用'}主题
               </div>
             </div>

             {/* Difficulty Filter Bar */}
             <div className="flex flex-wrap justify-center items-center gap-3 p-2 rounded-xl bg-black/40 backdrop-blur border border-white/10 shadow-xl max-w-2xl">
               <div className="flex items-center text-xs font-bold text-gray-400 mr-2 uppercase tracking-widest">
                 <Filter className="w-3 h-3 mr-1" />
                 Difficulty:
               </div>
               <DifficultyButton 
                  level="ALL" 
                  label="全部 (All)" 
                  colorClass="bg-white text-black border-white" 
               />
               <DifficultyButton 
                  level="BEGINNER" 
                  label="基础 (Beginner)" 
                  colorClass="bg-green-600 text-white border-green-500" 
               />
               <DifficultyButton 
                  level="INTERMEDIATE" 
                  label="进阶 (Intermediate)" 
                  colorClass="bg-yellow-600 text-white border-yellow-500" 
               />
               <DifficultyButton 
                  level="ADVANCED" 
                  label="高阶 (Advanced)" 
                  colorClass="bg-red-600 text-white border-red-500" 
               />
             </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center gap-3 mb-8 text-white/70 text-sm font-bold uppercase tracking-widest border-b border-white/10 pb-4">
           <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${isInstructor ? 'bg-amber-500 shadow-amber-500' : 'bg-km-red shadow-red-600'}`}></div>
           KMCN 马伽术应用主题训练计划 (Krav Maga Application Themes)
        </div>
        
        {filteredThemes.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/50 rounded-xl border border-dashed border-neutral-800">
            <BarChart3 className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
            <p className="text-gray-500 font-bold">该筛选条件下暂无训练主题</p>
            <button 
              onClick={() => setDifficultyFilter('ALL')}
              className="mt-4 text-sm text-km-red hover:underline"
            >
              清除筛选条件
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map(theme => (
              <ThemeCard 
                key={theme.id} 
                theme={theme} 
                onClick={setSelectedTheme} 
                isMilitary={isMilitary} 
              />
            ))}
          </div>
        )}
      </main>

      {/* Static Footer */}
      <footer className="relative z-10 bg-black/60 border-t border-white/5 py-16 pb-32 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-10 flex flex-col items-center">
                <h4 className="text-2xl font-black text-white tracking-tighter mb-2">KMCN <span className="text-km-red">中国马伽术</span></h4>
                <div className="flex items-center gap-6 text-sm sm:text-base font-bold text-gray-400 mt-2">
                   <span>📍 中国 - 深圳</span>
                   <span className="flex items-center text-km-red"><Phone className="w-4 h-4 mr-2" /> 13424247185</span>
                </div>
            </div>
            <div className="inline-block p-8 rounded-xl bg-black/50 border border-white/10 shadow-2xl backdrop-blur max-w-3xl transform hover:scale-[1.02] transition-transform duration-500">
                <p className="text-xl md:text-2xl font-black text-gray-100 mb-3 tracking-wide">
                    “级别不是目的，重要的是能安全回家！”
                </p>
                <p className="text-sm md:text-base text-gray-500 font-serif italic tracking-wide">
                    "The goal is not the rank, but getting home safe."
                </p>
            </div>
            
            {/* Added: External Link in Footer */}
            <div className="mt-12 mb-4">
              <a 
                href="https://www.kmcn.vip/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-gray-400 hover:text-km-red transition-colors flex items-center justify-center gap-2 group"
              >
                <span>马伽术教学（全系技术教学+马伽术教官培训）</span>
                <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-km-red transition-colors" />
              </a>
            </div>

            <div className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
                &copy; 2026 KMCN | KRAV MAGA ELITE TRAINING
            </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedTheme && (
        <DetailView 
          theme={selectedTheme} 
          onClose={() => setSelectedTheme(null)} 
          isMilitary={isMilitary}
        />
      )}
      
      {showProfile && (
        <UserProfile onClose={() => setShowProfile(false)} />
      )}

      {/* CTA Footer */}
      <div className={`fixed bottom-0 w-full border-t p-4 z-30 bg-neutral-950/95 backdrop-blur border-neutral-800`}>
        <div className="max-w-7xl mx-auto flex justify-end sm:justify-between items-center">
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-gray-400">KMCN 以色列马伽术认证专家</p>
            <p className="text-sm font-bold text-gray-200">联系教官报名: 13424247185</p>
          </div>
          <button className={`px-10 py-3 rounded font-black uppercase tracking-wider text-white shadow-lg transform active:scale-95 transition bg-km-red hover:bg-red-600 hover:shadow-red-900/50`}>
            立即预约主题训练
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;
