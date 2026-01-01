'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Technology(props: {
    imagePath: string,
    imageLightPath?: string,
    techName: string,
    width: number,
    height: number,
    id: string,
    className?: string,
}) {
    const {
        imagePath,
        imageLightPath,
        techName,
        width,
        height,
        id,
        className
    } = props;

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);

        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const currentImagePath = !isDarkMode && imageLightPath ? imageLightPath : imagePath;
    return (
        <>
            <div
                id={id}
                className={`flex items-center justify-center font-semibold flex-col mt-2.5 md:mt-0 ${className}`}
            >
                <Image
                    src={currentImagePath}
                    alt={techName}
                    width={width}
                    height={height}
                    id={`${id}-image`}
                />
                <span
                    className="font-semibold mt-1"
                    id={`${id}-technology`}
                >
                    {techName}
                </span>
            </div>
        </>
    )
}