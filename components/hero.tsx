import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { TechStack } from './TechStack'
import { FaLocationPin, FaMapLocationDot } from 'react-icons/fa6'
import { BackgroundGradientAnimation } from './ui/GradientBg'
import { ModeToggle } from './ui/DarkModeToggle'
import Grid from './Grid'
import { LanguageToggle } from './LangugageToggle'

const hero = () => {
  return (
    <div>
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
            <Spotlight className="-top-10 -right-10 h-[80vh] w-[20vw]" fill="purple"/>
            <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw]" fill="blue"/>
        </div>

        <BackgroundGradientAnimation>
            
            <div className="absolute pointer-events-none my-10 z-10 inset-0 flex items-center justify-center min-h-screen">
                
                
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center'>
                    <TextGenerateEffect words='Build your next project with Artur Niemiec' className='text-[40px] md:text-5xl lg:text-6xl font-bold max-w-[800px] text-center mt-4'/>

                    <div className='flex gap-5'>
                        <FaMapLocationDot/>
                        <h2 className='uppercase tracking-widest text-xs dark:text-blue-100 max-w-80'>
                            Cracow, Poland
                        </h2>
                    </div>
                    

                    <p className='text-center text-lg mt-4 pt-3'>
                        I&apos;m a backend developer and game developer with a passion for creating new things. I specialize in creating dynamic and interactive applications.
                    </p>

                    <a href='#about' className='pt-10 pointer-events-auto'> 
                        <MagicButton
                        title='My work'
                        icon={<FaLocationArrow/>}
                        position='right'
                        />
                    </a>
                    
                </div>

            </div>
        </BackgroundGradientAnimation>
        
    </div>
  )
}

export default hero