import React, { useState, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 4) setCount(0);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className='m-5'>
            <h1 className='font-bold text-3xl'>{count}</h1>
            <button
                className='mt-2 px-2 py-1 rounded-lg text-white font-bold bg-orange-500'
                onClick={handleClick}
            >
                Increase
            </button>
        </div>
    );
};

export default UseLayoutEffect;
