"use client"
import React from 'react'
import { Lightbulb, Volume2 } from 'lucide-react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  if (!mockInterviewQuestion || mockInterviewQuestion.length === 0) {
    return <div className="text-2xl my-20">Please Wait for Questions</div>;
  }

  const textToSpeech = (text) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry!!, Your browser does not support text to speech");
    }
  }

  // Get the current question text (accessing the Question property specifically)
  const currentQuestion = mockInterviewQuestion[activeQuestionIndex]?.Question || '';

  return (
    <div className="p-5 border rounded-lg m-5 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion.map((question, index) => (
          <h2 
            key={index} 
            className={`p-1 border font-semibold rounded-full text-sm md:text-sm text-center cursor-pointer ${activeQuestionIndex === index ? 'bg-blue-500 text-white' : ''}`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>
      
      <div className="my-5 text-black">
        <h2 className="text-md md:text-sm font-medium">
          {currentQuestion}
        </h2>
        {currentQuestion && (
          <Volume2 
            className="mt-2 cursor-pointer" 
            onClick={() => textToSpeech(currentQuestion)}
          />
        )}
      </div>
      
      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-blue-600">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-blue-600 my-2">
          {process.env.NEXT_PUBLIC_QUESTION_NOTE || 'Note information not available'}
        </h2>
      </div>
    </div>
  );
}

export default QuestionsSection;