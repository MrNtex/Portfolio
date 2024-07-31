
import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { TechStack } from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Toaster } from "@/components/ui/toaster";


export default function Home() {
  return (
    <main className="relative dark:bg-black bg-white flex justify-center items-center flex-col mx-auto">
      <Toaster/>
      <div className="w-full">
        
        <Hero/>
        <TechStack/>
        <Grid/>
      </div>
    </main>
  );
}
