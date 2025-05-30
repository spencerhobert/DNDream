import React from 'react';
import { RaceCard } from './components/RaceCard';
import ReactImg from '../../assets/react.svg';

export const CharacterCreator: React.FC = () => {
    return (
        <div className="character-creator">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <RaceCard 
                img={ReactImg}
                name="Test"
                description="This is a test"
            />
        </div>
    );
}