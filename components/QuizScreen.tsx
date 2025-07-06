
import React, { useState } from 'react';
import { Question, Choice, PersonalityScores } from '../types';

interface QuizScreenProps {
  questions: Question[];
  onFinish: (finalScores: PersonalityScores) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<PersonalityScores>({ courage: 0, wisdom: 0, relationship: 0 });
  const [isFading, setIsFading] = useState(false);

  const handleChoiceClick = (choice: Choice) => {
    setIsFading(true);
    setTimeout(() => {
      const newScores: PersonalityScores = {
        courage: scores.courage + choice.scores.courage,
        wisdom: scores.wisdom + choice.scores.wisdom,
        relationship: scores.relationship + choice.scores.relationship,
      };
      setScores(newScores);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsFading(false);
      } else {
        onFinish(newScores);
      }
    }, 300);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className={`bg-black bg-opacity-40 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700 transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="mb-6">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out' }}></div>
        </div>
        <p className="text-right text-sm text-gray-400 mt-1">질문 {currentQuestionIndex + 1} / {questions.length}</p>
      </div>
      
      <div className="text-center mb-8">
        <div className="mb-6 h-16 flex items-center justify-center">{currentQuestion.illustration}</div>
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">{currentQuestion.scenario}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoiceClick(choice)}
            className="w-full text-left p-4 bg-gray-800 bg-opacity-60 rounded-lg border-2 border-gray-600 hover:border-cyan-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:border-cyan-400"
          >
            <p className="font-semibold text-lg text-white">{choice.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
