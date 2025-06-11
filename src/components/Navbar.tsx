import { useEffect, useRef, useState } from "react";
import HamburgerMenu, { navlinks } from "../utils/Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const navRef = useRef(null);
    const mobileNavRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleScreenLock = () => {
        if (!openNav) {
            setOpenNav(true);
        } else {
            animateMenuClose();
        }
    };

    const animateMenuClose = () => {
        const tl = gsap.timeline({
            onComplete: () => setOpenNav(false)
        });

        tl.to(mobileNavRef.current?.children || [], {
            opacity: 0,
            y: -30,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        })
            .to(mobileMenuRef.current, {
                y: "-100%",
                duration: 0.6,
                ease: "power2.inOut"
            });
    };

    // GSAP animation for mobile menu
    useGSAP(() => {
        if (openNav && mobileMenuRef.current) {
            // Set initial state
            gsap.set(mobileMenuRef.current, { y: "100%" });
            gsap.set(mobileNavRef.current?.children || [], {
                opacity: 0,
                y: 30
            });

            const tl = gsap.timeline();

            tl.to(mobileMenuRef.current, {
                y: "0%",
                duration: 0.8,
                ease: "power2.out"
            })
                .to(mobileNavRef.current?.children || [], {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=0.3");
        }
    }, [openNav]);

    useEffect(() => {
        document.body.style.overflow = openNav ? 'hidden' : '';
    }, [openNav]);

    useGSAP(() => {
        const navLinks = navRef.current?.querySelectorAll(".nav-link");

        navLinks.forEach((link: Element) => {
            const underline = link.querySelector(".underline");

            gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });
            link.addEventListener('mouseenter', () => {
                gsap.set(underline, { transformOrigin: "left center" });
                gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.5,
                    ease: "power2.out",
                })
            })

            link.addEventListener('mouseleave', () => {
                gsap.set(underline, { transformOrigin: "right center" });
                gsap.to(underline, {
                    scaleX: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    transformOrigin: "right center",
                })
            })

            return () => {
                navLinks.forEach((link: Element) => {
                    link.addEventListener('mouseenter', () => { });
                    link.removeEventListener('mouseleave', () => { });
                })
            }
        })
    })

    return (
        <div >
            <div  className="w-full backdrop:blur-sm bg-opacity-95 border-zinc-900 border-b ">
                <div className=" px-4 md:px-8 lg:px-7  py-5 md:py-6 lg:py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0 ">
                            <h1 className="text-[1.3rem] 2xl:text-[2rem]">Thirtysixstudio</h1>
                        </div>
                        <div className=" md:flex  items-center justify-evenly gap-5 xl:gap-[1.4vw]  2xl:text-[1vw] md:text-[1.1rem] hidden ">
                            <nav ref={navRef} className=" font-montreal cursor-pointer flex items-center gap-5 lg:gap-6 xl:gap-8 2xl:gap-[1.4vw] font-bold mr-[5rem]">
                                {navlinks.map((item, index) => (
                                    <a href={`#${item.toLowerCase()}`}
                                        key={index}
                                        className="nav-link cursor-pointer inline-block relative font-medium"
                                    >{item}
                                        <span className="underline absolute bottom-0 left-0 h-0.5 w-full bg-black "></span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="md:hidden" onClick={toggleScreenLock}>
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </div>
            {
                openNav && (
                    <>
                        <div ref={mobileMenuRef} className="relative flex flex-col font-montreal z-50  bg-white h-screen text-black items-start justify-center">
                            <nav ref={mobileNavRef} className="flex flex-col items-start justify-center -mt-[20vh] pl-[1rem] gap-3 text-[1.7rem]">
                                {
                                    navlinks.map((item, index) => (
                                        <a href={`#${item.toLowerCase}`} key={index} className="inline-block cursor-pointer"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                                opacity: 0,
                                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                                            }}
                                            onClick={toggleScreenLock}
                                        > {item}</a>
                                    ))
                                }
                            </nav>
                        </div>
                    </>
                )
            }
        </div >
    )
}

export default Navbar;
/* {
    openNav && (
        <>
            <div className="relative flex flex-col font-montreal  h-screen text-black pt-[20vh]  items-center">
                <nav className="flex flex-col text-center gap-10 text-[2.5rem] z-50">
                    {
                        navlinks.map((item, index) => (
                            <a href={`#${item.toLowerCase()}`}
                                key={index}
                                className=" text-black cursor-pointer inline-block"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    opacity: 0,
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                                }}
                                onClick={toggleScreenLock}
                            >{item}</a>
                        ))
                    }
                </nav>
            </div>
        </>
    )
} */