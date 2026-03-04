import React from 'react';
import Navbar from './shared/Navbar';

function App() {

  return (
    <div className='flex flex-col'>
      <header>
        <Navbar />
      </header>
      <main className='flex-1 my-10'></main>
      <footer></footer>
    </div>
  )
}

export default App
