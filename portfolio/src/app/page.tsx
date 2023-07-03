import Resume from "./components/Resume/Resume";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Resume />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Analytics />
    </div>
  );
}
