"use client"
import React from 'react'
import { Lightbulb, Volume2 } from 'lucide-react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  if (!mockInterviewQuestion || mockInterviewQuestion.length === 0) {
    return <div>No questions available.</div>;
  }
   const textToSpeech=(text)=>{
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech)
    }
    else{
      alert("Sorry!!, Your browser does not support text to speech");
    }
   }
  return (
    <div className="p-5 border rounded-lg m-5 w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion&&mockInterviewQuestion.map((question, index) => (
          <h2  
            key={index} 
            className={`p-2  border font-semibold rounded-full text-sm md:text-sm text-center cursor-pointer ${activeQuestionIndex==index&&'bg-[#5879f0] text-white'}`}>
            Question #{index + 1}
          </h2>
        ))}
      </div>
      <h2 className="my-5 text-black text-md md:text-lg">{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
       <Volume2 className="cursor-pointer" onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
      <div className="border rounded-lg p-5 bg-blue-100 mt-20">
        <h2 className="flex gap-2 items-center text-[#4B70F5]">
          <Lightbulb /> 
          
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-[#4B70F5] my-2">{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>
    </div>
  );
}

export default QuestionsSection;
