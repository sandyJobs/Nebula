import React, { createContext, useState, useEffect } from 'react'


export const ModeContext = createContext();

const Mode = ({children}) => {
 const [theme, setTheme] = useState(localStorage.getItem('theme'));
 const  element = document.documentElement;

 useEffect(() => {
    if(theme){
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }else{
     element.classList.remove('dark')
     localStorage.removeItem('theme')
    }
  }, [theme])

  const themeToggle = () => {
    setTheme(!theme)
  }
  return (
    <ModeContext.Provider value={{theme, themeToggle}}>
      {children}
    </ModeContext.Provider>
  )
}

export default Mode