import React, { useState, useMemo, useRef } from 'react';

const UseMemo = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cars, setCars] = useState([]);
    const nameRef = useRef();

    const totalPrice = useMemo(() => {
        console.log('Calculating...');

        const total = cars.reduce((acc, car) => {
            return acc + car.price;
        }, 0);

        return total;
    }, [cars]);

    const handleAddCar = () => {
        setCars(prev => [...prev, { name, price: +price }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    };

    return (
        <>
            <div>
                <input
                    ref={nameRef}
                    placeholder='Enter the car...'
                    name='name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <input
                    placeholder='Enter price...'
                    name='price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>
            <h2>My Cars</h2>
            <ul>
                {cars.map((car, index) => {
                    return (
                        <li key={index}>
                            {car.name} - {car.price}
                        </li>
                    );
                })}
            </ul>
            <h3>Total price: {totalPrice}</h3>
        </>
    );
};

export default UseMemo;
