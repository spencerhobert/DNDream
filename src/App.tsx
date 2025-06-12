import Navbar from './pages/Navbar';
import Routing from './Routing';

export default function App() {
    return (
        <div className="min-h-screen max-w-screen overflow-x-hidden dark:bg-gray-900 dark:text-white">
            <Navbar />
            <main className="mx-auto max-w-5xl px-1 sm:px-4">
                <Routing />
            </main>
        </div>
    );
}
