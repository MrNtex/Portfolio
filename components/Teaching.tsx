"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function Teaching() {
  return (
    <div className="flex justify-center items-center h-[40rem] flex-col px-4 text-center">
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-4xl mx-auto mb-10">
        In my free time I run a youtube chanell called{" "}
        <LinkPreview url="https://www.youtube.com/channel/UCZrepsiS3gGsb1ObK1e8CeA" className="font-bold">
          CodeForge
        </LinkPreview>{" "}
        where I post tutorials and devlogs for {" "}
        <LinkPreview url="https://play.google.com/store/apps/developer?id=Niemiec+Artur+Industries" className="font-bold">
          my games
        </LinkPreview>{" "}
      </p>
      <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
        Besides that I'm a coding trainer for {" "}
        <LinkPreview
          url="https://www.codinggiants.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          Coding Gianats
        </LinkPreview>{" "}
      </p>
    </div>
  );
}
