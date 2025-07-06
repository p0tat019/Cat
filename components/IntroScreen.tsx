
import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center bg-black bg-opacity-40 p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700 animate-fade-in">
      <div className="mb-6">
        <i className="fas fa-paw text-7xl text-orange-300 animate-pulse"></i>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">기억을 찾아 떠나는 고양이의 꿈</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
        눈을 떠보니, 당신은 기억을 잃은 작은 고양이입니다.
        <br />
        꿈 속 세계에서의 선택들이 당신의 진짜 모습을 보여줄 거예요.
        <br />
        당신은 어떤 고양이였을까요?
      </p>
      <button
        onClick={onStart}
        className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30"
      >
        여정 시작하기
      </button>
    </div>
  );
};

export default IntroScreen;
