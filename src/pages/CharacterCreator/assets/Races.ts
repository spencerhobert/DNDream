import ReactImg from '../../../assets/react.svg';

type RaceTypes = {
    name: string;
    img: string;
    desc: string;
};

export const races: RaceTypes[] = [
    {
        name: 'Human',
        img: ReactImg,
        desc: 'This is for Human',
    },
    {
        name: 'Elf',
        img: ReactImg,
        desc: 'This is for Elf',
    },
    {
        name: 'Dragonborn',
        img: ReactImg,
        desc: 'This is for Dragonborn',
    },
    {
        name: 'Halfling',
        img: ReactImg,
        desc: 'This is for Halfling',
    },
];
