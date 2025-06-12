import { Outlet } from 'react-router';
import PageArrow from './components/PageArrow';
import {
    RACE_SELECTOR_ROUTE,
    CLASS_SELECTOR_ROUTE,
} from './assets/RouteConstants';

export default function CharacterCreator() {
    return (
        <div className="character-creator text-center">
            <h1>Character Creator</h1>
            <p>Welcome to the Character Creator page!</p>

            <div className="flex flex-row pt-5">
                <div className="relative basis-1/6 items-start sm:basis-1/12 sm:items-center">
                    <div className="sticky top-1/2 left-0 -translate-y-1/2">
                        <PageArrow
                            direction="left"
                            navigateTo={RACE_SELECTOR_ROUTE}
                        />
                    </div>
                </div>
                <div className="grow">
                    <Outlet />
                </div>
                <div className="relative basis-1/6 sm:basis-1/12 sm:items-center">
                    <div className="sticky top-1/2 right-0 -translate-y-1/2">
                        <PageArrow
                            direction="right"
                            navigateTo={CLASS_SELECTOR_ROUTE}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
