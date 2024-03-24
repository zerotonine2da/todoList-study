import { useAppDispatch, useAppSelector } from '../redux/hook/useTodos';
import { toggleDarkMode } from '../redux/module/darkMode';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import { useEffect } from 'react';

export default function DarkMode() {
    const isDarkMode = useAppSelector((state) => state.darkMode);
    const dispatch = useAppDispatch();

    useEffect(() => {
        clickToggleDarkMode();
    }, []);

    const clickToggleDarkMode = () => {
        dispatch(toggleDarkMode());
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div
            className="inline-flex items-center
             border-2 py-1 px-3 focus:outline-none
            rounded mt-4 
           bg-gray-200
           text-slate-400 
           hover:text-yellow-300
           hover:bg-slate-700
            
           dark:hover:text-orange-400
            "
            onClick={clickToggleDarkMode}
        >
            <button>{isDarkMode ? <FaMoon size={20} /> : <MdSunny size={25} />}</button>
        </div>
    );
}
