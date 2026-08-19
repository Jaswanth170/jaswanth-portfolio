import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProofStrip } from "@/components/ProofStrip";
import { WhatIBuild } from "@/components/WhatIBuild";
import { FeaturedProject } from "@/components/FeaturedProject";
import { SelectedProjects } from "@/components/SelectedProjects";
import { HowIWork } from "@/components/HowIWork";
import { About } from "@/components/About";
import { CurrentlyBuilding } from "@/components/CurrentlyBuilding";
import { TechStack } from "@/components/TechStack";
import { Philosophy } from "@/components/Philosophy";
import { GithubSection } from "@/components/GithubSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090A] text-[#F5F5F5] selection:bg-accent/20 selection:text-white">
      <Navbar />
      <Hero />
      <ProofStrip />
      <WhatIBuild />
      <FeaturedProject />
      <SelectedProjects />
      <HowIWork />
      <About />
      <CurrentlyBuilding />
      <TechStack />
      <Philosophy />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  );
}
