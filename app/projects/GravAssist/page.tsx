"use client"
import NodeConnector from '@/components/NodeConnector'
import { ANIEngine } from '@/data/ANIEngine'
import { CsharpPlain } from 'devicons-react'
import React from 'react'
import { FaAtom, FaBrush, FaUnity } from 'react-icons/fa'

const page = () => {
  return (
    <div className='md:flex p-12 divide-x-2 hidden'>
        <div className='w-1/3 p-12 fixed'>
          <h1 className='text-2xl font-bold'>GravAssist</h1>
          <p className='text-sm text-gray-500'>A simple and powerful engine for creating animations.</p>
          <a href='https://github.com/MrNtex/ANIEngine' className='text-sm text-blue-500'>View on Github</a>
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
              <p className='text-sm  pt-6 font-extralight'>December 2023 - February 2024</p>
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
          <div className='flex gap-8 pt-36 just'>
            <div>
              <h1 className='text-2xl'>Node-based system created in Unity</h1>
              <p className='text-gray-400 max-w-72'>
                My engine utilizes a node-based system to create scripts. The user can create nodes and connect them to achieve complex mechanics.
              </p>
            </div>
            <div className="relative w-5/12 h-64">
              <img src="/ANIEngine.png" alt="ANI Engine" className='w-full h-auto rounded-lg shadow-lg object-contain absolute inset-0 transition-transform duration-300 hover:scale-110 hover:z-10'/>  
            </div>
            
          </div>
          <div className='py-8 w-full flex justify-center items-center'>
            <div id="container" className='bg-black-200 rounded-3xl w-2/3 hover:bg-black-100 transition-colors duration-300'>
              <NodeConnector/>
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