import './NavModal.css';

export default function NavModal({ show, onClose }) {
    return (
        <div
            className={`modal-container${show ? ' show' : ''}`}
            onClick={onClose}
        >
            <div onClick={onClose} className="menu-modal">
                <div className="nav-header">
                    <h2>Company Menu</h2>
                </div>
                <ul>
                    <a href="">
                        <li>Item 1</li>
                    </a>
                    <a href="">
                        <li>Item 2</li>
                    </a>
                    <a href="">
                        <li>Item 3</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
