import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdLightMode } from 'react-icons/md';

export default function DarkModeToggle() {
    const [isDarkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    function toggleDarkMode() {
        setDarkMode(!isDarkMode);
    }

    return (
        <IconContext.Provider
            value={{
                color: isDarkMode ? 'white' : 'black',
                className: 'dark-mode-toggle',
                size: '20',
            }}
        >
            <button onClick={toggleDarkMode}>
                <MdLightMode />
            </button>
        </IconContext.Provider>
    );
}
