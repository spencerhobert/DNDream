
type RaceProps = {
    img: string;
    name: string;
    description: string;
}

export default function RaceCard({
    img,
    name,
    description
}: RaceProps) {
    return (
        <div className="center max-w-70 max-h-100 h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:dark:shadow-amber-50">
            <img src={img} className="rounded-t-lg w-full" alt="React Logo" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-wrap break-words">
                    {description}
                </p>
            </div>
        </div>
    );
}