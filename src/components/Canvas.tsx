import React, { useEffect, useRef, useState } from 'react'
import images from "../utils/images";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface DetailItem {
    startIndex: number;
    numImages: number;
    duration: number;
    size: number;
    top: number;
    left: number;
    zIndex: number;
}

type prop = {
    details: DetailItem;
}
const Canvas = ({ details }: prop) => {
    const { startIndex, numImages, duration, size, top, left, zIndex } = details;
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [index, setIndex] = useState(startIndex);
    useGSAP(() => {
        const obj = { value: index };
        gsap.to(obj, {
            value: startIndex + numImages - 1,
            duration: 3,
            ease: "linear",
            repeat: -1,
            onUpdate: () => {
                setIndex(Math.round(obj.value))
            }
        })
    }, { dependencies: [details.startIndex] })
    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const img = new window.Image();
        img.src = images[index];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
            ctx?.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
        return () => {
            img.onload = null;
        };
    }, [index])

    return (
        <canvas ref={canvasRef}
            data-scroll
            data-scroll-speed={Math.random().toFixed(2)}
            className='absolute overflow-hidden'
            style={{ width: `${size * 1.2}px`, height: `${size * 1.2}px`, top: `${top}%`, left: `${left}%`, zIndex: `${zIndex}` }}
            id='canvas'>
        </canvas>
    )
}

export default Canvas;  
