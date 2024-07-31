
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { Teaching } from "@/components/Teaching";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[{name: 'Home', link: '/', icon:<FaHome/>}]}/>
        <Hero/>
        <TechStack/>
        <Grid/>
        <Teaching/>
        <Contact/>
      </div>
    </main>
  );
}
