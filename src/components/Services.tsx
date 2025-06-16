import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);
const Services = () => {
    gsap.registerPlugin(SplitText);
    useGSAP(() => {
        let splittext = SplitText.create(".text1", { type: "words, chars" });
        gsap.set(splittext.words, { overflow: "hidden" });
        gsap.from(splittext.chars, {
            y: "100%",
            rotateX: -30,
            duration: 2,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: splittext.chars,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
                toggleActions: "play none none reverse"
            }
        });
    }, [])
    return (
        <div id='our services' className='w-full min-h-[screen]'>
            <div className='flex items-end justify-center px-4'>
                <div className='flex flex-col  gap-[2rem] font-pp max-w-[48rem] 2xl:max-w-[68rem]'>
                    <h3 className='text-[1rem] 2xl:text-[2.3rem]'>
                        OUR SERVICES
                    </h3>
                    <div className='overflow-hidden relative'>
                        <h2 className=' text-[1rem] md:text-[2rem] 2xl:text-[3rem] text1 overflow-hidden'>
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
