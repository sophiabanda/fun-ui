import { useState } from 'react';
import '../index.css';

export default function Button() {
    const [clicked, setClicked] = useState(false);

    function onPress() {
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
    }

    return (
        <button className={clicked ? 'clicked' : null} onClick={onPress}>
            Schedule Call
        </button>
    );
}
