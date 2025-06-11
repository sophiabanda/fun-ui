import './Nav.css';
import { useState } from 'react';
import NavModal from './NavModal';

export default function Nav() {
    const [pressed, setPressed] = useState(false);

    function onPress() {
        setPressed(true);
        setTimeout(() => setPressed(false), 1000);
    }

    return (
        <>
            <nav>
                <img
                    id="company-logo"
                    src="src/assets/react.svg"
                    alt="company logo"
                />
                <img
                    onClick={onPress}
                    className={pressed ? 'rotate' : null}
                    id="menu-icon"
                    src="src/assets/menu_icon.svg"
                    alt="menu icon"
                />
            </nav>
            <NavModal />
        </>
    );
}
