import { classes } from '../assets/Classes';
import Card from '../components/Card';

export default function ClassSelector() {
    return (
        <div className="grid grid-cols-1 gap-5 pb-2 sm:basis-10/12 sm:grid-cols-3 sm:gap-10">
            {classes.map((charClass, idx) => (
                <Card
                    key={idx}
                    img={charClass.img}
                    name={charClass.name}
                    description={charClass.desc}
                />
            ))}
        </div>
    );
}
