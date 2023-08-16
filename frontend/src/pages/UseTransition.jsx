import React, { useState, useMemo, useTransition, useId } from 'react';
import { useLocation, Link } from 'react-router-dom';
import StudentList from '../components/StudentList';
import studentListData from '../json/student.json';

const UseTransition = () => {
    const id = useId();
    const location = useLocation();
    const user = { id: 1, name: 'Kane' };

    const [searchInput, setSearchInput] = useState('');
    const [filterInput, setFilterInput] = useState('');
    // const deferredValue = useDeferredValue(searchInput);

    const [isPending, startTransition] = useTransition();

    const handleChange = e => {
        setSearchInput(e.currentTarget.value);
        startTransition(() => {
            setFilterInput(e.currentTarget.value);
        });
    };

    const data = useMemo(() => {
        return studentListData.map((student, index) => {
            const pos = student.indexOf(filterInput);
            return pos === -1 ? (
                <li key={index}>{student}</li>
            ) : (
                <li key={index}>
                    {student.slice(0, pos)}
                    <span style={{ backgroundColor: 'orange' }}>
                        {student.slice(pos, pos + filterInput.length)}
                    </span>
                    {student.slice(pos + filterInput.length)}
                </li>
            );
        });
    }, [filterInput]);

    return (
        <>
            <label htmlFor={id}>
                Search student:{' '}
                <input
                    type='text'
                    id={id}
                    placeholder='Search name...'
                    value={searchInput}
                    onChange={handleChange}
                />
            </label>
            <div>
                <Link to='/profile' state={user}>
                    Go to Profile
                </Link>
                <p>Current path: {location.pathname}</p>
                <p>Search: {location.search}</p>
                <p>Hash: {location.hash}</p>
            </div>
            {/* <Suspense fallback={<h1>🌀 Loading...</h1>}>
                <StudentList data={data} />
            </Suspense> */}
            {isPending ? <p>🌀 Loading...</p> : <StudentList data={data} />}
        </>
    );
};

export default UseTransition;
