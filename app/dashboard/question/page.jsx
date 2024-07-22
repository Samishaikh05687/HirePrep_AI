"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import faqImage from "@/public/faq.svg"; // Make sure the image is in the public folder or adjust the path accordingly

const faqs = [
  { question: "Are there any subscription fees?", answer: "Yes, we have various subscription plans available." },
  { question: "Do you share user data with third parties?", answer: "No, we do not share user data with third parties." },
  { question: "Is there a free trial available?", answer: "Yes, we offer a 7-day free trial for new users." },
  { question: "What kind of customer support do you provide?", answer: "We offer 24/7 customer support via chat and email." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards and PayPal." },
  {
    question: "Can I customize my interview experience?",
    answer: "Yes, HirePrep AI allows you to tailor your mock interview experience to your specific job role and industry, ensuring relevant and targeted practice.",
  },]

const FAQPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen w-full gap-14 bg-white flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      <div className="flex-1 w-full h-full hidden md:block">
        <Image src={faqImage} alt="FAQ" layout="responsive" width={200} height={500}/>
      </div>
      <div className="flex-1 w-full max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">Questions you might ask about our product and services</p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center py-2 text-lg text-left text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                {faq.question}
                <span className="ml-2">{expandedIndex === index ? "-" : "+"}</span>
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
