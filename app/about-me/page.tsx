import { Footer } from '@/components/Footer'
import { LinkPreview } from '@/components/ui/link-preview'
import React from 'react'

const page = () => {
  return (
    <div>
         <div className='flex pt-36 justify-between px-24'>
            <div className='lg:text-4xl font-extralight opacity-85 w-7/12'>
                <p>Hi, I'm <b className='opacity-100'>Artur Niemiec</b>. I'm a GameDev and Backend developer.</p>
            <br/>
            <p>I grew up in Bielsko-Biała, Poland. And in 2023, I moved to Cracow to study Computer Science in Engineering at <LinkPreview
            url="https://www.agh.edu.pl/"
            className="opacity-100 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
            AGH University of Cracow.
            </LinkPreview>, where I use every oppurtunity to build connections and participate in events.</p>
            <br/>
            <p>
                I'm passionate about learning new things and I'm always looking for new challenges. I'm currently working on my <LinkPreview
            url="https://github.com/MrNtex/SpaceStrategy"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
            new game.
            </LinkPreview>
            
            </p>
            <br/>
            <p>
            In my free time I run a youtube chanell called <LinkPreview url="https://www.youtube.com/channel/UCZrepsiS3gGsb1ObK1e8CeA" className="font-bold">CodeForge</LinkPreview> where I post tutorials and devlogs for <LinkPreview url="https://play.google.com/store/apps/developer?id=Niemiec+Artur+Industries" className="font-bold">my games</LinkPreview>
            </p>
            <p>
            Besides that I'm a coding trainer for <LinkPreview url="https://www.codinggiants.com/" className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500">Coding Gigants</LinkPreview>
            </p>
            </div>
            <img src="InfoPhoto.jpg" alt="Artur Niemiec" className='w-1/3 h-auto rounded-lg shadow-lg hidden lg:block md:block object-contain'/>
        </div>
    </div>
   
  )
}

export default page