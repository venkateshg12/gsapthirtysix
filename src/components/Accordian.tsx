import { useState } from 'react';
import { CloseButton, OpenButton } from '../utils/Constants';

const Accordion = () => {
    const accordionData = [
        {
            title: "CREATIVE",
            content: ["Art direction", "Creative direction"]
        },
        {
            title: "DESIGN",
            content: ["Digital Design", "UX/UI Design", "Web Design", "Graphic Design", "3D Design", "Interactive Design", "Illustration Design", "Brand Design"]
        },
        {
            title: "ANIMATION",
            content: ["2D Animation", "3D Animation", "Motion Graphics", "Experimental Animation"]
        },
        {
            title: "TECHNOLOGY",
            content: ["Development", "Implementation", "Creative Coding", "Prototyping", "Quality Assurance", "Testing"]
        },
        {
            title: "PROJECT DELIVERY",
            content: ["Production Strategy", "Project Management", "Team Direction"],
        },
        {
            title: "EXAMPLE PROJECTS",
            content: ["Social Ads", "Websites", "AR Filters and Experiences", "Display Ads (Html5, Static, Rich media)", "Digital Out of Home", "Static and Animated Assets", "Digital Installations"],
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-20">
            <div className="">
                <div className="overflow-hidden  flex flex-col  items-start justify-center">
                    {accordionData.map((item, index) => (
                        <div key={index} className="border-b font-ppmedium relative border-black w-full">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="group w-full  py-3 text-left cursor-pointer transition-all transform duration-700 ease-in  flex justify-between items-center px-[3rem] md:px-[25vw]"
                            >
                                <h3 className="text-lg  text-black font-pp">
                                    {item.title}
                                </h3>
                                <div className="transition-transform duration-500">
                                    {openIndex === index ? (
                                        <div>
                                            <CloseButton className="" />
                                        </div>
                                    ) : (
                                        <div>
                                            <OpenButton className=" group-hover:outline-1 group-hover:outline-black" />
                                        </div>
                                    )}
                                </div>
                            </button>

                            <div
                                style={{ transitionTimingFunction: 'cubic-bezier(0.37, 0, 0.63, 1)' }}
                                className={`overflow-hidden transition-all duration-700  ${openIndex === index

                                    ? 'max-h-[500px] opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="py-3 ">
                                    <p className="text-gray-800 leading-relaxed flex flex-col w-full md:px-[25vw]">
                                        {Array.isArray(item.content) && item.content.map((list, ind) => (
                                            <span key={ind} className='relative group block w-[99vw] md:-ml-[25vw]'>
                                                <p className='w-full py-3 last:py-0 relative z-10 group-hover:text-white pl-[3rem] md:pl-[25vw]'>{list}</p>
                                                <span className="absolute inset-0 w-full bg-black transition-transform duration-500 ease-in-out transform scale-y-0 origin-bottom group-hover:scale-y-100"></span>
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Accordion;
