import React, { useState, useEffect, useRef, useMemo } from 'react';
import { generateQuiz } from '../utils/quizGenerator';
import { Brain, ArrowRight, RefreshCw, X, Check, Lightbulb } from 'lucide-react';
import gsap from 'gsap';

const QuizInterface = ({ topic }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const questions = useMemo(() => {
    if (!topic) return [];
    return generateQuiz(topic);
  }, [topic]);

  useEffect(() => {
    // Entrance animation on mount (which happens on every topic change due to key prop)
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
    gsap.fromTo(containerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
  };

  const handleAnswer = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questions[currentQ].answer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    // Card exit animation
    gsap.to(cardRef.current, {
      x: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        if (currentQ < questions.length - 1) {
          setCurrentQ(c => c + 1);
          setSelectedOption(null);
          setIsAnswered(false);
          // Card enter animation
          gsap.fromTo(cardRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
        } else {
          setShowResult(true);
        }
      }
    });
  };

  if (!topic) return null;
  if (questions.length === 0) return (
     <div className="flex flex-col items-center justify-center h-[50vh] text-subtle">
        <Brain className="w-12 h-12 mb-4 opacity-50" />
        <p>No quiz data available.</p>
     </div>
  );

  if (showResult) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center">
        <div className="relative bg-surface p-12 rounded-2xl border-2 border-ink shadow-hard">
          <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl font-bold">
            {Math.round((score / questions.length) * 100)}%
          </div>
          
          <h2 className="text-4xl font-serif font-bold text-ink mb-4">Quiz Finished</h2>
          <p className="text-subtle mb-10 text-lg">You scored {score} out of {questions.length}</p>

          <button 
            onClick={resetQuiz} 
            className="w-full flex items-center justify-center gap-2 bg-ink text-white px-8 py-4 rounded-xl font-bold hover:bg-accent transition-colors duration-300"
          >
            <RefreshCw className="w-5 h-5" />
            Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQ];
  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div ref={containerRef} className="max-w-2xl mx-auto py-12 px-6">
      
      {/* Header Info */}
      <div className="flex justify-between items-end mb-8 text-sm font-bold uppercase tracking-widest text-subtle">
        <span>Question {currentQ + 1} <span className="text-gray-300">/</span> {questions.length}</span>
        <span>Score: {score}</span>
      </div>

      <div className="w-full bg-black/5 h-1 mb-12">
        <div className="bg-accent h-full transition-all duration-700 ease-in-out" style={{ width: `${progress}%` }} />
      </div>
      
      <div ref={cardRef} className="relative group perspective-1000">
        {/* Shadow Element */}
        <div className="absolute inset-0 bg-ink translate-x-3 translate-y-3 rounded-2xl transition-transform duration-300" />
        
        {/* Main Card */}
        <div className="relative bg-surface rounded-2xl border-2 border-ink p-8 md:p-12">
            
          <h3 className="text-2xl md:text-3xl font-serif font-medium leading-relaxed text-ink mb-10">
            {question.question}
          </h3>
          
          <div className="space-y-4">
            {question.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === question.answer;
              
              let containerClass = "border-2 border-black/10 hover:border-black/30 hover:bg-black/5";
              let icon = null;

              if (isAnswered) {
                if (isCorrect) {
                  containerClass = "border-green-500 bg-green-50 text-green-800";
                  icon = <Check className="w-5 h-5" />;
                } else if (isSelected) {
                  containerClass = "border-red-500 bg-red-50 text-red-800";
                  icon = <X className="w-5 h-5" />;
                } else {
                    containerClass = "border-black/5 opacity-40 grayscale";
                }
              } else if (isSelected) {
                containerClass = "border-accent bg-accent/5 text-accent";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  className={`w-full p-5 text-left rounded-xl transition-all duration-300 font-medium relative flex items-center justify-between ${containerClass}`}
                >
                  <span className="text-lg">{option}</span>
                  {icon}
                </button>
              );
            })}
          </div>

          {/* Explanation Section - Shows after answer selection */}
          {isAnswered && question.explanation && (
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-amber-800 mb-2 text-lg">Explanation</h4>
                  <p className="text-amber-900 leading-relaxed">
                    {selectedOption === question.answer
                      ? question.explanation.correct
                      : question.explanation.incorrect?.[selectedOption] || question.explanation.correct
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex justify-end">
             <button 
                onClick={nextQuestion} 
                disabled={!isAnswered}
                className={`group flex items-center gap-3 text-lg font-bold transition-all ${
                    isAnswered 
                        ? 'text-ink hover:gap-5' 
                        : 'text-gray-300 cursor-not-allowed'
                }`}
            >
                {currentQ === questions.length - 1 ? 'Finish' : 'Next'}
                <ArrowRight className={`w-6 h-6 ${isAnswered ? 'text-accent' : ''}`} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizInterface;