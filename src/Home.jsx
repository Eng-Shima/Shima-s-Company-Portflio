import React from 'react'


// Sections as Components
import FirstSec from './FirstSec'
import SecondSec from './SecondSec'
import Thirdsec from './Thirdsec'
import FourthSec from './FourthSec'
import Fifth from './Fifth'
import SixthContact from './SixthContact'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
      <FirstSec />
      <SecondSec />
      <Thirdsec />
      <FourthSec />
      <Fifth />
      <SixthContact />
      <Footer />
    </div>
  )
}

export default Home