import React from 'react';
import { Theme } from '../types';
import { Shield, Sword, ArrowRight, BarChart } from 'lucide-react';

interface Props {
  theme: Theme;
  onClick: (theme: Theme) => void;
  isMilitary: boolean;
}

const ThemeCard: React.FC<Props> = ({ theme, onClick, isMilitary }) => {
  // Difficulty Color Mapping
  const difficultyColors = {
    'BEGINNER': 'bg-green-900/50 text-green-400 border-green-800',
    'INTERMEDIATE': 'bg-yellow-900/50 text-yellow-400 border-yellow-800',
    'ADVANCED': 'bg-red-900/50 text-red-400 border-red-800'
  };

  const difficultyLabel = {
    'BEGINNER': '基础入门',
    'INTERMEDIATE': '进阶实战',
    'ADVANCED': '高阶专家'
  };

  // Safe access for tags: Ensure it falls back to empty array if undefined
  const tags = theme.tags || [];

  return (
    <div 
      onClick={() => onClick(theme)}
      className={`
        relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-500 group
        bg-km-card border-neutral-800
        hover:border-km-red/50 hover:scale-[1.02] hover:-translate-y-1
        hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.25)]
      `}
    >
      {/* Subtle Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-km-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Accent Header Line */}
      <div className={`h-1 w-full transition-all duration-500 ${isMilitary ? 'bg-km-darkred group-hover:bg-red-700' : 'bg-km-red group-hover:bg-red-500'}`} />
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        {/* Top Row: Icon & ID */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex gap-2">
            <div className={`p-2.5 rounded-lg bg-neutral-900/80 border border-neutral-800 group-hover:border-km-red/30 transition-colors duration-300`}>
              {theme.category === 'MILITARY' 
                ? <Sword className={`w-6 h-6 text-km-red`} />
                : <Shield className="w-6 h-6 text-white group-hover:text-km-red transition-colors duration-300" />
              }
            </div>
            {/* Difficulty Badge */}
            <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center border ${difficultyColors[theme.difficulty]}`}>
              <BarChart className="w-3 h-3 mr-1" />
              {difficultyLabel[theme.difficulty]}
            </div>
          </div>

          <span className={`text-[10px] font-black tracking-widest px-2 py-1 rounded bg-neutral-950 text-neutral-500 border border-neutral-900 group-hover:text-km-red/80 group-hover:border-km-red/20 transition-colors duration-300`}>
            #{theme.id.toUpperCase()}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-black mb-3 leading-tight tracking-tight text-gray-100 group-hover:text-white transition-colors duration-300`}>
          {theme.title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm font-normal mb-6 line-clamp-3 text-gray-500 group-hover:text-gray-400 leading-relaxed transition-colors duration-300 flex-grow`}>
          {theme.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className={`text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-neutral-900 text-gray-500 border border-neutral-800 group-hover:border-neutral-700 transition-colors`}>
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Link */}
        <div className={`flex items-center text-sm font-bold text-km-red tracking-wide mt-auto pt-4 border-t border-transparent group-hover:border-white/5 transition-colors duration-500`}>
          查看训练计划
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;