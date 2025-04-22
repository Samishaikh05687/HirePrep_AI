import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { ClipboardCheck, Users, BarChart3 } from 'lucide-react';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20 bg-gray-200 shadow-2xl shadow-black">
      <div className="relative flex min-h-screen bg-[#131313] text-black w-full items-center flex-col justify-center overflow-hidden rounded-lg border bg-background p-5 md:shadow-xl">
        <Head>
          <title>HirePrep AI</title>
          <meta
            name="description"
            content="HirePrep AI - Your AI-powered interview preparation assistant"
          />
          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <header className="w-full flex justify-between items-center p-6">
          <div className="text-lg font-bold font-arsenal">WE LAUNCH</div>

          <nav className="flex space-x-6">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Plans
            </a>
            <a href="#" className="hover:underline">
              Cases
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex flex-col items-center justify-center flex-grow">
          <h1 className="text-8xl font-bold text-center font-arsenal my-5">
            ACE INTERVIEWS <br /> WITH
            <br />{" "}
            <span className="bg-[#4B70F5] rounded-lg m-2 p-1  text-7xl font-thin">
              HIREPREP AI
            </span>
          </h1>
          <p className="text-center mt-4 max-w-3xl text-gray-500">
            Welcome to <b>HirePrep AI!</b> Revolutionize your interview
            preparation with our cutting-edge <b>AI-powered</b> mock
            interviewer. Designed for job seekers of all levels, HirePrep AI
            offers a personalized, interactive, and realistic interview
            experience
          </p>
          <Link href={"/dashboard"}>
            <Button
              size={"lg"}
              className="p-8 mt-5 mb-20 md:mb-0 text-2xl w-full sm:w-fit border-t-4 rounded-full border-gray-500 bg-gradient-to-r from-black to-neutral-600 hover:scale-105  group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
            >
              <span className="bg-clip-text text-white   md:text-center font-arsenal group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                Start For Free Today
              </span>
            </Button>
          </Link>
          {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(circle_at_center,transparent_5%,black)]"></div> */}
          <div className="mt-10 animate-bounce border border-x-gray-500 rounded-full h-20 w-20 flex justify-center items-center">
            <span className="text-5xl">&#8681;</span>
          </div>
        </main>
        <section className="w-full py-10 bg-white text-black font-arsenal rounded-xl">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold">
              HOW{" "}
              <span className="text-[#4B70F5] ">
                HirePrep AI
              </span>{" "}
              WORKS ?
            </h2>
            <h2 className="mt-5 text-lg font-light text-gray-500">
            Give mock interview in just 3 simplar easy step :
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {/* Card 1 */}
      <div className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-50 rounded-md p-2 mr-3">
              <ClipboardCheck size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Step 1: Sign Up & Personalize</h3>
          </div>
          
          <div className="h-px w-full bg-gray-100 my-4"></div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Create an account with HirePrep AI and fill out your profile
            details. This helps us tailor the interview questions and
            scenarios to your specific needs and career goals.
          </p>
          
          <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Create Account
          </button>
        </div>
        <div className="h-1 w-full bg-blue-600"></div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-green-50 rounded-md p-2 mr-3">
              <Users size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Step 2: Start Your Mock Interview</h3>
          </div>
          
          <div className="h-px w-full bg-gray-100 my-4"></div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Initiate a mock interview session with our AI-powered
            interviewer. You'll receive questions based on real
            interview scenarios, complete all questions and see results.
          </p>
          
          <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Begin Interview
          </button>
        </div>
        <div className="h-1 w-full bg-green-600"></div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-50 rounded-md p-2 mr-3">
              <BarChart3 size={24} className="text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Step 3: Receive Instant Feedback</h3>
          </div>
          
          <div className="h-px w-full bg-gray-100 my-4"></div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            After the session, HirePrep AI provides immediate feedback on
            your answers. You'll get insights into your strengths and
            areas for improvement, helping you refine your skills.
          </p>
          
          <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View Insights
          </button>
        </div>
        <div className="h-1 w-full bg-indigo-600"></div>
      </div>
    </div>
          </div>
        </section>

        

        <section className="w-full  bg-white text-black rounded-xl font-arsenal">
          <div className="contact-page-container">
            <div className="contact-header">
              <h1 className="text-[#4B70F5]">Contact Us</h1>
              <p>Have questions or need assistance? We're here to help!</p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>
                  Feel free to reach out to us with any inquiries or feedback.
                  We'd love to hear from you!
                </p>
                <div className="email-info">
                  <span role="img" aria-label="email">
                    📧
                  </span>
                  <a href="mailto:hireprep@gmail.com">hireprep@gmail.com</a>
                </div>
                <div className="address-info">
                  <span role="img" aria-label="location">
                    📍
                  </span>
                  <p>XYZ,India</p>
                </div>
              </div>
              <div className="form-container">
                <form>
                  <h3>Send us a message 🚀</h3>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address*"
                    required
                  />
                  <input type="text" name="subject" placeholder="Subject" />
                  <textarea
                    name="message"
                    placeholder="Tell us more about your query*"
                    required
                  ></textarea>
                  <button type="submit">Send message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full p-6 text-center bg-white text-black">
          © 2024 HirePrep AI. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
