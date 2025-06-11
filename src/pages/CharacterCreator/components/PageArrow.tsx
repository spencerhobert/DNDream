import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

type ArrowType = {
    className?: string;
    direction: 'left' | 'right';
};

export default function PageArrow({ className, direction }: ArrowType) {
    return (
        <div className={className}>
            <button className="bg-green-300">
                {direction === 'left' ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
        </div>
    );
}
