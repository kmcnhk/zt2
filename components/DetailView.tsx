import React, { useState, useEffect } from 'react';
import { Theme, Technique } from '../types';
import { X, CheckCircle, Flame, BrainCircuit, Activity } from 'lucide-react';
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
    const drill = await generateDrill(tech.name, isMilitary ? 'HIGH' : 'LOW', theme.category);
    setAiDrill(drill);
    setLoading(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
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
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/90 to-black/50" />

          <div className={`p-8 relative z-10`}>
            {/* Improved Close Button */}
            <button 
              onClick={onClose} 
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/40 hover:bg-km-red transition-all duration-300 text-gray-300 hover:text-white backdrop-blur border border-white/10 group shadow-lg"
              title="Close (Esc)"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 rounded text-xs font-bold tracking-widest mb-3 bg-km-red text-white shadow-lg`}>
                  {theme.category === 'MILITARY' ? '军警战术模块' : '民用防卫模块'}
                </span>
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
            
            {/* Generator Box */}
            <div className={`p-4 rounded-xl border border-neutral-800 bg-neutral-900 shadow-inner`}>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-bold flex items-center text-gray-200">
                  <BrainCircuit className="w-4 h-4 mr-2 text-km-red" /> 
                  KMCN 数字教官: 训练方案生成
                </h4>
              </div>
              
              {!selectedTechnique && !loading && (
                <p className="text-xs text-gray-500">点击下方技术旁边的 <span className="text-km-red font-bold">"生成训练"</span> 按钮，获取该技术的专属 Drill 训练方案。</p>
              )}

              {loading && (
                <div className="animate-pulse flex flex-col space-y-3 py-2">
                  <div className="h-2 bg-neutral-800 rounded w-1/3"></div>
                  <div className="h-2 bg-neutral-800 rounded w-full"></div>
                  <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
                </div>
              )}

              {aiDrill && !loading && (
                <div className="text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/5">
                     <p className="font-black text-white text-base">{aiDrill.drillName}</p>
                     <span className="text-[10px] uppercase bg-white/10 px-2 py-0.5 rounded text-gray-400">Drill Module</span>
                  </div>
                  
                  <div className="mb-3 text-xs text-gray-400 bg-black/20 p-2 rounded border border-white/5">
                    <span className="font-bold text-gray-300">器材设置: </span>
                    {aiDrill.setup}
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 mb-3">
                    {aiDrill.instructions.map((step: string, idx: number) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-km-red font-bold shrink-0">{idx + 1}.</span>
                        <span>{step.replace(/^\d+\.\s*/, '')}</span> {/* Remove existing numbers if generic template adds them, to avoid double numbering */}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-xs flex items-center gap-2 text-red-400/80 font-bold bg-red-950/10 p-2 rounded border border-red-900/20">
                    <Activity className="w-3 h-3" />
                    压力因素: {aiDrill.stressFactor}
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
                      <td className="px-4 py-3 font-bold text-gray-200 w-1/3">{t.name}</td>
                      <td className={`px-4 py-3 text-xs text-gray-500`}>{t.details}</td>
                      <td className="px-4 py-3 text-right">
                        <button 
                          onClick={() => handleGenerateDrill(t)}
                          className={`text-[10px] font-bold px-3 py-1.5 rounded border border-neutral-700 bg-neutral-800 text-gray-400 hover:bg-km-red hover:text-white hover:border-km-red transition-all whitespace-nowrap shadow-sm`}
                        >
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
          <span>课程格式: 线上视频课程 + 6节线下实战课 (90分钟/节)</span>
          <span className="font-bold text-gray-300">考核通过后颁发官方证书</span>
        </div>
      </div>
    </div>
  );
};

export default DetailView;