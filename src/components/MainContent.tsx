"use client"
import Image from "next/image";
import Button from "@/src/components/Button";

export default function MainContent() {
    const handleDownload = () => {
        // Create a virtual link, click it, and remove it
        const link = document.createElement("a");
        link.href = "/pdf/Hruday_Gurram_Resume.pdf";
        link.download = "Hruday_Gurram_Resume.pdf"; // The name the user's computer will save it as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={213}
                    height={213}
                />
                <div className="text-container flex items-center justify-center flex-wrap ml-2 mt-5 font-semibold gap-y-[5px]">
                    <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text text-3xl text-center">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I&apos;m Hruday Gurram  &nbsp;
                    </span>
                    <span className="text-2xl text-center">
                        I build things for web and have fun doing it.
                    </span>
                </div>
            </div>
            <div className="flex flex-col contact-container md:flex-row">
                <Button
                    id={"get-in-touch"}
                    className="mb-2.5 md:mr-2.5 md:mb-0"
                    text={"Get In Touch"}
                    onPress={() => {
                        window.location.href = "mailto:hruday.gurram@gmail.com?body=Your message here";
                    }}
                />
                <Button
                    id={"download-cv"}
                    className="ml-0 md:ml-2.5"
                    text={"Download CV"}
                    onPress={handleDownload}
                />
            </div>
        </>
    );
}
