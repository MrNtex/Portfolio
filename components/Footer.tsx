'use client'
import React from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from './ui/Button'
import { CopyEmail } from './Toast'


export const Footer = () => {

  return (
    <div>
        <div className="py-3 px-5 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">Contact</div>
        <div className='flex items-center px-24 py-2 font-extralight gap-5 justify-between'>
            <div className='flex gap-5'>
                <div>
                    <a className="text-md text-gray-800 dark:text-white" href='/'>
                        Artur Niemiec
                    </a>
                    <br/>
                    <p className="text-sm">Portfolio 2024</p>
                </div>

                <div className='text-md font-extralight opacity-45'>
                    <p>GameDev</p>
                    <p>Backend developer</p>
                </div>
            </div>

            <div className='flex gap-12'>
                <div className='text-md'>
                    <CopyEmail />
                </div>
                <div className='text-md underline flex flex-col'>
                    <a onClick={() => window.open("/resume.pdf", "_blank")} className='cursor-pointer'>Resume</a>
                    <a href='https://www.linkedin.com/in/artur-niemiec/'>LinkedIn</a>
                    <a href='https://github.com/MrNtex'>GitHub</a>
                </div>
            </div>
        </div>
        <br className='h-4'/>
        <h1 className="text-center text-sm text-gray-800 dark:text-white">© 2024 Artur Niemiec</h1>
        <br/>
    </div>
  )
}
