import React, { useState, useEffect } from 'react';
import { Theme, Technique } from '../types';
import { X, CheckCircle, Flame, BrainCircuit, Activity, ClipboardList, Zap, ShieldAlert, AlertTriangle, BarChart3 } from 'lucide-react';
import { generateDrill } from '../services/gemini';

interface Props {
  theme: Theme;
  onClose: () => void;
  isMilitary: boolean;
}

const DetailView: React.FC<Props> = ({ theme, onClose, isMilitary }) => {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null);
  const [aiDrill, setAiDrill] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  // Unified Black/Red styling
  const accentColor = 'text-km-red';
  const borderColor = 'border-neutral-800';
  const tableHeadBg = 'bg-neutral-900';
  const rowHover = 'hover:bg-neutral-800';

  // Add Escape key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleGenerateDrill = async (tech: Technique) => {
    setSelectedTechnique(tech);
    setLoading(true);
    setAiDrill(null);
    // Updated call signature to include technique details, theme title and difficulty
    const drill = await generateDrill(
      tech.name, 
      tech.details, 
      theme.title, 
      theme.difficulty, // Passing the difficulty level
      theme.category
    );
    setAiDrill(drill);
    setLoading(false);
  };

  const difficultyLabels = {
    'BEGINNER': '基础入门 (Beginner)',
    'INTERMEDIATE': '进阶实战 (Intermediate)',
    'ADVANCED': '高阶专家 (Advanced)'
  };

  const difficultyColor = {
    'BEGINNER': 'text-green-400',
    'INTERMEDIATE': 'text-yellow-400',
    'ADVANCED': 'text-red-500'
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        // Close when clicking the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className={`relative w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden bg-neutral-950 text-gray-200 border border-neutral-800 my-8`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside content from triggering close
      >
        
        {/* Header with Background Image */}
        <div className="relative border-b border-neutral-800">
          {/* Background Image - Adaptive Update */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop')`,
              opacity: 0.25
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/90 to-black/50" />

          <div className={`p-8 relative z-10`}>
            {/* Improved Close Button - FIXED on mobile, ABSOLUTE on desktop */}
            <button 
              onClick={onClose} 
              className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 z-[60] p-2 rounded-full bg-black/60 md:bg-black/40 hover:bg-km-red transition-all duration-300 text-gray-300 hover:text-white backdrop-blur border border-white/10 group shadow-lg"
              title="Close (Esc)"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold tracking-widest bg-km-red text-white shadow-lg`}>
                    {theme.category === 'MILITARY' ? '军警战术模块' : '民用防卫模块'}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded text-xs font-bold tracking-widest bg-black/60 border border-white/10 backdrop-blur ${difficultyColor[theme.difficulty]}`}>
                    <BarChart3 className="w-3 h-3 mr-1" />
                    {difficultyLabels[theme.difficulty]}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-white drop-shadow-lg">{theme.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 font-medium italic">
                  {theme.hooks.map((hook, i) => (
                    <span key={i} className="flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-km-red" /> {hook}</span>
                  ))}
                </div>
              </div>
              
              <div className={`p-5 rounded-lg bg-black/60 backdrop-blur border border-white/10 md:w-1/3 shadow-xl`}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-3 border-b border-white/10 pb-2">战术原则与意识</h4>
                <ul className="space-y-3">
                  {theme.principles.map((p, i) => (
                    <li key={i} className="text-sm flex items-start text-gray-200">
                      <span className={`mr-2 font-bold ${accentColor}`}>{i+1}.</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Scenarios Table */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold flex items-center ${accentColor}`}>
              <Activity className="w-5 h-5 mr-2" /> 危险场景与应对
            </h3>
            <div className={`rounded-lg border ${borderColor} overflow-hidden`}>
              <table className="w-full text-sm text-left">
                <thead className={`${tableHeadBg} uppercase text-xs font-bold text-gray-500`}>
                  <tr>
                    <th className="px-4 py-3">遭遇危险</th>
                    <th className="px-4 py-3">具体技术反应</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {theme.scenarios.map((s, i) => (
                    <tr key={i} className={`${rowHover} transition-colors`}>
                      <td className="px-4 py-3 font-medium text-gray-200">{s.danger}</td>
                      <td className={`px-4 py-3 text-gray-400`}>{s.response}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Techniques Table & AI */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold flex items-center ${accentColor}`}>
              <Flame className="w-5 h-5 mr-2" /> 核心技术库
            </h3>
            
            {/* AI Generator Box - REFACTORED LAYOUT */}
            <div className={`p-5 rounded-xl border border-neutral-800 bg-neutral-900 shadow-inner`}>
              <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-2">
                <h4 className="text-base font-bold flex items-center text-gray-200">
                  <BrainCircuit className="w-5 h-5 mr-2 text-km-red" /> 
                  AI 战术教官: 专项训练生成器
                </h4>
                {selectedTechnique && !loading && (
                   <span className="text-xs text-km-red font-mono px-2 py-1 bg-km-red/10 rounded border border-km-red/20">
                     TARGET: {selectedTechnique.name}
                   </span>
                )}
              </div>
              
              {!selectedTechnique && !loading && (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-2">请从下方列表点击 <span className="text-km-red">“生成训练”</span> 按钮。</p>
                  <p className="text-xs opacity-70">AI教官将根据 <span className={difficultyColor[theme.difficulty]}>{difficultyLabels[theme.difficulty]}</span> 级别生成教案。</p>
                </div>
              )}

              {loading && (
                <div className="py-8 space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-km-red animate-pulse">
                     <BrainCircuit className="w-6 h-6" />
                     <span className="font-bold tracking-widest uppercase">Analyzing Tactics ({theme.difficulty})...</span>
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <div className="h-2 bg-neutral-800 rounded w-full"></div>
                    <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
                    <div className="h-2 bg-neutral-800 rounded w-4/6"></div>
                  </div>
                </div>
              )}

              {aiDrill && !loading && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                  {/* Drill Title & Setup */}
                  <div>
                    <h3 className="text-lg font-black text-white mb-2">{aiDrill.drillName}</h3>
                    <div className="flex items-start text-xs text-gray-400 bg-black/30 p-2 rounded border border-neutral-800">
                      <ClipboardList className="w-4 h-4 mr-2 shrink-0 text-gray-500" />
                      <span><strong className="text-gray-300">训练准备:</strong> {aiDrill.setup}</span>
                    </div>
                  </div>

                  {/* Phases */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800">
                       <h5 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center">
                         <ShieldAlert className="w-3 h-3 mr-1" /> 阶段一: 动作分解
                       </h5>
                       <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">{aiDrill.phase1_technical}</p>
                    </div>
                    <div className="bg-neutral-950 p-3 rounded border border-neutral-800">
                       <h5 className="text-xs font-bold text-km-red uppercase tracking-wider mb-2 flex items-center">
                         <Zap className="w-3 h-3 mr-1" /> 阶段二: 压力模拟
                       </h5>
                       <p className="text-sm text-gray-300 whitespace-pre-wrap leading-relaxed">{aiDrill.phase2_stress}</p>
                    </div>
                  </div>

                  {/* Critical Checkpoints */}
                  <div className="bg-yellow-900/10 border border-yellow-700/30 p-3 rounded">
                    <h5 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-1 flex items-center">
                       <AlertTriangle className="w-3 h-3 mr-1" /> 教官视角 (Critical Points)
                    </h5>
                    <p className="text-xs text-yellow-200/80">{aiDrill.critical_checkpoints}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Tech List */}
            <div className={`rounded-lg border ${borderColor} overflow-hidden h-64 overflow-y-auto custom-scrollbar`}>
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-neutral-800">
                  {theme.techniques.map((t, i) => (
                    <tr key={i} className={`${rowHover} transition-colors group`}>
                      <td className="px-4 py-3">
                         <div className="font-bold text-gray-200">{t.name}</div>
                         <div className="text-[10px] text-gray-500 mt-0.5">{t.details}</div>
                      </td>
                      <td className="px-4 py-3 text-right align-middle">
                        <button 
                          onClick={() => handleGenerateDrill(t)}
                          className={`
                            text-xs font-bold px-3 py-1.5 rounded-full border border-neutral-700 
                            text-gray-400 bg-neutral-900
                            hover:bg-km-red hover:text-white hover:border-km-red hover:shadow-[0_0_10px_rgba(220,38,38,0.5)]
                            active:scale-95 transition-all whitespace-nowrap flex items-center ml-auto
                          `}
                        >
                          <BrainCircuit className="w-3 h-3 mr-1" />
                          生成训练
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className={`p-4 border-t ${borderColor} bg-neutral-900 flex justify-between text-xs text-gray-500`}>
          <span>课程格式: 线上视频课程 + 6节线下实战课 (70分钟/节)</span>
          <span className="font-bold text-gray-300">考核通过后颁发官方证书</span>
        </div>
      </div>
    </div>
  );
};

export default DetailView;