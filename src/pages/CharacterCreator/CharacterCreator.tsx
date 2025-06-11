import RaceCard from './components/RaceCard';
import { races } from './assets/Races';
import PageArrow from './components/PageArrow';

export default function CharacterCreator() {
    return (
        <div className="character-creator px-5 text-center">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <div className="flex flex-row">
                <PageArrow
                    direction="left"
                    className="basis-1/12 items-center"
                />
                <div className="grid basis-10/12 grid-cols-3 gap-10 py-10">
                    {races.map((race, idx) => (
                        <RaceCard
                            key={idx}
                            img={race.img}
                            name={race.name}
                            description={race.desc}
                        />
                    ))}
                </div>
                <PageArrow
                    direction="right"
                    className="basis-1/12 items-center"
                />
            </div>
        </div>
    );
}
