import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Quotes from './Components/Quotes/Quotes';

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-black dark:bg-black dark:text-white duration-300'>
      <Navbar />
      <Hero />
      <Quotes />
    </main>
  )
}

export default App