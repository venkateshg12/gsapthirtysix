import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const firstRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const createScrollTrigger = (triggerElement: HTMLDivElement, timeline: GSAPTimeline) => {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 90%",
        scrub : true,
        onEnter: () => timeline.play(),
        onLeaveBack: () => {
          // Reset animation when scrolled past
          timeline.progress(0).pause();
        },
      })
    }
    if (firstRef.current) {
      let tl = gsap.timeline({ paused: true });
      tl.set(firstRef.current, { opacity: 0, y: 50 });
      tl.to(firstRef.current, {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: "power4.out",
      });
      createScrollTrigger((firstRef.current)!, tl);
    }
  })
  return (
    <div>
      <div id="what we do" className='min-h-screen items-start  flex mt-30 md:items-center justify-center md:mt-30'>
        <div className=' flex item-center justify-center font-pp'>
          <div ref={firstRef} className='flex items-start md:flex-row flex-col justify-between gap-[6rem] md:gap-[16rem] 2xl:gap-[28rem]'>
            <div className=' flex  items-center  font-bold gap-[0.4rem] 2xl:text-[2rem] lg:mr-0 flex-start '>
              <span>01</span>
              <div className='h-[0.2rem] w-[2rem] bg-black relative' />
              <span>WHAT WE DO</span>
            </div>
            <div className='flex flex-col gap-[2rem] md:gap-[7rem] max-w-[20rem] 2xl:max-w-[50rem]'>
              <h1 className='font-semibold font-ppmedium text-[1.3rem] lg:text-[1.6rem] 2xl:text-[3.6rem]'>
                We aim to elevate digital production in
                the advertising space,
                bringing your ideas to life.
              </h1>
              <div className='flex flex-col gap-[1rem] font-montreal 2xl:text-[2rem]'>
                <h5>
                  As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.
                </h5>
                <h5>
                  Our commitment to innovation and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About



