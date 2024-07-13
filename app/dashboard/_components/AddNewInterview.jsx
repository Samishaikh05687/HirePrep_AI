"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { LoaderCircle } from "lucide-react";

const AddNewInterview = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const[loading,setLoading]=useState(false);
  const[jsonResponse,setJsonResponse]=useState([]);
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobDesc, jobExperience, jobPosition);

    const InputPromt =
      "Job Position: " +
      jobPosition +
      " ,Job Description: " +
      jobDesc +
      " , Years of Experience: " +
      jobExperience +
      ", Depends on this information please give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " Interview question with Answered in JSON Format, Give Question and Answered as field in JSON";
    const result = await chatSession.sendMessage(InputPromt);
    const MockJsonResp=(result.ressponse.text()).replace('```json','').replace('```','')
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);
    setLoading(false);  
};

  return (
    <div>
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell as about more your Job you are Interviewing{" "}
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add Details about your job Position/Role, Job description
                    and Year of Experience{" "}
                  </h2>
                  <div className="my-3 mt-7">
                    <label>Job Position/Job Role</label>
                    <Input
                      className="mt-2"
                      placeholder="EX. Full Stack Developer"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description / Tech Stack (In Breif)</label>
                    <Textarea
                      className="mt-2"
                      placeholder="EX. React, Angular, NodeJs , MySql Etc."
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="my-3 ">
                    <label>Year of Experience</label>
                    <Input
                      className="mt-2"
                      placeholder="EX. 5 years"
                      type="number"
                      required
                      onChange={(event) => setJobExperience(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit" disable={loading}
                    className="bg-[#4B70F5] text-white hover:text-black hover:bg-secondary"
                  
                  >
                    {loading?<> <LoaderCircle className="animate-spin"/>Generating from AI</>:'Start Interview'}
                    
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
