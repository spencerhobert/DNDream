import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import CharacterCreator from './pages/CharacterCreator';
import PageNotFound from './pages/PageNotFound';
import Navbar from './pages/Navbar';

export default function App() {
    // const [count, setCount] = useState(0);

    return (
        // <>
        //   <div className="grid grid-cols-2">
        //     <a href="https://vite.dev" target="_blank">
        //       <img src={viteLogo} className="logo" alt="Vite logo" />
        //     </a>
        //     <a href="https://react.dev" target="_blank">
        //       <img src={reactLogo} className="logo react" alt="React logo" />
        //     </a>
        //   </div>
        //   <h1>Vite + React</h1>
        //   <div className="card">
        //     <button onClick={() => setCount((count) => count + 1)}>
        //       count is {count}
        //     </button>
        //     <p>
        //       Edit <code>src/App.tsx</code> and save to test HMR
        //     </p>
        //   </div>
        //   <p className="read-the-docs">
        //     Click on the Vite and React logos to learn more
        //   </p>
        // </>

        <div className="min-h-screen max-w-screen overflow-x-hidden dark:bg-gray-900 dark:text-white">
            <Navbar />
            <main className="mx-auto max-w-5xl px-1 sm:px-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/character-creator"
                        element={<CharacterCreator />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </div>
    );
}
