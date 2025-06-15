import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import  { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const serviceRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (serviceRef.current) {
            let tl = gsap.timeline({ScrollTrigger: {
                trigger: serviceRef.current,
                start: "top 10%",
                end: "bottom 20%",
                markers: true,
                scrub: 1,
                onLeaveBack: () => {
                    // Reset animation when scrolled past
                    tl.progress(0).pause();
                },
            }});
            tl.to(serviceRef.current, {
                opacity : 1,
                duration: 2,
                ease: "power4.out"
            })
            // createScrollTrigger(serviceRef.current!, tl);
        }
    }, [])
    return (
        <div className='w-full min-h-[screen]'>
            <div className='flex items-end justify-center'>
                <div className='flex flex-col  gap-[2rem] font-pp max-w-[48rem] 2xl:max-w-[68rem]'>
                    <h3 className='text-[1rem] 2xl:text-[2.3rem]'>
                        OUR SERVICES
                    </h3>
                    <div ref={serviceRef} className='overflow-hidden'>
                        <h2 className='font-semibold text-[2rem] 2xl:text-[3rem] overflow-hidden'>
                            We provide you with captivating design, interactive animations, reliablecode, and immaculate project coordination. Whether you
                            need an campaign built from scratch or assistance at a specific phase, we’ve got you covered.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
