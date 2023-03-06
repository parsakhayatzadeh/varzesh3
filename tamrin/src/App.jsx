import { useState } from 'react'
import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Slider from './component/Slider'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {

  return (

    <section>
      <Header />
      <div className='main allPadding' >
        <LeftSection />
        <RightSection />
        <Slider />
      </div>
      <Footer/>



    </section>

  )
}

export default App
