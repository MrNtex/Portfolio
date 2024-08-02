import React from 'react'
import { ModeToggle } from './ui/DarkModeToggle'
import { LanguageToggle } from './LangugageToggle'

const Toggles = () => {
  return (
    
    <div className='top-0 right-0 pointer-events-auto'>
        <div className='absolute z-20 m-6 flex gap-3'>
            <ModeToggle/>
            {/*<LanguageToggle/>*/}
        </div>
        
    </div>
  )
}

export default Toggles