import { useEffect, useState } from 'react';
import Canvas from './components/Canvas';
import data from "./utils/data"
import MainPage from './components/MainPage';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import Services from './components/Services';
import Accordion from './components/Accordian';
import Info from './components/Info';
import Last from './components/Last';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    const locomotive = new LocomotiveScroll();
  }, [])

  const [red, setRed] = useState<boolean>(false);
  return (
    <>
      <div className='min-h-screen w-full relative overflow-hidden'>
        {red && (
          data[0].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}

        <MainPage red={red} setRed={setRed} />

      </div>
      <div className='w-full min-h-screen relative overflow-hidden '>
        {red && (
          data[1].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}
        <About />
      </div>
      <div className=' min-h-screen  w-full relative overflow-hidden '>
        {red && (
          data[2].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}
        <Services />
        <Accordion />
      </div>
      <div className='min-h-screen relative overflow-hidden w-full'>
          {red && (
          data[3].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}
        <Last />
      </div>
      <div className='min-h-screen w-full relative overflow-hidden'>
          {red && (
          data[7].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}
        <Info />
      </div>
      <div className="min-h-screen relative w-full overflow-hidden">
         {red && (
          data[3].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        )}
        <Footer />
      </div>
    </>
  )
}

export default App;