import React from "react";
import ReactImg from "../../../assets/react.svg";

export const RaceCard: React.FC = () => {
    return (
        <div className="max-w-60 max-h-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img src={ReactImg} className="rounded-t-lg w-full" alt="React Logo" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        This is a test
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Testing
                    </p>
                </div>
            </a>
        </div>
    );
}