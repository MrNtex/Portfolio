"use client"
import NodeConnector from '@/components/NodeConnector'
import { Button } from '@/components/ui/Button'
import { ANIEngine } from '@/data/ANIEngine'
import { CsharpPlain, JavascriptPlain } from 'devicons-react'
import React from 'react'
import { FaArrowRight, FaAtom, FaBrush, FaReact, FaUnity } from 'react-icons/fa'

const page = () => {
  return (
    <div className='md:flex p-12 divide-x-2 hidden'>
        <div className='w-1/3 p-12 fixed'>
          <h1 className='text-2xl font-bold'>Portal Chess</h1>
          <p className='text-sm text-gray-500'>A fresh take on the timeless strategy.</p>
          <a href='https://github.com/MrNtex/PortalChess' className='text-sm text-blue-500'>View on Github</a>
          <br/>
          <Button className='mt-2 bg-black-100' variant={'secondary'} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.anindustries.PortalChess")}>
            Play on Google Play <FaArrowRight className="ml-2 h-4 w-4" /> 
          </Button>
        </div>
        <div className='w-2/3 p-12 ml-[33%]'>
          <div className="grid grid-cols-3 divide-x-2 justify-center">
            <div>
              <p className='text-sm font-extralight uppercase text-gray-300'>Tools</p>
              <div className='flex items-center gap-2 pt-6'>
                <div className='hover:bg-black-200 p-4 transition-colors duration-1000 ease-in-out rounded-lg justify-center'>
                  <JavascriptPlain size='2rem' color='white'/>
                  <p className='text-sm text-gray-500 text-center pt-2'>JS</p>
                </div>
                <div className='hover:bg-black-200 p-4 transition-colors duration-1000 ease-in-out rounded-lg flex flex-col items-center'>
                  <FaReact size='2rem' color='white'/>
                  <p className='text-sm text-gray-500 text-center pt-2'>React</p>
                </div>
                </div> 
            </div>
            <div className="pl-4">
              <p className='text-sm font-extralight uppercase text-gray-300'>Duration</p>
              <p className='text-sm  pt-6 font-extralight'>December 2023 - February 2024</p>
            </div>
            <div className="pl-4">
              <p className='text-sm font-extralight uppercase text-gray-300'>Skills</p>
              <ul className='pl-2 pt-2 '>
                <li>UI/UX Design</li>
                <li>Dynamic Programming</li>
                <li>Creative Problem Solving</li>
              </ul> 
            </div>
          </div>
          <div className='flex gap-8 pt-36 just'>
            <div className='w-2/3'>
              <h1 className='text-2xl'>The idea</h1>
              <h1 className='text-gray-400 w-10/12'>
              Idea for <a href='https://play.google.com/store/apps/details?id=com.anindustries.PortalChess' className='font-bold text-emerald-600'>Portal Chess</a> originated in the back of my car. For some reason I decided to leave my comfort zone and try to create something outside Unity. I've choosen to use React Native and js to create a simple chess game with a twist. The twist was to add portals to the game. The player can use the portals to teleport the pieces from one edge to antoher.
              </h1>
            </div>
            
            <div className="relative w-2/12">
              <img src="/PortalChessCar.jpg" alt="Portal Chess" className='w-full h-auto rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>  
            </div>
            
          </div>

          <div className='flex gap-8 pt-36 justify-start h-[40rem]'>
            <div className="relative w-3/12 h-64">
                <img src="/PortalChess1.jpg" alt="Portal Chess" className='w-full max-h-96 rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="w-6/12">
                <h1 className='text-2xl'>Implementation</h1>
                <p className='text-gray-400'>
                    Portal Chess has fully funtional chess game mechanics. The player can move the pieces, capture the enemy pieces and use the portals to teleport the pieces from one edge to another. Game automatically detects check and checkmate. In the future I plan to add more features like multiplayer and AI.
                </p>
                <h1 className='text-2xl'>Challanges</h1>
                <p className='text-gray-400'>
                  The biggest challenge was constantly refactoring the code to enhance readability and maintainability. As this was my first major project in React Native, I was continuously learning and adapting. This meant frequently revisiting and rewriting sections of the code to implement best practices and ensure long-term maintainability. Additionally, integrating the teleportation mechanic required careful handling of state and board logic to ensure smooth and accurate gameplay.
                </p>
            </div>
            <div className="w-3/12">

            </div>
           </div>
          

          <hr className='h-4'/>

          <div className="relative flex items-center p-4 gap-3 pb-12">
            <div className="relative w-3/12 h-64">
                <img src="/PortalChess1.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/PortalChess2.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/PortalChess3.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/PortalChess4.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
          </div>

          
        </div>
    </div>
    
  )
}

export default page