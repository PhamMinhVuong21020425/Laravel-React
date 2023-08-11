import React, { useEffect, useState } from 'react';
import request from '../util/request';

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        request
            .get('example')
            .then(response => {
                setData(response.data);
                // console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='flex items-center h-screen justify-center border-8 border-black md:text-xl sm:text-sm text-red-500'>
            <div className='flex flex-col items-end'>
                <h1>Hello from React</h1>
                <p>Message: {data.message}</p>
                <hr className='bg-black h-1 w-full' />
                <p>Error: {data.error}</p>
                <p>Database: {data.database}</p>
            </div>
        </div>
    );
};

export default FetchData;
