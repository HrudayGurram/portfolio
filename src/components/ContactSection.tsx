import Image from "next/image";

export default function () {
    return (
        <>
                <div className="max-w-7xl mx-auto px-6">
                    {/* About Section */}
                    <div className="w-full lg:w-1/2 mx-auto text-left mb-8">
                        <h2 className="text-4xl font-extrabold text-white">About</h2>
                        <p className="text-lg text-gray-400 mt-4 leading-relaxed">
                            Seasoned Frontend Web Developer with over 4 years of hands-on experience in developing robust, scalable, and innovative web solutions. Adept at leveraging a comprehensive skill set encompassing front-end technologies.
                        </p>
                    </div>

                    <hr className="border-gray-700 my-6" />

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row items-center md:justify-between text-sm text-left">
                        <div className="flex items-center space-x-3">
                            <Image src={'/emailIcon.png'} alt={'emailIcon'} width={30} height={30} className="h-6 w-6" />
                            <span className="text-gray-300 text-lg hover:text-gray-100 transition">hruday.gurram@gmail.com</span>
                        </div>
                    </div>
                </div>
        </>

    );
}