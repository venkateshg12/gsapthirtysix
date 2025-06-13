import { useEffect, useRef } from 'react';
import Canvas from './components/Canvas';
import data from "./utils/data"
import MainPage from './components/MainPage';
import About from './components/About';
import SmoothScroll from './utils/SmoothScroll';

const App = () => {
  return (
    <>
      <SmoothScroll>
        <div className='min-h-screen w-full relative overflow-hidden'>
          {
            data[0].map((details, idx) => (
              <div key={idx}>
                <Canvas details={details} />
              </div>
            ))
          }
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
      </SmoothScroll>
    </>
  )
}

export default App;