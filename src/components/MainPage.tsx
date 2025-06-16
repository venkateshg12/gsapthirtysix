import Navbar from './Navbar';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { createContext, useState, useContext } from 'react';
import { useColor } from '../utils/ColorContext';
const MainPage = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mainText = useRef<HTMLDivElement>(null);
    const chillRef = useRef<HTMLDivElement>(null);
    const text3 = useRef<HTMLDivElement>(null);
    const[red  , setRed] = useState<boolean>(false)

    // const [red, setRed] = useColor(false);
    const handlered = (): void => {
        setRed(!red);
    }

    useGSAP(() => {
        const handleMouseMove = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 1,
                ease: "power2.out"
            });
        };

        gsap.set(".nav", { y: "-100%", opacity: 0 });
        gsap.set(mainText.current, { opacity: 0 });
        var t = gsap.timeline();
        t.to(".nav", {
            y: 0,
            delay: 0.2,
            opacity: 1,
            duration: 1.2,
            ease: "cubic-bezier(0.37, 0, 0.63, 1)",
        })
            .to(mainText.current, {
                opacity: 1,
                duration: 1.4,
                ease: "cubic-bezier(0.12, 0, 0.39, 0)",
            });

        if (chillRef.current && cursorRef.current) {
            chillRef.current.addEventListener('mouseenter', () => {
                gsap.to(cursorRef.current, {
                    scale: 4,
                    backgroundColor: red ? "#000000" : "#FD2C2A",
                    duration: 1,
                    ease: "power4.out"
                });
            });

            chillRef.current.addEventListener('mouseleave', () => {
                gsap.to(cursorRef.current, {
                    scale: 1,
                    backgroundColor: red ? "#000000" : "#FD2C2A",
                    duration: 1,
                    ease: "power4.out"
                });
            });

            chillRef.current.addEventListener('click', () => {
                if (!red) {
                    gsap.to('body', {
                        backgroundColor: "#FD2C2A",
                        duration: 2,
                        ease: "power4.out"
                    });
                    gsap.to(cursorRef.current, {
                        backgroundColor: "#000000",
                        duration: 2,
                        ease: "power4.out"
                    });
                } else {
                    gsap.to('body', {
                        backgroundColor: "#FFFFFF",
                        duration: 2,
                        ease: "power4.out"
                    });
                    gsap.to(cursorRef.current, {
                        backgroundColor: "#FD2C2A",
                        duration: 5,
                        ease: "power4.out"
                    });
                }
            });
        }

        gsap.fromTo(text3.current, 
            { 
                y : "100%",
                opacity : 0,
            },
            { 
                y : 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            }, 
        )


        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [red]);


    return (
        <div>
            <div ref={cursorRef} className='cursor pointer-events-none fixed w-4 h-4 rounded-full bg-red-500 z-[100]'></div>
            <div className='nav absolute top-0 left-0 right-0 z-50'>
                <Navbar />
            </div>
            <div className='relative pt-[8rem]'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center gap-[10rem] justify-between'>
                        <div ref={mainText} className=' flex flex-col gap-3 px-3'>
                            <div className='  lg:max-w-[22rem] 2xl:max-w-[40rem]   leading-[2.3rem] 2xl:leading-[1.6vw] text-[2rem] 2xl:text-[1.6vw]  font-ppmedium '>
                                <h3>At Thirtysixstudio, we build digital assets and immersive experiences for purposeful brands.</h3>
                            </div>
                            <div className='  lg:max-w-[22rem] 2xl:max-w-[40rem] leading-[1.7rem] 2xl:leading-[1.2vw] text-[1.4rem] 2xl:text-[0.8vw] '>
                                <h6>We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.</h6>
                            </div>
                            <div className=' lg:max-w-[22rem] 2xl:max-w-[40rem] leading-[1.7rem] 2xl:leading-[1.2vw] text-[1.4rem] 2xl:text-[0.8vw] '>
                                <h6>Scroll</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={chillRef}  onClick={handlered} className='text-center w-full md:text-[9vw]  lg:text-[11vw] mt-3 font-pp lg:tracking-[1.5rem] z-[1] font-pp hidden md:block'>
                    <h1 ref={text3} >Thirtysixstudio</h1>
                </div>
                <div className='md:hidden leading-[9rem] mt-3 px-4 max-[479px]:text-[25vw] max-[479px]:leading-[23vw] block text-[10rem]'>
                    <h1>Thirty</h1>
                    <h1>Six</h1>
                    <h1>Studio</h1>
                </div>
            </div>

        </div>
    )
}

export default MainPage;
