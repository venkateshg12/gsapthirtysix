import { useEffect } from 'react';
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
  return (
    <>
      <div className='min-h-screen w-full relative overflow-hidden'>
        {/* {
          data[0].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        } */}

        <MainPage />

      </div>
      <div className=' min-h-screen  w-full relative overflow-hidden '>
        {/* {
          data[1].map((details, idx) => (
            <div key={idx}>
            <Canvas details={details} />
            </div>
            ))
            } */}
        <About />
      </div>
      <div className=' min-h-screen  w-full relative overflow-hidden '>
        {/* {
          data[1].map((details, idx) => (
            <div key={idx}>
            <Canvas details={details} />
            </div>
            ))
            } */}
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Accordion />
      </div>
      <div className='min-h-screen w-full'>
        <Last />
      </div>
      <div>
        <Info />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App;