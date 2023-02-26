import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {

  return (
    
    <section>
      <Header/>
      <div className='main allPadding' >
        <LeftSection/>
        <RightSection/>

      </div>
      


    </section>
    
  )
}

export default App