import React, { useRef } from 'react';

function UseRef() {
    const myInputRef = useRef(null);

    const handleClick = () => {
        myInputRef.current.focus(); // Truy cập và focus vào input DOM element
        console.log(myInputRef.current); // Trả về object DOM element <input type="text">
    };

    return (
        <div>
            <input ref={myInputRef} type='text' />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}

export default UseRef;
