import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Scroll() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setVisible(true)
        }
        else if (scrolled <= 50) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <button
                className="to-top"
                id="myBtn"
                title="Go to top"
                style={{ display: visible ? 'flex' : 'none' }}
                onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </>
    )
}
