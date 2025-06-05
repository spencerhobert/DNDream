import RaceCard from './components/RaceCard';
import { races } from './assets/Races';

export default function CharacterCreator() {
    return (
        <div className="character-creator px-5">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <div className="grid grid-cols-3 py-10 gap-10">
                {races.map((race, idx) => (
                    <RaceCard
                        key={idx}
                        img={race.img}
                        name={race.name}
                        description={race.desc}
                    />
                ))}
            </div>
            
        </div>
    );
}