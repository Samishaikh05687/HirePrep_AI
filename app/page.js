import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";

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
              <span className="text-[#4B70F5] border-b-2 border-black">
                HirePrep AI
              </span>{" "}
              WORKS ?
            </h2>
            <h2 className="mt-5 text-lg font-light text-gray-500">
            Give mock interview in just 3 simplar easy step :
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ml-10 mt-10">
              <div class="card">
                <div class="card__img"></div>
                <div class="card__descr-wrapper">
                  <p class="card__title">Step 1: Sign Up & Personalize</p>
                  <p class="card__descr">
                    Create an account with HirePrep AI and fill out your profile
                    details. This helps us tailor the interview questions and
                    scenarios to your specific needs and career goals.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card__img"></div>
                <div class="card__descr-wrapper">
                  <p class="card__title">Step 2: Start Your Mock Interview</p>
                  <p class="card__descr">
                    Initiate a mock interview session with our AI-powered
                    interviewer. You'll receive questions based on real
                    interview scenarios, complete all question and see result.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card__img"></div>
                <div class="card__descr-wrapper">
                  <p class="card__title">Step 3: Receive Instant Feedback</p>
                  <p class="card__descr">
                    After session,HirePrep AI provides immediate feedback on
                    your answers. You'll get insights into your strengths and
                    areas for improvement, helping you refine your skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        

        <section className="w-full py-20 bg-white text-black rounded-xl font-arsenal">
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
