import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
const Last = () => {
    useGSAP(() => {
        let splittext = SplitText.create(".splitText1", { type: "words, chars" });
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
        
        let splittext2 = SplitText.create(".splitText2", { type: "words, chars" });
        gsap.set(splittext2.words, { overflow: "hidden" });
        gsap.from(splittext2.chars, {
            y: "100%",
            rotateX: -30,
            duration: 2,
            ease: "power3.out",
            stagger: 0.05,
            scrollTrigger: {
                trigger: splittext2.chars,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
                toggleActions: "play none none reverse"
            }
        });
    }, [])
    return (
        <div>
            <div id="connect with us" className="min-h-screen w-full">
                <div className=' flex item-start justify-center font-pp mt-[10rem]'>
                    <div className='flex items-start flex-col justify-between gap-[3rem] md:gap-[5rem] '>
                        <div className=' flex  items-center justify-center text-[1rem] lg:text-[1.7rem] 2xl:text-[3rem]  font-bold gap-[0.4rem]  mx-auto'>
                            <span>01</span>
                            <div className='h-[0.2rem] w-[2rem] bg-black relative' />
                            <span>HOW WE GIVE BACK</span>
                        </div>
                        <div className='flex flex-col gap-[1rem] max-w-[45rem] 2xl:max-w-[80rem]'>
                            <h1 className='splitText1 font-semibold  font-ppmedium text-[1.3rem] lg:text-[1.6rem] 2xl:text-[3.6rem]'>
                                At Thirtysixstudio, we recognize that our industry can perpetuate
                                harm. We believe we have to try and reverse some of these imbalances.
                                That’s why we’re launchingSS36, our local social sustainability hub.
                            </h1>
                            <div className=' font-montreal 2xl:text-[2rem] '>
                                <h1 className="splitText2 font-semibold  font-ppmedium text-[1.3rem] lg:text-[1.6rem] 2xl:text-[3.6rem]">
                                    ThroughSS36, were invest some of our revenue and expertise into the communities
                                    that shape the culture and trends our field so heavily relies on.
                                    Our main focus is on bridging gaps for those affected by system obstacles related
                                    to race, sexuality, wealthand gender identity.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Last;
