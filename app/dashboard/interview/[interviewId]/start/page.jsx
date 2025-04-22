"use client";
import React, { useEffect, useState } from "react";

import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import QuestionsSection from "./_components/QuestionsSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <QuestionsSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        <div className="flex flex-col items-center mt-5">
          <RecordAnswerSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
          <div className="flex justify-center gap-2 ">
            {activeQuestionIndex > 0 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
                className="bg-[#4B70F5] text-white hover:text-black hover:bg-secondary"
              >
                Previous Question
              </Button>
            )}
            {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
              <Button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
                className="bg-[#4B70F5] text-white hover:text-black hover:bg-secondary"
              >
                Next Question
              </Button>
            )}
            {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
              <Link href={'/dashboard/interview/' + interviewData?.mockId + "/feedback"}>
                <Button className="bg-red-600 font-[500] text-white hover:text-black hover:bg-red-500">
                  End Interview
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
