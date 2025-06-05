import './App.css'
import { Routes, Route } from 'react-router';
import CharacterCreator from './pages/CharacterCreator';

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
    
    <main className="max-w-5xl w-5xl h-screen mx-auto">
      <Routes>
        <Route path="/" element={<CharacterCreator />} />
        <Route path="*" element={
          <div className="p-8">
            <h1 className="text-2xl font-bold text-red-600">
              404 - Page Not Found
            </h1>
          </div>
        } />
      </Routes>
    </main>
  );
}
