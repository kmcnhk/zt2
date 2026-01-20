
import React, { useState, useEffect } from 'react';
import { X, User, BookOpen, Award, CreditCard, Settings, Shield, Edit2, Save, LogOut, Camera } from 'lucide-react';
import { THEMES } from '../data';
import { Theme } from '../types';

interface Props {
  onClose: () => void;
}

interface UserData {
  name: string;
  id: string;
  avatar: string;
}

const UserProfile: React.FC<Props> = ({ onClose }) => {
  // --- State Management ---
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "学员 007",
    id: "KMCN-8848", // Generate or read strictly once
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"
  });
  const [myCourses, setMyCourses] = useState<Theme[]>([]);

  // --- Load Data from LocalStorage on Mount ---
  useEffect(() => {
    // 1. Load Profile
    const savedProfile = localStorage.getItem('kmcn_user_profile');
    if (savedProfile) {
      setUserData(JSON.parse(savedProfile));
    } else {
      // Initialize random ID if first time
      const randomId = `KMCN-${Math.floor(1000 + Math.random() * 9000)}`;
      setUserData(prev => ({ ...prev, id: randomId }));
    }

    // 2. Load Unlocked Courses (Real Data Integration)
    // This reads the same key used in DetailView.tsx
    const unlockedIds = JSON.parse(localStorage.getItem('kmcn_unlocked_themes') || '[]');
    const unlockedThemes = THEMES.filter(theme => unlockedIds.includes(theme.id));
    setMyCourses(unlockedThemes);

  }, []);

  // --- Handlers ---
  const handleSaveProfile = () => {
    localStorage.setItem('kmcn_user_profile', JSON.stringify(userData));
    setIsEditing(false);
  };

  const handleChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleClearData = () => {
    if (window.confirm("确定要注销并清除所有本地数据（包括解锁课程）吗？此操作无法撤销。")) {
      localStorage.removeItem('kmcn_user_profile');
      localStorage.removeItem('kmcn_unlocked_themes');
      window.location.reload();
    }
  };

  // --- Dynamic Level Logic ---
  const getLevelInfo = () => {
    const hasMil = myCourses.some(c => c.category === 'MILITARY');
    const hasInst = myCourses.some(c => c.category === 'INSTRUCTOR');
    const count = myCourses.length;

    if (hasInst) return { label: "P1 教官候选人", color: "from-amber-600 to-yellow-500", iconColor: "text-amber-100" };
    if (hasMil) return { label: "G1 战术队员", color: "from-red-700 to-red-500", iconColor: "text-red-100" };
    if (count > 3) return { label: "P3 高级练习者", color: "from-blue-700 to-blue-500", iconColor: "text-blue-100" };
    return { label: "C1 初级练习者", color: "from-neutral-700 to-neutral-500", iconColor: "text-gray-300" };
  };

  const levelInfo = getLevelInfo();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-neutral-900 w-full max-w-md rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        
        {/* --- Header / Cover --- */}
        <div className="relative h-32 bg-gradient-to-r from-km-red/30 via-neutral-900 to-neutral-900 shrink-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          
          {/* Avatar Section */}
          <div className="absolute -bottom-12 left-6 group">
            <div className={`w-24 h-24 rounded-full border-4 border-neutral-900 overflow-hidden bg-neutral-800 shadow-xl relative ${isEditing ? 'ring-2 ring-km-red cursor-pointer' : ''}`}>
              <img 
                src={userData.avatar} 
                alt="Avatar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                onError={(e) => e.currentTarget.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"}
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                   <Camera className="w-6 h-6 text-white opacity-80" />
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-white/10 rounded-full text-white transition-colors border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* --- Main Info --- */}
        <div className="pt-14 px-6 pb-4 shrink-0">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1 mr-4">
              {isEditing ? (
                <div className="space-y-2 animate-in fade-in slide-in-from-left-2">
                  <input 
                    type="text" 
                    value={userData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-1.5 text-sm font-bold text-white focus:border-km-red outline-none"
                    placeholder="输入昵称"
                  />
                  <input 
                    type="text" 
                    value={userData.avatar}
                    onChange={(e) => handleChange('avatar', e.target.value)}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded px-3 py-1.5 text-xs text-gray-400 focus:border-km-red outline-none"
                    placeholder="头像 URL (https://...)"
                  />
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black text-white flex items-center tracking-tight truncate">
                    {userData.name}
                  </h2>
                  <p className="text-xs text-km-red font-bold tracking-widest uppercase mt-1 flex items-center gap-1">
                    ID: {userData.id}
                  </p>
                </>
              )}
            </div>

            {/* Edit / Save Toggle */}
            <button 
              onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
              className={`p-2 rounded-lg border transition-all duration-300 flex items-center justify-center
                ${isEditing 
                  ? 'bg-green-600/20 border-green-500/50 text-green-400 hover:bg-green-600/30' 
                  : 'bg-neutral-800 border-neutral-700 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Badge */}
          <div className="mb-6">
             <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r ${levelInfo.color} border border-white/10 text-xs font-bold shadow-lg text-white`}>
                <Shield className={`w-3.5 h-3.5 ${levelInfo.iconColor}`} />
                {levelInfo.label}
             </span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-2">
            <div className="bg-neutral-800/40 p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:bg-neutral-800/60 transition-colors">
              <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">{myCourses.length}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-1">解锁课程</div>
              </div>
            </div>
            <div className="bg-neutral-800/40 p-4 rounded-xl border border-white/5 flex items-center gap-4 group hover:bg-neutral-800/60 transition-colors">
              <div className="p-2.5 bg-yellow-500/10 rounded-lg text-yellow-500 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-black text-white leading-none">0</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mt-1">获得证书</div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Course List (Scrollable) --- */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-2 border-t border-white/5 bg-black/20">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center sticky top-0 bg-[#121212] py-2 z-10">
            <CreditCard className="w-3.5 h-3.5 mr-2 text-km-red" /> 我的课程库 (Purchased)
          </h3>
          
          <div className="space-y-3 pb-4">
            {myCourses.length > 0 ? (
              myCourses.map((course, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-neutral-800 border border-white/5 hover:border-white/20 transition-colors group">
                  <div className="flex-1 min-w-0 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                       <span className={`w-1.5 h-1.5 rounded-full ${course.category === 'MILITARY' ? 'bg-red-500' : course.category === 'INSTRUCTOR' ? 'bg-amber-500' : 'bg-blue-500'}`}></span>
                       <div className="text-xs font-bold text-gray-500 uppercase">{course.category}</div>
                    </div>
                    <div className="text-sm font-bold text-gray-200 truncate group-hover:text-white transition-colors">{course.title}</div>
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded bg-green-900/30 text-green-400 border border-green-900/50 font-mono whitespace-nowrap">
                    已激活
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center border-2 border-dashed border-neutral-800 rounded-xl">
                <Shield className="w-8 h-8 text-neutral-700 mx-auto mb-3" />
                <p className="text-xs text-gray-500 font-bold">暂无解锁课程</p>
                <p className="text-[10px] text-gray-600 mt-1">请在课程详情页进行解锁</p>
              </div>
            )}
          </div>
        </div>

        {/* --- Footer Actions --- */}
        <div className="p-4 border-t border-white/5 bg-neutral-900 shrink-0 flex gap-3">
          <button 
            onClick={handleClearData}
            className="flex-1 py-3 rounded-lg bg-neutral-800 text-xs font-bold text-gray-400 hover:bg-red-900/20 hover:text-red-400 hover:border-red-900/50 border border-transparent transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" /> 注销/清除数据
          </button>
          <button className="flex-1 py-3 rounded-lg bg-km-red text-xs font-bold text-white hover:bg-red-600 transition-colors shadow-lg flex items-center justify-center gap-2">
            <Settings className="w-3.5 h-3.5" /> 客服支持
          </button>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
