import ReactImg from '../../../assets/react.svg';

type ClassTypes = {
    name: string;
    img: string;
    desc: string;
};

export const classes: ClassTypes[] = [
    {
        name: 'Barbarian',
        img: ReactImg,
        desc: 'This is for Barbarian',
    },
    {
        name: 'Warlock',
        img: ReactImg,
        desc: 'This is for Warlock',
    },
    {
        name: 'Wizard',
        img: ReactImg,
        desc: 'This is for Wizard',
    },
    {
        name: 'Cleric',
        img: ReactImg,
        desc: 'This is for Cleric',
    },
];
