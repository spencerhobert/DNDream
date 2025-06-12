import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CharacterCreator from './pages/CharacterCreator';
import RaceSelector from './pages/CharacterCreator/pages/RaceSelector';
import ClassSelector from './pages/CharacterCreator/pages/ClassSelector';
import PageNotFound from './pages/PageNotFound';

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character-creator" element={<CharacterCreator />}>
                <Route index element={<RaceSelector />} />
                <Route path="class-selector" element={<ClassSelector />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
