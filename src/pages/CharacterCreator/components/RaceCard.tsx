import React from "react";

interface Props {
    img: string;
    name: string;
    description: string;
}

export const RaceCard: React.FC<Props> = (props) => {
    return (
        <div className="max-w-60 max-h-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img src={props.img} className="rounded-t-lg w-full" alt="React Logo" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {props.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {props.description}
                    </p>
                </div>
            </a>
        </div>
    );
}