"use client";
import React from "react";
import { BackgroundGradient } from "./ui/BackgroundGradient";

export const CurrentProject = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <BackgroundGradient className={`rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 ${className}`}>
      {children}
    </BackgroundGradient>
  );
};
