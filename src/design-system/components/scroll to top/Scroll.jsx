import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export default function Scroll() {
    const [visible, setVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const toggleVisible = () => {
            if (window.scrollY > 50) {
                return setVisible(true)
            }
            return setVisible(false)
        };
        window.addEventListener('scroll', toggleVisible);
    }, [])

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
