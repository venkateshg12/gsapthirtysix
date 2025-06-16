import { useState } from "react";

export const navlinks = ["What we do", "Who we are", "How we give bac", "Talk to us"]



interface HamburgerMenuProps {
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    size = 32,
    color = '#333',
    strokeWidth = 3,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                onClick={toggleMenu}
                className={`relative p-2 focus:outline-none  rounded-md transition-all duration-200 `}
                style={{ width: size + 16, height: size + 16 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
                <div className="relative" style={{ width: size, height: size }}>
                    {/* Top line */}
                    <div
                        className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            width: size,
                            height: strokeWidth,
                            backgroundColor: color,
                            top: isOpen ? '50%' : '25%',
                            transform: isOpen
                                ? 'translateY(-50%) rotate(45deg)'
                                : 'translateY(-50%) rotate(0deg)',
                            transformOrigin: 'center'
                        }}
                    />

                    {/* Bottom line */}
                    <div
                        className="absolute left-0 rounded-full transition-all duration-300 ease-in-out"
                        style={{
                            width: size,
                            height: strokeWidth,
                            backgroundColor: color,
                            top: isOpen ? '50%' : '75%',
                            transform: isOpen
                                ? 'translateY(-50%) rotate(-45deg)'
                                : 'translateY(-50%) rotate(0deg)',
                            transformOrigin: 'center'
                        }}
                    />
                </div>
            </button>
        </div>
    );
};

export default HamburgerMenu;



export const CircleText = () => {
    const text = "THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — ";
    return (
        <div className="relative">
            <div className="absolute left-1/2">
                {
                    text.split("").map((char, i) => (
                        <span style={{
                            transform: `translate(-20%, -20%) rotate(${i * (360 / text.length)}deg)`,
                            transformOrigin: '0px 90px', position: "absolute"
                        }} className="te" >{char}</span>
                    ))
                }

            </div>
        </div>
    );
};

type prop = {
    className?: string,
}
export const OpenButton = ({ className = '' }: prop) => {
    const body = document.body
    const bgColor = window.getComputedStyle(body).backgroundColor;
    console.log('Background color:', bgColor);
    return (
        <>
            <button className={`flex items-center justify-center rounded-4xl px-4 py-2 ${bgColor == 'white' ? outline-gray-200 : ' '} outline-1 ${className || ''}`}>
                <div>
                    <svg width="20px" height="20px" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" xmlSpace="preserve">
                        <path fill="#000000" fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round" d="M 35,19L 41,19L 41,35L 57,35L 57,41L 41,41L 41,57L 35,57L 35,41L 19,41L 19,35L 35,35L 35,19 Z " />
                    </svg>
                </div>
            </button>
        </>
    )
}
type props = {
    className: string,
}
export const CloseButton = ({ className }: props) => {
    return (
        <>
            <button className={`flex items-center justify-center rounded-4xl px-4 py-2 outline-1 bg-black ${className || ''}`}>
                <div>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            d="M5 12h14"
                        />
                    </svg>
                </div>
            </button>
        </>
    )
}