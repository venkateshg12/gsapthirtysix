import { useEffect, useRef, useState } from "react";
import HamburgerMenu, { navlinks } from "../utils/Constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const navRef = useRef<HTMLElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileNavRef = useRef<HTMLDivElement>(null);
    const originalBgColor = useRef<string>("");
    const colorRef = useRef<HTMLDivElement>(null);

    console.log(colorRef.current?.style.backgroundColor)

    const toggleScreenLock = () => {
        if (!openNav) {
            originalBgColor.current = document.body.style.backgroundColor ||
                getComputedStyle(document.body).backgroundColor;
            setOpenNav(true);
            document.body.style.backgroundColor = "white";
        } else {
            animateMenuClose();
        }
    };

    const animateMenuClose = () => {
        const tl = gsap.timeline({
            onComplete: () => {
                setOpenNav(false);
            }
        });

        // Animate nav links out first 
        tl.to(mobileNavRef.current?.children || [], {
            opacity: 0,
            y: 30,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in"
        })
            .to(mobileMenuRef.current, {
                y: "100%",
                zIndex : 99,
                duration: 0.6,
                ease: "power2.inOut"
            });
    };
    useEffect(() => {
        document.body.style.overflow = openNav ? 'hidden' : '';
    }, [openNav]);

    useGSAP(() => {
        const navLinks = navRef.current?.querySelectorAll(".nav-link");
        if(!navLinks) return;
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
            <div ref={colorRef} className="w-full  border-zinc-900 border-b ">
                <div className=" px-4 md:px-8 lg:px-7  py-5 md:py-6 lg:py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0 z-50 ">
                            <h1 className="text-[1.3rem] font-pp 2xl:text-[2rem]"><a href=""> Thirtysixstudio</a> </h1>
                        </div>
                        <div className=" md:flex items-center justify-evenly gap-5 xl:gap-[1.4vw] 2xl:text-[1vw] md:text-[1.1rem] hidden 2xl:mr-[7rem]">
                            <nav ref={navRef} className="font-montreal cursor-pointer flex items-center gap-5 lg:gap-6 xl:gap-8 2xl:gap-[1.4vw] font-bold mr-[5rem]">
                                {navlinks.map((item, index) => (
                                    <a /* href={`#${item.toLowerCase()}`} */
                                        key={index}
                                        className="nav-link cursor-pointer inline-block relative font-medium"
                                        onClick={() => {
                                            const target = document.getElementById(item.toLowerCase());
                                            if (target) {
                                                target.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                    > {item}
                                        < span className="underline absolute bottom-0 left-0 h-0.5 w-full bg-black " ></span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="md:hidden z-50" onClick={toggleScreenLock}>
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </div >
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