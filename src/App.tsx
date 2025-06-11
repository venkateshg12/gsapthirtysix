import { useEffect } from 'react';
import Canvas from './components/Canvas';
import data from "./utils/data"
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    const locomotive = new LocomotiveScroll();
  }, [])
  return (
    <>
      <div className=' min-h-screen w-full relative overflow-hidden '>
        {
          data[0].map((details, idx) => (
            <div key={idx}>
              <Canvas details={details} />
            </div>
          ))
        }
        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App;