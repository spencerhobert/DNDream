type RaceCardProps = {
    img: string;
    name: string;
    description: string;
};

export default function RaceCard({ img, name, description }: RaceCardProps) {
    return (
        <div
            className="center h-full max-h-80 max-w-60 rounded-lg border-2 border-gray-200 bg-white
                shadow-sm transition-all duration-500 hover:rounded-2xl hover:border-black
                hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800
                dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:shadow-amber-50"
        >
            <img src={img} className="w-full rounded-t-lg" alt="React Logo" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <p className="mb-1 font-normal text-wrap break-words text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
