import React from 'react';
import { RaceCard } from './components/RaceCard';

export const CharacterCreator: React.FC = () => {
    return (
        <div className="character-creator">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <RaceCard />
        </div>
    );
}