import React, { useState, useCallback } from 'react';
import Content from './Content';

function UseCallback() {
    const [count, setCount] = useState(0);

    // Tạo một callback function và sử dụng useCallback để tối ưu hoá
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []); // Chỉ thay đổi callback khi count thay đổi

    return (
        <div>
            <Content onIncrease={handleIncrease} />
            <h1>Count: {count}</h1>
        </div>
    );
}

export default UseCallback;
