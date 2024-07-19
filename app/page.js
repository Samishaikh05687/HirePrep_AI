import Head from "next/head";


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
          ACE INTERVIEWS <br/> WITH<br/> <span className="bg-[#4B70F5] rounded-lg m-2 p-1  text-7xl font-thin">HIREPREP AI</span>
          </h1>
          <p className="text-center mt-4 max-w-3xl text-gray-500">
          Welcome to <b>HirePrep AI!</b> Revolutionize your interview preparation with our cutting-edge <b>AI-powered</b> mock interviewer. Designed for job seekers of all levels, HirePrep AI offers a personalized, interactive, and realistic interview experience
          </p>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(circle_at_center,transparent_5%,black)]"></div>
          <div className="mt-8 animate-bounce border border-x-gray-400 rounded-full h-20 w-20 flex justify-center items-center">
            <span className="text-5xl">&#8681;</span>
          </div>
        </main>

      

        <footer className="w-full p-6 text-center bg-black text-gray-400">
          © 2024 HirePrep AI. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
