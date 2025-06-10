import DarkModeToggle from '../../helperComponents/DarkModeToggle';

export default function Navbar() {
    return (
        <nav className="navbar mx-auto flex h-10 items-center bg-green-600 text-wrap dark:bg-green-950">
            <div>
                <button className="px-5">Home</button>
                <button>Character Builder</button>
            </div>
            <div className="ml-auto px-5">
                <DarkModeToggle />
            </div>
        </nav>
    );
}
