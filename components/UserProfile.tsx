import React from 'react';
import { X, User, BookOpen, Award, CreditCard, Settings, Shield } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const UserProfile: React.FC<Props> = ({ onClose }) => {
  // Mock User Data
  const user = {
    name: "学员 007",
    id: "KMCN-8848",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60",
    purchasedCourses: [
      { title: "街头格斗终结者 (民用)", category: 'CIVILIAN', date: "2023-10-15", status: "已认证" },
      { title: "女子防身特辑 (民用)", category: 'CIVILIAN', date: "2023-11-20", status: "学习中" }
    ]
  };

  // Dynamic Level Logic based on purchase history (Mock)
  const getLevel = () => {
    const hasMil = user.purchasedCourses.some(c => c.category === 'MILITARY');
    const hasInst = user.purchasedCourses.some(c => c.category === 'INSTRUCTOR');
    
    if (hasInst) return "P1 教官候选人";
    if (hasMil) return "G1 战术队员";
    return "C1 练习者"; // Default changed from P1 to C1
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-neutral-900 w-full max-w-md rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-km-red/20 to-neutral-900">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          <div className="absolute -bottom-10 left-6">
            <div className="w-20 h-20 rounded-full border-4 border-neutral-900 overflow-hidden bg-neutral-800 shadow-xl">
              <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/30 hover:bg-white/10 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info */}
        <div className="pt-12 px-6 pb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-black text-white flex items-center">
                {user.name}
              </h2>
              <p className="text-xs text-km-red font-bold tracking-widest uppercase mt-1">ID: {user.id}</p>
            </div>
            <span className="px-3 py-1 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded border border-white/10 text-xs text-white font-bold shadow flex items-center gap-1">
              <Shield className="w-3 h-3 text-km-red" />
              {getLevel()}
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-black/40 p-3 rounded border border-white/5 flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded text-blue-500">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-200">{user.purchasedCourses.length}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">已购课程</div>
              </div>
            </div>
            <div className="bg-black/40 p-3 rounded border border-white/5 flex items-center gap-3">
              <div className="p-2 bg-yellow-500/10 rounded text-yellow-500">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-200">1</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">获得证书</div>
              </div>
            </div>
          </div>

          {/* Course List */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-white/10 pb-2 flex items-center">
              <CreditCard className="w-4 h-4 mr-2" /> 我的课程
            </h3>
            <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
              {user.purchasedCourses.map((course, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded bg-neutral-800/50 border border-white/5 hover:border-white/10 transition-colors">
                  <div>
                    <div className="text-sm font-bold text-gray-200">{course.title}</div>
                    <div className="text-xs text-gray-500">{course.date}</div>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded font-bold ${
                    course.status === '已认证' ? 'bg-green-900/30 text-green-500' : 'bg-blue-900/30 text-blue-500'
                  }`}>
                    {course.status}
                  </span>
                </div>
              ))}
              <div className="p-3 text-center border border-dashed border-neutral-700 rounded text-xs text-gray-600">
                更多课程请前往主页浏览
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-8 pt-4 border-t border-white/5 flex gap-2">
            <button className="flex-1 py-2 rounded bg-neutral-800 text-xs font-bold text-gray-400 hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2">
              <Settings className="w-3 h-3" /> 账户设置
            </button>
            <button className="flex-1 py-2 rounded bg-km-red text-xs font-bold text-white hover:bg-red-600 transition-colors">
              联系客服
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;