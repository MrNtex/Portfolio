import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TechStack } from './TechStack'
const hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]" fill="purple"/>
            <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

        <div className="flex-justfy-center relative my-20 z-10">
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.js
                </h2>

                <TextGenerateEffect words='Build your next project with Artur Niemiec' className='text-[40px] md:text-5xl lg:text-6xl font-bold max-w-[800px] text-center mt-4'/>

                <p className='text-center text-lg mt-4'>
                    Next.js is a React framework that enables server-side rendering and generating static websites for React based web applications. It is a powerful tool that is used by developers to create dynamic web applications.
                </p>

                <a href='#about' className='pt-10'> 
                    <MagicButton
                    title='My work'
                    icon={<FaLocationArrow/>}
                    position='right'
                    />
                </a>
                
            </div>
        </div>
        <TechStack/>
        
    </div>
  )
}

export default hero