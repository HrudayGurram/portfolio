import Technology from "@/src/components/Technology";

export default function Experience() {
    return (
        <>
            <div className="flex items-center justify-center text-2xl font-semibold">
                <p>Tech Stack</p>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-evenly w-full">
                <Technology
                    id={'javascript'}
                    imagePath={'/js.svg'}
                    width={70}
                    height={70}
                    techName={'Javascript'}
                />
                <Technology
                    id={'React'}
                    imagePath={'/reactjs.svg'}
                    width={70}
                    height={70}
                    techName={'React'}
                />
                <Technology
                    id={'NextJS'}
                    imagePath={'/nextjs_dark.svg'}
                    imageLightPath={'/nextjs_light.svg'}
                    width={60}
                    height={60}
                    techName={'Next.js'}
                />
                <Technology
                    id={'html'}
                    imagePath={'/html.svg'}
                    width={70}
                    height={70}
                    techName={'HTML'}
                />
                <Technology
                    id={'CSS'}
                    imagePath={'/sass.svg'}
                    width={70}
                    height={70}
                    techName={'sass'}
                    className={'col-span-2 text-center md:col-span-1'}
                />
            </div>
        </>
    );
}