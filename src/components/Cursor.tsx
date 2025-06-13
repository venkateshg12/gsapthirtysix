import { useEffect, useRef, useState } from "react";

const Cursor = () => {
    const cursorRef = useRef(null);
    const followRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Hide default cursor
        document.body.style.cursor = "none";

        const handleMouseMove = (event) => {
            const target = event.target;
            const cursor = cursorRef.current;
            const follow = followRef.current;

            if (!cursor || !follow) return;

            // Check if hovering over a button (anchor tag)
            if (target.tagName === "A") {
                setIsHovering(true);
                
                // Hide cursor dot
                cursor.style.backgroundColor = "transparent";
                
                // Position follow element to match button
                follow.style.top = target.offsetTop + "px";
                follow.style.left = target.offsetLeft + "px";
                follow.style.width = target.clientWidth + "px";
                follow.style.height = target.clientHeight + "px";
            } else {
                setIsHovering(false);
                
                // Move cursor and follow to mouse position
                const moveElement = (element) => {
                    element.style.top = event.clientY + "px";
                    element.style.left = event.clientX + "px";
                };
                
                moveElement(cursor);
                moveElement(follow);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.style.cursor = "auto";
        };
    }, []);

    return (
        <div className="w-full h-screen bg-gray-900 overflow-hidden flex justify-center items-center font-sans">
            {/* Custom Cursor Dot */}
            <div
                ref={cursorRef}
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
                style={{ top: 0, left: 0 }}
            />

            {/* Follow Element */}
            <div
                ref={followRef}
                className={`fixed pointer-events-none z-40 transition-all duration-200 ease-out ${
                    isHovering
                        ? "border border-white transform -translate-x-2 -translate-y-2 p-2"
                        : "border border-white rounded-full p-8 transform -translate-x-1/2 -translate-y-1/2"
                }`}
                style={{ 
                    top: 0, 
                    left: 0,
                    borderRadius: isHovering ? "0%" : "100%"
                }}
            />

            {/* Buttons */}
            <div className="flex flex-col items-center">
                <a 
                    className="flex justify-center items-center px-8 py-4 my-16 text-gray-400 cursor-pointer font-light uppercase tracking-wider hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'Monument Extended, sans-serif' }}
                >
                    Offbeat
                </a>
                
                <a 
                    className="flex justify-center items-center px-8 py-4 my-16 text-gray-400 cursor-pointer font-light uppercase tracking-wider hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'Monument Extended, sans-serif' }}
                >
                    Asterisks
                </a>
                
                <a 
                    className="flex justify-center items-center px-8 py-4 my-16 text-gray-400 cursor-pointer font-light uppercase tracking-wider hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'Monument Extended, sans-serif' }}
                >
                    Unlocked
                </a>
            </div>
        </div>
    );
};

export default Cursor;