import { useEffect } from 'react';
import Canvas from './components/Canvas';
import data from "./utils/data"
import MainPage from './components/MainPage';
import About from './components/About';
import LocomotiveScroll from 'locomotive-scroll';
import Services from './components/Services';
import Accordion from './components/Accordian';
import { Info } from 'lucide-react';

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
        <Services />
        <Accordion />
        <Info />
      </div>
    </>
  )
}

export default App;