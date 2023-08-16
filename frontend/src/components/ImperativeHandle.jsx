import React, { useRef, useEffect } from 'react';
import Video from './Video';

export default function ImperativeHandle() {
    const ref = useRef();

    useEffect(() => {
        console.log(ref.current);
    }, []);

    const handlePlay = () => {
        ref.current.play();
    };

    const handlePause = () => {
        ref.current.pause();
    };

    return (
        <>
            <Video ref={ref} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    );
}
