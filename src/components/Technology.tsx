import Image from "next/image";

export default function Technology (props:{
    imagePath: string,
    techName: string,
    width: number,
    height: number,
    id: string,
    className?: string,
}) {
    const {
        imagePath,
        techName,
        width,
        height,
        id,
        className
    } = props;
    return (
        <>
            <div
                id={id}
                className={`flex items-center justify-center font-semibold flex-col mt-2.5 md:mt-0 ${className}`}
            >
                <Image
                    src={imagePath}
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