// SmoothScroll.jsx
import { useEffect, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.2,
            // easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            direction: "vertical",
            gestureDirection: "vertical",
            smoothTouch: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
