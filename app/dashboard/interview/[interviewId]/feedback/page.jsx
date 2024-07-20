"use client";

import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const Feedback = ({ params }) => {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);
    console.log(result);

    setFeedbackList(result);
  };

  return (
    <div className="p-10 flex gap-1 flex-col">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">
          <span className="text-red-600 text-xl">Oops..</span>No Interview
          Feedback record found!
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">
            Congratulations! 🎉
          </h2>
          <h2 className="font-bold text-2xl">
            Here is your Interview Feedback
          </h2>
          <h2 className="text-[#4B70F5] text-lg my-3">
            Your overall interview rating: <strong>7/10</strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview questions with correct answers, your answers,
            and feedback for improvement.
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-3">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-5 w-full">
                  {item.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-red-500 border rounded-lg p-2">
                      <strong>Rating:</strong> {item.rating}
                    </h2>
                    <h2 className="text-sm text-red-900 bg-red-50 border rounded-lg p-2">
                      <strong>Your Answer:</strong> {item.userAns}
                    </h2>
                    <h2 className="text-sm text-green-900 bg-green-50 border rounded-lg p-2">
                      <strong>Correct Answer:</strong> {item.correctAns}
                    </h2>
                    <h2 className="text-sm text-[#4B70F5] bg-blue-50 border rounded-lg p-2">
                      <strong>Feedback:</strong> {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}
      <div>
        <Button
          className="bg-[#4B70F5]  text-white hover:text-black hover:bg-secondary mt-2"
          onClick={() => router.replace("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
