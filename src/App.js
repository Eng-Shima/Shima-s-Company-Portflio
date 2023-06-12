import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BarLoader } from 'react-spinners'

// components
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'

// css
import './App.css'


const App = () => {

  // 1- preloader state
  const [loading , setLoading] = useState(false);

  // 2- useEffect to make the preloader wiht true value then false after 3 sec
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);


  return (
    <BrowserRouter>

      {/*  pre-loading*/}
      {loading ?
          <div className="preloaderr">
            {/* <BarLoader color="#36d7b7" /> */}
            <BarLoader color={'#f87765'} width={159} height={10} />
          </div> :
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Projects' element={<Projects /> }/>
            </Routes>
          </>}
    </BrowserRouter>
  )
}

export default App