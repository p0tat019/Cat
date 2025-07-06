
import React, { useState, useEffect, useCallback } from 'react';
import { PersonalityResultType } from '../types';
import { getPersonalityAnalysis } from '../services/geminiService';

interface ResultScreenProps {
  resultType: PersonalityResultType;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ resultType, onRestart }) => {
  const [analysis, setAnalysis] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnalysis = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const resultText = await getPersonalityAnalysis(resultType);
      setAnalysis(resultText);
    } catch (err) {
      console.error(err);
      setError("결과를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  }, [resultType]);

  useEffect(() => {
    fetchAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const parseAnalysis = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const title = lines.find(line => line.startsWith('너의 이름은:'))?.replace('너의 이름은:', '').trim() || '';
    const summary = lines.find(line => line.startsWith('핵심 기억:'))?.replace('핵심 기억:', '').trim() || '';
    const description = lines.find(line => line.startsWith('너의 모습:'))?.replace('너의 모습:', '').trim() || '';
    const adventure = lines.find(line => line.startsWith('다음에 꿀 꿈:'))?.replace('다음에 꿀 꿈:', '').trim() || '';
    return { title, summary, description, adventure };
  };

  const { title, summary, description, adventure } = parseAnalysis(analysis);

  const handleShare = () => {
      const shareText = `나의 잃어버린 기억을 찾았어요! 나의 이름은 "${title}"이래요.\n\n"${summary}"\n\n당신은 어떤 고양이인가요? 지금 바로 확인해보세요!`;
      const shareUrl = window.location.href;
      if (navigator.share) {
        navigator.share({
            title: '기억을 찾아 떠나는 고양이의 꿈',
            text: shareText,
            url: shareUrl,
        });
      } else {
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("결과가 클립보드에 복사되었습니다!");
      }
  };

  return (
    <div className="bg-black bg-opacity-40 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700 animate-fade-in">
      {isLoading ? (
        <div className="text-center py-10">
          <i className="fas fa-spinner fa-spin text-4xl text-orange-300"></i>
          <p className="mt-4 text-lg">기억을 되찾는 중입니다...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10 text-red-400">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div className="text-center">
            <p className="text-orange-300 font-semibold mb-2">당신이 되찾은 기억</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-lg text-gray-400 mb-6">{`#${resultType.courage} #${resultType.wisdom} #${resultType.relationship}`}</p>
          </div>

          <div className="space-y-6 text-left">
            <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-xl italic text-gray-200">"{summary}"</p>
            </div>
             <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-purple-300 mb-2 flex items-center"><i className="fas fa-cat mr-2"></i>너의 모습</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
             <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="font-bold text-lg text-yellow-300 mb-2 flex items-center"><i className="fas fa-cloud-moon mr-2"></i>다음에 꿀 꿈</h3>
                <p className="text-gray-300 leading-relaxed">{adventure}</p>
            </div>
          </div>

          <div className="my-8 p-4 text-center bg-gray-700 rounded-lg text-gray-400 text-sm">
            이 꿈의 세계를 후원해주세요. (광고 영역 Placeholder)
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={handleShare} className="w-full flex-1 bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fas fa-share-alt"></i> 결과 공유하기
            </button>
            <button onClick={onRestart} className="w-full flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <i className="fas fa-redo"></i> 다시 꿈꾸기
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultScreen;
