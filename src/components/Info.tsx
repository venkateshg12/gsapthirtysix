import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText)
const Info = () => {
    useGSAP(() => {
        let splitText1 = SplitText.create(".charsplit1", { type: "chars" });
        let splitText2 = SplitText.create(".charsplit2", { type: "chars" });
        let splitText3 = SplitText.create(".charsplit3", { type: "chars" });
        gsap.set(".charsplit1, .charsplit2, .charsplit3", { overflow: "hidden" });

        interface CharSlideUpConfig {
            // Animation properties
            opacity?: number;
            yPercent?: number;
            duration?: number;
            trigger?: Element | string;
            stagger?: number;
        }
        gsap.registerEffect({
            name: "charSlideUp",
            effect: (targets: HTMLDivElement, config: CharSlideUpConfig = {}) => {
                return gsap.from(targets, {
                    // opacity: config.opacity !== undefined ? config.opacity : 0,
                    yPercent: 100,
                    duration: 1.2,
                    stagger: { amount: 0.5 },
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: config.trigger || targets,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: true,
                        toggleActions: "play none none reverse",
                    }
                });
            },
        },)
        gsap.effects.charSlideUp(splitText1.chars, {})
        gsap.effects.charSlideUp(splitText2.chars, {})
        gsap.effects.charSlideUp(splitText3.chars, {})

        let text2 = SplitText.create(".text2", { type: "words" });
        let text3 = SplitText.create(".text3", { type: "words" });


        gsap.registerEffect({
            name: "TextFadeUp",
            effect: (targets: HTMLSpanElement[], config: CharSlideUpConfig = {}) => {
                return gsap.from(targets, {
                    opacity: 0,
                    duration: 1.2,
                    stagger:  0.08 ,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: config.trigger || targets,
                        start: "top 90%",
                        end: "top 40%",
                        scrub: true,
                        // markers : true,
                        toggleActions: "play none none reverse",
                    }
                });
            },
        },)
        gsap.effects.TextFadeUp(text2.words, {});
        gsap.effects.TextFadeUp(text3.words, {});


    }, [])

    return (
        <div>
            <div id="who we are" className='min-h-screen w-full'>
                <div className=' flex item-start justify-center font-pp'>
                    <div className='flex items-start md:flex-row flex-col justify-between gap-[3rem] md:gap-[16rem] 2xl:gap-[28rem]'>
                        <div className=' flex  items-center  font-bold gap-[0.4rem] 2xl:text-[2rem] lg:mr-0 '>
                            <span>02</span>
                            <div className='h-[0.2rem] w-[2rem]  bg-black relative' />
                            <span>WHO WE ARE</span>
                        </div>
                        <div className='flex flex-col gap-[7rem] max-w-[22rem] 2xl:max-w-[50rem]'>
                            <h1 className=' font-semibold font-ppmedium text-[1.3rem] lg:text-[1.6rem] 2xl:text-[3.6rem]'>
                                Our vision is to refine digital production while creating social impact and opportunity.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pt-20 gap-10 my-10">
                    <div className="flex flex-col md:flex-row justify-center items-center md:px-3">
                        <h1 className="charsplit1 text-[5rem] lg:text-[9rem] ">Agile</h1>
                        <div className=" max-w-[25rem] 2xl:max-w-[45rem] text-[1rem] md:ml-auto  lg:mr-[10vw] 2xl:text-[2rem]">
                            <span className="text1" >
                                We live and breathe efficiency and are not limited by geography. Local to Amsterdam with hubs in London, Paris, Johannesburg, New York, and beyond, we curate the right team for each project and get moving swiftly.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center md:px-3">
                        <h1 className="charsplit2 text-[5rem] lg:text-[9rem] ">Innovative</h1>
                        <div className=" max-w-[25rem] 2xl:max-w-[45rem] text-[1rem] md:ml-auto  lg:mr-[10vw] 2xl:text-[2rem]">
                            <span className="text2">
                                We use carefully crafted digital processes and new technology to ensure our initiatives run smoothly, allowing our lean and international team to focus on what matters and maximize momentum and opportunity.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center md:px-3">
                        <h1 className="charsplit3 text-[5rem] lg:text-[9rem] ">Cultured</h1>
                        <div className="max-w-[25rem] 2xl:max-w-[45rem] text-[1rem] md:ml-auto  lg:mr-[10vw] 2xl:text-[2rem]">
                            <span className="text3">
                                We are progressive and community-focused and don’t believe in maintaining the status quo or sticking to outdated ways. Our people reflect today’s realities and stay connected to culture.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
