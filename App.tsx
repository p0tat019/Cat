
import React, { useState, useCallback } from 'react';
import { GameState, PersonalityScores, PersonalityResultType } from './types';
import { QUIZ_QUESTIONS } from './constants';
import IntroScreen from './components/IntroScreen';
import QuizScreen from './components/QuizScreen';
import AnalysisScreen from './components/AnalysisScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Intro);
  const [scores, setScores] = useState<PersonalityScores>({ courage: 0, wisdom: 0, relationship: 0 });
  const [finalResultType, setFinalResultType] = useState<PersonalityResultType | null>(null);

  const startQuiz = useCallback(() => {
    setScores({ courage: 0, wisdom: 0, relationship: 0 });
    setGameState(GameState.Quiz);
  }, []);

  const finishQuiz = useCallback((finalScores: PersonalityScores) => {
    setScores(finalScores);
    const result: PersonalityResultType = {
      courage: finalScores.courage > 0 ? '대담한' : '신중한',
      wisdom: finalScores.wisdom > 0 ? '논리적인' : '직관적인',
      relationship: finalScores.relationship > 0 ? '외향적인' : '내향적인',
    };
    setFinalResultType(result);
    setGameState(GameState.Analyzing);
    setTimeout(() => setGameState(GameState.Result), 3000); // Simulate analysis time
  }, []);

  const restartQuiz = useCallback(() => {
    setFinalResultType(null);
    setGameState(GameState.Intro);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case GameState.Intro:
        return <IntroScreen onStart={startQuiz} />;
      case GameState.Quiz:
        return <QuizScreen questions={QUIZ_QUESTIONS} onFinish={finishQuiz} />;
      case GameState.Analyzing:
        return <AnalysisScreen />;
      case GameState.Result:
        return finalResultType ? <ResultScreen resultType={finalResultType} onRestart={restartQuiz} /> : <IntroScreen onStart={startQuiz} />;
      default:
        return <IntroScreen onStart={startQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center p-4 font-sans antialiased">
      <div className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
