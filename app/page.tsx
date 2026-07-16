import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Explorations } from "@/components/sections/explorations";
import { Skills } from "@/components/sections/skills";
import { Career } from "@/components/sections/career";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Explorations />
        <Skills />
        <Career />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
