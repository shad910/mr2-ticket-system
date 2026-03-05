import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TicketList from './components/TicketList';
import TicketActionCard from './components/TicketActionCard';
import ResolvedTasks from './components/ResolvedTasks';
import { Bounce, toast } from 'react-toastify';
import Banner from './components/Banner';

function App() {

  const [tickets, setTickets] = useState([]);
  const [progress, setProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("tickets.json")
      .then((response) => response.json())
      .then((data) => setTickets(data));
  }, []);

  const handleProgress = (id, title) => {
 

    setProgress((prevTasks) => {
      const exists = prevTasks.find((task) => task.id === id);
      if (exists) return prevTasks;
      return [...prevTasks, { id, title }];
    });

    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "In Progress" } : ticket
      )
    );

    toast.success(`Task "${title}" added to progress!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };


  const onComplete = (title, id) => {
    setProgress((prev) => prev.filter(task => task.id !== id));
    setResolved((prev) => [...prev, { id, title }]);


    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "Completed" } : ticket
      )
    );

    toast.success(`Task "${title}" with ID ${id} marked as complete!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className='flex flex-col bg-base-200'>
      <header>
        <Navbar />
      </header>

      <main className='flex-1 w-11/12 mx-auto mt-10 mb-16'>

        <div className='mb-10'>
          <Banner progress={progress.length} resolved={resolved.length} />
        </div>

        <div className='lg:flex justify-center gap-2.5 sm:gap-3.5 md:gap-5 lg:gap-10'>
          <section className='lg:w-[70%]'>
            <h2 className='md:text-lg lg:text-xl font-semibold text-gray-800 mb-4'>Customer Tickets</h2>
            <TicketList
              tickets={tickets}
              setTickets={setTickets}
              handleProgress={handleProgress}
            />
          </section>

          <section className='lg:w-[30%] flex flex-col gap-y-10 mt-10 lg:mt-0'>
            <div>
              <h2 className='md:text-lg lg:text-xl font-semibold text-gray-800 mb-4'>Task Status</h2>
              <TicketActionCard
                taskStatus={progress}
                onComplete={onComplete}
              />
            </div>
            <div>
              <h2 className='md:text-lg lg:text-xl font-semibold text-gray-800 mb-4'>Resolved Tasks</h2>
              <ResolvedTasks resolved={resolved} />
            </div>
          </section>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;