import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <div className='flex flex-col'>
      <header>
        <Navbar />
      </header>
      <main className='flex-1 my-10'></main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
