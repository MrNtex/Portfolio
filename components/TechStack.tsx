"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { FaCode, FaCss3, FaDatabase, FaEmber, FaUnity, FaWhmcs } from "react-icons/fa";
import { ArduinoPlain, CPlain, CplusplusPlain, CsharpPlain, DotnetcorePlain, DotNetPlain, PythonOriginal, PythonPlain, RaspberrypiPlain, XmlPlain } from "devicons-react";

export function TechStack() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Backend" icon={<DotNetPlain />}
        stack={[
          <TechStackIcon key={1} title=".NET" icon={<DotnetcorePlain color="white"/>}/>,
          <TechStackIcon key={2} title="SQL" icon={<FaDatabase color="white"/>}/>,
          <TechStackIcon key={3} title="C#" icon={<CsharpPlain color="white"/>}/>,
          <TechStackIcon key={4} title="XML" icon={<XmlPlain color="white"/>}/>,
      ]}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="hidden dark:block absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="GameDev" icon={<FaUnity />}
        stack={[
            <TechStackIcon key={1} title="Unity" icon={<FaUnity/>}/>,
            <TechStackIcon key={2} title="C#" icon={<CsharpPlain color="white"/>}/>,
        ]}
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-black"
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="hidden dark:block absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Systems and Embedded" icon={<FaWhmcs />}
        stack={[
          <TechStackIcon key={1} title="C" icon={<CPlain color="white"/>}/>,
          <TechStackIcon key={2} title="C++" icon={<CplusplusPlain color="white"/>}/>,
          <TechStackIcon key={3} title="Raspberry Pi" icon={<RaspberrypiPlain color="white"/>}/>,
          <TechStackIcon key={4} title="Arduino" icon={<ArduinoPlain color="white"/>}/>,
          <TechStackIcon key={5} title="Assembly" icon={<FaCode color="white"/>}/>,
        ]}
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="hidden dark:block absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  stack,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  stack?: React.ReactNode[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-20 w-full relative dark:bg-black bg-white-100 h-full">
        <div className="absolute text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full h-full flex items-center justify-center">
            <h2 className="dark:text-white text-xl font-bold text-black">
                {title}
            </h2>
        </div>
        <div className="absolute w-full h-full dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 z-10 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex flex-col justify-center items-center gap-4 flex-wrap">
          {stack}
        </div>
      </div>
      
    </div>
  );
};


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const TechStackIcon = ({
    title,
    icon,
  }: {
    title: string;
    icon: React.ReactNode;
  }) => {
  // Replace with actual icons based on the name
  return (
    <div>
        <div className="px-4 py-3 rounded-full relative bg-transparent text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20 flex justify-center w-full h-full">
                {icon}
            </span>
        </div>
        <p className="text-xs text-center pt-2">{title}</p>
    </div>
    
    
  );
};