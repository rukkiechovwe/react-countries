import React from 'react'

function Header() {
   return (
      <div className="shadow-md w-full p-2 flex justify-between p-6 fixed top-0 left-0 z-10 bg-primaryWhite">
         <h2 className="text-lg font-bold">Where in the world?</h2>
         <div>
            <span>Dark Mode</span>
         </div>
      </div>
   )
}

export default Header
