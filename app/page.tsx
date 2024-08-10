import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import { Lexend } from "next/font/google";
import Contact from "@/components/Contact/Contact";
export default function Home() {
  return (
    <main className={"container mx-auto space-y-32 py-24"}>
      <Landing />
      <About />
      <Projects />
      {/* <article className="w-full flex min-h-[50vh] flex-col items-center justify-between">
        <div className="bg-darkBlack p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-darkestBlue p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-darkGray p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-darkBlue p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-normalGray p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-normalBlue p-6 rounded-xl w-full  h-8 "></div>
        <div className="bg-lightestBlue p-6 rounded-xl w-full  h-8 "></div>
      </article> */}
      <Contact />
    </main>
  );
}
