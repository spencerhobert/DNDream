type RaceCardProps = {
    img: string;
    name: string;
    description: string;
};

export default function RaceCard({ img, name, description }: RaceCardProps) {
    return (
        <div
            className="center h-full max-h-100 max-w-70 rounded-lg border border-gray-200 bg-white
                shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:dark:shadow-amber-50"
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
