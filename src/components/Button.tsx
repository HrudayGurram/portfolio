export default function Button(props: {
    onPress?: () => void;
    id: string;
    text: string;
    className?: string;
}) {
    const {
        id,
        text,
        onPress,
        className,
    } = props;
    return (
        <button
            id={id}
            onClick={onPress}
            className={`${className} rounded-full bg-black text-white p-4 transition-all duration-300 hover:bg-white hover:text-black border-2 font-semibold text-xl`}>
            {text}
        </button>
    )
}