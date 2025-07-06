
import React from 'react';

const AnalysisScreen: React.FC = () => {
  return (
    <div className="text-center bg-black bg-opacity-40 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700">
      <div className="flex justify-center items-center mb-6 space-x-3">
        <i className="fas fa-cat text-6xl text-orange-300 animate-pulse"></i>
        <i className="fas fa-puzzle-piece text-5xl text-sky-300 animate-pulse [animation-delay:0.2s]"></i>
        <i className="fas fa-heart text-6xl text-red-300 animate-pulse [animation-delay:0.4s]"></i>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">흩어진 기억 조각을 맞추는 중...</h2>
      <p className="text-lg text-gray-300">당신이 어떤 고양이였는지 알아보고 있습니다.</p>
      <div className="w-full max-w-xs mx-auto bg-gray-700 rounded-full h-2.5 mt-8 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2.5 rounded-full animate-loading-bar"></div>
        <style>{`
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-loading-bar {
            animation: loading-bar 1.5s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default AnalysisScreen;
