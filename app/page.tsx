
import { Footer } from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { Teaching } from "@/components/Teaching";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Toaster } from "@/components/ui/toaster";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col mx-auto">
      <Toaster/>
      <div className="w-full">
        
        <Hero/>
        <TechStack/>
        <Grid/>
        <Teaching/>
        <Footer/>
      </div>
    </main>
  );
}
