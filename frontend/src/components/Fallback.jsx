import React from 'react';
import { useLocation } from 'react-router-dom';
function Profile() {
    return (
        <img src='https://i.imgur.com/MK3eW3As.jpg' alt='Katherine Johnson' />
    );
}

export default function Gallery() {
    const location = useLocation();
    return (
        <React.Fragment>
            <h1 className='text-center font-bold text-3xl'>Welcome</h1>
            <p>{JSON.stringify(location.state)}</p>
            <section className='flex flex-col md:mt-4 md:ml-8 md:items-start sm:ml-6 items-center'>
                <h1 className='font-bold text-xl'>Amazing scientists</h1>
                <div className='flex space-x-3 mt-3'>
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </section>
        </React.Fragment>
    );
}
