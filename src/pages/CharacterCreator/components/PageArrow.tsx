import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

type ArrowType = {
    direction: 'left' | 'right';
};

export default function PageArrow({ direction }: ArrowType) {
    return (
        <IconContext.Provider
            value={{
                size: '20',
            }}
        >
            <button
                className="rounded-xl border border-green-400 bg-green-300 px-2 py-4 transition-all
                    duration-500 hover:rounded-3xl hover:bg-green-200 dark:border-green-950
                    dark:bg-green-700 dark:hover:bg-green-800"
            >
                {direction === 'left' ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
        </IconContext.Provider>
    );
}
