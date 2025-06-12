import { races } from '../assets/Races';
import Card from '../components/Card';

export default function RaceSelector() {
    return (
        <div className="grid grid-cols-1 gap-5 pb-2 sm:basis-10/12 sm:grid-cols-3 sm:gap-10">
            {races.map((race, idx) => (
                <Card
                    key={idx}
                    img={race.img}
                    name={race.name}
                    description={race.desc}
                />
            ))}
        </div>
    );
}
