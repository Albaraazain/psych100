// Quiz generator that uses handcrafted questions from topic data
export const generateQuiz = (topic) => {
  if (!topic) return [];
  
  // If the topic has handcrafted questions, use those
  if (topic.questions && Array.isArray(topic.questions) && topic.questions.length > 0) {
    // Shuffle the questions and return them
    return topic.questions
      .map(q => ({
        question: q.question,
        answer: q.answer,
        options: q.options || [],
        explanation: q.explanation || null
      }))
      .filter(q => q.question && q.answer && q.options.length >= 2)
      .sort(() => 0.5 - Math.random());
  }
  
  // Fallback: return empty array if no questions found
  return [];
};
