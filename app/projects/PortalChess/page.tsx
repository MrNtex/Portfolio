"use client"
import NodeConnector from '@/components/NodeConnector'
import { ANIEngine } from '@/data/ANIEngine'
import { CsharpPlain, JavascriptPlain } from 'devicons-react'
import React from 'react'
import { FaAtom, FaBrush, FaReact, FaUnity } from 'react-icons/fa'

const page = () => {
  return (
    <div className='md:flex p-12 divide-x-2 hidden'>
        <div className='w-1/3 p-12 fixed'>
          <h1 className='text-2xl font-bold'>Portal Chess</h1>
          <p className='text-sm text-gray-500'>A fresh take on the timeless strategy.</p>
          <a href='https://github.com/MrNtex/PortalChess' className='text-sm text-blue-500'>View on Github</a>
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
              <a href='https://play.google.com/store/apps/details?id=com.anindustries.PortalChess' className='font-bold text-emerald-600'>Portal Chess</a> is the first game I created from start to finish. The idea came from the gravity assist mechanic used in space missions. I wanted to recreate this maneuver from the game <a href='https://store.steampowered.com/app/220200/Kerbal_Space_Program/' className='underline'>Kerbal Space Program</a>, but in a more arcade style. The player has to use the gravity of planets to navigate through the levels.
              </h1>
            </div>
            
            <div className="relative w-2/12">
              <img src="/PortalChess1.jpg" alt="Portal Chess" className='w-full h-auto rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>  
            </div>
            
          </div>

          <div className='flex gap-8 pt-36 justify-start h-[40rem]'>
            <div className="relative w-3/12 h-64">
                <img src="/GravAssistGravity.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="w-6/12">
                <h1 className='text-2xl'>Implementation</h1>
                <p className='text-gray-400'>
                    I decided to create my own physics engine to calculate the forces between objects <a className='italic'>(because I didn't know about the existance of built into Unity point-effector)</a>. The player can use the gravity of planets to navigate through the levels. The game is written in C# and uses Unity's physics engine to calculate the forces and collisions between objects.
                </p>
                <h1 className='text-2xl'>Challanges</h1>
                <p className='text-gray-400'>
                    The biggest challange was contantly having to refactor the code to make it more readable and maintainable. It was my first big game and as I was constantly learning new things, I had to go back and rewrite the code to make it more maintainable.
                </p>
            </div>
            <div className="w-3/12">

            </div>
           </div>
          

          <hr className='h-4'/>
          <div>
            <div className='flex gap-3'>
            <FaAtom size='2rem' color='white'/>
            <h1 className='text-2xl'>Physics</h1>
            </div>
            
            <p className='text-gray-400 font-extralight pt-2'>
              ANI Engine uses a simplified version of Unity's physics engine. Automatically calculating the forces and collisions between objects.
            </p>
          </div>
          <img className='py-2' src="/ANIEnginePhysics.png"/>

          <hr className='h-4'/>
          <div>
            <div className='flex gap-3'>
            <FaBrush size='2rem' color='white'/>
            <h1 className='text-2xl'>Customization</h1>
            </div>
            
            <p className='text-gray-400 font-extralight pt-2'>
              ANI Engine uses a simplified version of Unity's physics engine. Automatically calculating the forces and collisions between objects.
            </p>
          </div>
          <div className="relative flex items-center p-4 gap-3">
            <div className="relative w-5/12 h-48">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:z-10" src="/ANIEngineCust.png"/>
            </div>
            <div className="relative w-5/12 h-48">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:z-10" src="/ANIEngineNodes.png"/>
            </div>
          </div>

          
        </div>
    </div>
    
  )
}

export default page