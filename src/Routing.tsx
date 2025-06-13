import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CharacterCreator from './pages/CharacterCreator';
import { CHARACTER_CREATOR_PAGES } from './pages/CharacterCreator/assets/Constants';
import RaceSelector from './pages/CharacterCreator/pages/RaceSelector';
import ClassSelector from './pages/CharacterCreator/pages/ClassSelector';
import BackgroundSelector from './pages/CharacterCreator/pages/BackgroundSelector';
import PageNotFound from './pages/PageNotFound';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character-creator" element={<CharacterCreator />}>
                <Route index element={<RaceSelector />} />
                <Route path={CHARACTER_CREATOR_PAGES[1].route} element={<ClassSelector />} />
                <Route path={CHARACTER_CREATOR_PAGES[2].route} element={<BackgroundSelector />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
