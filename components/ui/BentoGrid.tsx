
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { FaReact } from "react-icons/fa";
import { TechStack } from "../TechStack";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName? : string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-black border-white/[0.2] justify-between flex flex-col space-y-4 border-2",
        className
      )}
    >
      <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-SM md:text-xs lg:text-base">
                {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
            </div>  
        
      </div>
      <div className={`${id === 6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
            {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover", "object-center")}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5} && 'w-full opacity-80'`}>
            {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className={cn(imgClassName, "object-cover", "object-center")}
                />
            )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>    
        )}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
              
      </div>
    </div>
    </div>
  );
};
