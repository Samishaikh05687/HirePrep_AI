"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mic2, UserRoundPlus } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create an account in just a few minutes. It's quick and easy.",
      icon:'/user-round-plus.svg',
    },
    {
      title: "Customize Profile",
      description: "Personalize your profile to showcase your skills and experience.",
      icon:'/pencil-line.svg',
    },
    {
      title: "Start Practicing",
      description: "Access a wide range of mock interviews tailored to your needs.",
      icon: "/tv-minimal.svg",
    },
    {
      title: "Get Feedback",
      description: "Receive detailed feedback to help you improve your performance.",
      icon: "/clipboard-list.svg",
    },
    {
      title: "Ace the Interview",
      description: "Boost your confidence and ace your real interviews with ease.",
      icon: "/sparkles.svg",
    },
  ];

  return (
    <main className="min-h-screen w-full shadow-md shadow-black m-10 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 p-10">
      <section className="max-w-7xl mx-auto text-center py-10">
        <h1 className="text-5xl font-bold text-indigo-500 mb-6">How It Works ?</h1>
        <p className="text-lg text-gray-700 mb-5">
          Discover how HirePrep AI can help you ace your next interview with our simple and effective process.
        </p>
        <h2 className=" mb-5 text-lg font-light text-gray-500">
            Give mock interview in just 3 simplar easy step
            </h2>
      </section>

      <section className="max-w-7xl  mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4 ">
              <img src={step.icon} alt={step.title} className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default HowItWorks;
