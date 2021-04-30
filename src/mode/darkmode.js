import { useState,useEffect } from 'react'

function Darkmode() {
   const [Theme, setTheme] = useState('light')
   const colorTheme = Theme === 'light' ? 'dark' : 'light'
   useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(Theme)
   }, [Theme],colorTheme)
   return [colorTheme,setTheme]
}

export default Darkmode
