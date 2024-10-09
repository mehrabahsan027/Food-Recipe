import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider';


function Home() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    
    <>
    
    <Navbar />
    <PopularSlider  />

    <TrendingSlider/>
  
    </>


  )
}

export default Home