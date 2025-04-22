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
            style={{
              padding: '0.25rem',  // Equivalent to p-1 in Tailwind
              border: '1px solid #ccc',  // Equivalent to border in Tailwind
              fontWeight: '600',  // Equivalent to font-semibold in Tailwind
              borderRadius: '9999px',  // Equivalent to rounded-full in Tailwind
              fontSize: '0.875rem',  // Equivalent to text-sm in Tailwind
              textAlign: 'center',  // Equivalent to text-center in Tailwind
              cursor: 'pointer',  // Equivalent to cursor-pointer in Tailwind
              backgroundColor: activeQuestionIndex === index ? '#3b82f6' : '',  // bg-blue-500 when active
              color: activeQuestionIndex === index ? '#ffffff' : '',  // text-white when active
            }}
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