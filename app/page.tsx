import Landing from "@/components/Landing/Landing";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Feedback from "@/components/Feedback/FeedbackComponent";

export default function Home() {
  return (
    <main className="container mx-auto space-y-32 py-24"> 
      <Landing />
      <About />
      <Projects />
      <Feedback />
      <Contact />
    </main>
  );
}
