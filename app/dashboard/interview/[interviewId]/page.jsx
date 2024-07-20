"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, Loader2, WebcamIcon } from "lucide-react";
import Link from "next/link";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  
  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    
    setInterviewData(result[0]);
  };

  if (!interviewData) {
    return <div className="text-5xl flex items-center justify-center my-20 font-bold">Loading.....</div>;
  }

  return (
    <div className="flex flex-col justify-center my-10 items-center">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg"><strong>Job Position/Job Role:</strong> {interviewData.jobPosition}</h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech Stack:</strong> {interviewData.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years Of Experience:</strong> {interviewData.jobExperience}
            </h2>
          </div>

          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-50">
            <h2 className="flex gap-2 items-center text-yellow-500"><Lightbulb/><strong>Information</strong></h2> 
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>

        <div className="my-5">
          {webCamEnabled ? 
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{
                height: 400,
                width: 600,
              }}
            />
           : 
            <>
              <WebcamIcon className="h-72 w-full my-7 p-20 bg-secondary rounded-lg border" /> 
              <Button
                className="bg-[#4B70F5] text-white hover:text-black hover:bg-secondary w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam And Microphone
              </Button>
            </>
           }
        </div>
      </div>

      <div className="flex justify-center  items-center">
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button className="bg-red-600 font-[500] text-white hover:text-black hover:bg-red-600 hover:scale-105">
            Start Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
