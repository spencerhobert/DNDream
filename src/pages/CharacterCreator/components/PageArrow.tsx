import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router';

type ArrowType = {
    direction: 'left' | 'right';
    disabled?: boolean;
    navigateTo?: string;
};

export default function PageArrow({
    direction,
    disabled,
    navigateTo = '#',
}: ArrowType) {
    const navigate = useNavigate();

    // If the button is active, but navigateTo doesn't have anything inside of it, make the button disabled
    //   This makes it so '#' cannot be a navigation, which should be fine.
    if (
        (disabled === false || typeof disabled === 'undefined') &&
        navigateTo === '#'
    ) {
        disabled = true;
    }

    return (
        <IconContext.Provider
            value={{
                size: '20',
            }}
        >
            <button
                className="rounded-xl border border-green-400 bg-green-300 px-2 py-4 transition-all
                    duration-500 not-disabled:hover:rounded-3xl not-disabled:hover:bg-green-200
                    disabled:opacity-50 disabled:hover:rounded-xl dark:border-green-950
                    dark:bg-green-700 dark:hover:bg-green-800"
                disabled={disabled}
                onClick={() => {
                    navigate(navigateTo);
                }}
            >
                {direction === 'left' ? <FaAngleLeft /> : <FaAngleRight />}
            </button>
        </IconContext.Provider>
    );
}
