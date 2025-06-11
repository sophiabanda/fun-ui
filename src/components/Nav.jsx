import './Nav.css';
import './NavModal.css';
import { useState } from 'react';
import NavModal from './NavModal';

export default function Nav() {
    const [menuClick, setMenuClick] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleMenuClick() {
        if (showModal) {
            setShowModal(false);
            setMenuClick(false);
        } else {
            setMenuClick(true);
            setShowModal(true);
        }
    }

    function closeModal() {
        setShowModal(false);
        setMenuClick(false);
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
                    onClick={handleMenuClick}
                    className={menuClick && showModal ? 'rotate' : null}
                    id="menu-icon"
                    src="src/assets/menu_icon.svg"
                    alt="menu icon"
                />
            </nav>
            <NavModal show={showModal} onClose={closeModal} />
        </>
    );
}
