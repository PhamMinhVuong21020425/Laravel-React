import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import tiktok from '../videos/tiktok.mp4';

export default forwardRef(function Video(props, ref) {
    const videoRef = useRef();

    const handleEnded = () => {
        console.log('Ended...');
        videoRef.current.play();
    };

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        }, // Export một phương thức ra component cha

        pause() {
            videoRef.current.pause();
        },
    }));

    return <video ref={videoRef} src={tiktok} onEnded={handleEnded} />;
});
