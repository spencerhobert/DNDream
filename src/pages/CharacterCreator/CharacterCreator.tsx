import RaceCard from './components/RaceCard';
import { races } from './assets/Races';
import PageArrow from './components/PageArrow';

export default function CharacterCreator() {
    return (
        <div className="character-creator text-center">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <div className="flex flex-row pt-5">
                <div className="relative basis-1/6 items-start sm:basis-1/12 sm:items-center">
                    <div className="fixed top-5/12 left-2 sm:left-auto">
                        <PageArrow direction="left" />
                    </div>
                </div>
                <div className="grid basis-4/6 grid-cols-1 gap-5 pb-2 sm:basis-10/12 sm:grid-cols-3 sm:gap-10">
                    {races.map((race, idx) => (
                        <RaceCard
                            key={idx}
                            img={race.img}
                            name={race.name}
                            description={race.desc}
                        />
                    ))}
                </div>
                <div className="relative basis-1/6 sm:basis-1/12 sm:items-center">
                    <div className="fixed top-5/12 right-2 sm:right-auto">
                        <PageArrow direction="right" />
                    </div>
                </div>
            </div>
        </div>
    );
}
