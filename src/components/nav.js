import React from 'react'
import Darkmode from '../mode/darkmode'


function Header() {
   const [colorTheme, setTheme] = Darkmode()
   return (
      <div className="shadow-md w-full p-2 flex justify-between px-6 py-4 fixed top-0 left-0 z-10 bg-primaryWhite dark:bg-primaryDarkBlue">
         <h2 className="text-lg font-bold text-veryDarkLightkBlue dark:text-primaryWhite">Where in the world?</h2>
         <div 
         className="text-veryDarkLightkBlue dark:text-primaryWhite"
         onClick={ () =>(setTheme(colorTheme))}>
            {colorTheme === "light" ? 
            <span className="p-2 flex items-center">
               <svg className="pr-2" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
               </svg>
               Dark Mode
            </span > : 
            <span className="p-2 flex items-center">
               <svg className="pr-2" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
               </svg>
                  Dark Mode
            </span>}
         </div>
      </div>
   )
}

export default Header
