import { Link } from 'react-router';
import DarkModeToggle from '../../HelperComponents/DarkModeToggle';

export default function Navbar() {
    return (
        <nav className="navbar mx-auto flex h-10 items-center bg-green-600 text-wrap dark:bg-green-950">
            <div className="pl-5">
                DNDream
            </div>
            <div>
                <Link to="/" className="px-5">
                    Home
                </Link>
                <Link to="/character-creator">Character Creator</Link>
            </div>
            <div className="ml-auto px-5">
                <DarkModeToggle />
            </div>
        </nav>
    );
}
