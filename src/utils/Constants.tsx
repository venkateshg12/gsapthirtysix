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
    className,
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
