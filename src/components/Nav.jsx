import './Nav.css';
import './NavModal.css';
import { useState } from 'react';
import NavModal from './NavModal';

export default function Nav() {
    const [pressed, setPressed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function onPress() {
        setPressed(true);
        setShowModal(true);
        setTimeout(() => setPressed(false), 1000);
    }

    function closeModal() {
        setShowModal(false);
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
                    className={pressed ? 'rotate show' : null}
                    id="menu-icon"
                    src="src/assets/menu_icon.svg"
                    alt="menu icon"
                />
            </nav>
            <NavModal show={showModal} onClose={closeModal} />
        </>
    );
}
