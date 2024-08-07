"use client"
import DraggableDiamond from '@/components/GravAssistDemo'
import NodeConnector from '@/components/NodeConnector'
import { ANIEngine } from '@/data/ANIEngine'
import { CsharpPlain } from 'devicons-react'
import React from 'react'
import { FaAtom, FaBrush, FaBuffer, FaUnity } from 'react-icons/fa'

const page = () => {
  return (
    <div className='md:flex p-12 divide-x-2 hidden'>
        <div className='w-1/3 p-12 fixed'>
          <h1 className='text-2xl font-bold'>GravAssist</h1>
          <p className='text-sm text-gray-500'>Use gravity to your advantage</p>
          <a href='https://play.google.com/store/apps/details?id=com.ArturNiemiec.GravAssist' className='text-sm text-blue-500'>View on GooglePlay</a>
        </div>
        <div className='w-2/3 p-12 ml-[33%]'>
          <div className="grid grid-cols-3 divide-x-2 justify-center">
            <div>
              <p className='text-sm font-extralight uppercase text-gray-300'>Tools</p>
              <div className='flex items-center gap-2 pt-6'>
                <div className='hover:bg-black-200 p-4 transition-colors duration-1000 ease-in-out rounded-lg'>
                  <CsharpPlain size='2rem' color='white'/>
                  <p className='text-sm text-gray-500 text-center pt-2'>C#</p>
                </div>
                <div className='hover:bg-black-200 p-4 transition-colors duration-1000 ease-in-out rounded-lg'>
                  <FaUnity size='2rem' color='white'/>
                  <p className='text-sm text-gray-500 text-center pt-2'>Unity</p>
                </div>
                </div> 
            </div>
            <div className="pl-4">
              <p className='text-sm font-extralight uppercase text-gray-300'>Duration</p>
              <p className='text-sm  pt-6 font-extralight'>June 2022 - October 2022</p>
            </div>
            <div className="pl-4">
              <p className='text-sm font-extralight uppercase text-gray-300'>Skills</p>
              <ul className='pl-2 pt-2 '>
                <li>UI/UX Design</li>
                <li>Physics</li>
                <li>Creative Problem Solving</li>
              </ul> 
            </div>
          </div>
          <div className='flex gap-8 pt-36 just'>
            <div className='w-2/3'>
              <h1 className='text-2xl'>The idea</h1>
              <h1 className='text-gray-400 w-10/12'>
              <a href='https://play.google.com/store/apps/details?id=com.ArturNiemiec.GravAssist' className='font-bold text-emerald-600'>GravAssist</a> is the first game I created from start to finish. The idea came from the gravity assist mechanic used in space missions. I wanted to recreate this maneuver from the game <a href='https://store.steampowered.com/app/220200/Kerbal_Space_Program/' className='underline'>Kerbal Space Program</a>, but in a more arcade style. The player has to use the gravity of planets to navigate through the levels.
              </h1>
            </div>
            
            <div className="relative w-2/12">
              <img src="/KSPGravAssist.jpg" alt="Gravity Assist" className='w-full h-auto rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>  
            </div>
            
          </div>

          <div className='flex gap-8 pt-36 justify-start h-[40rem]'>
            <div className="relative w-3/12 h-64">
                <img src="/GravAssistGravity.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="w-6/12">
                <h1 className='text-2xl'>Implementation</h1>
                <p className='text-gray-400'>
                    I decided to create my own physics engine to calculate the forces between objects <a className='italic'>(because I didn&apos;t know about the existance of built into Unity point-effector)</a>. The player can use the gravity of planets to navigate through the levels. The game is written in C# and uses Unity&apos;s physics engine to calculate the forces and collisions between objects.
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
          <div className='hidden lg:block'>
            <div className='flex gap-3'>
            <FaAtom size='2rem' color='white'/>
            <h1 className='text-2xl'>Physics</h1>
            </div>
            
            <p className='text-gray-400 font-extralight py-2'>
              GravAssist utilizes Newton&apos;s law of universal gravitation to calculate the forces between objects. The player can use the gravity of planets to navigate through the levels. You can see the heavly simplified demo below.
            </p>

            <div>
              <DraggableDiamond/>
            </div>
          </div>

          <div className='lg:hidden block'>
            <div className='flex gap-3'>
            <FaAtom size='2rem' color='white'/>
            <h1 className='text-2xl'>Physics</h1>
            </div>
            
            <p className='text-gray-400 font-extralight py-2'>
              GravAssist utilizes Newton&apos;s law of universal gravitation to calculate the forces between objects. The player can use the gravity of planets to navigate through the levels.
            </p>
            <p className='text-blue-500 font-extralight py-2'>
              Switch to desktop to see the demo.
            </p>
          </div>

          <hr className='h-4'/>
          <div className='flex gap-3 pb-8'>
            <div>
              <div className='flex gap-3'>
                <FaBuffer size='2rem' color='white'/>
                <h1 className='text-2xl'>Features</h1>
              </div>
              
              <p className='text-gray-400 font-extralight pt-2 w-1/2'>
                GravAssist isn&apos;t just about gravity. The game features a variety of levels with different mechanics. The player can grab moons and move them on their orbits, use black and white holes to slingshot themselves and avoid asteroids. Or jump through portals.
              </p>
            </div>
            
          </div>
          <div className="relative flex items-center p-4 gap-3 pb-12">
            <div className="relative w-3/12 h-64">
                <img src="/GravAssist1.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/GravAssist2.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/GravAssist3.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
            <div className="relative w-3/12 h-64">
                <img src="/GravAssist4.jpg" alt="ANI Engine" className='w-full max-h-96 rounded-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>
            </div>
          </div>

          
        </div>
    </div>
    
  )
}

export default page