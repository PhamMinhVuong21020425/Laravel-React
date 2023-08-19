import React, { useState, useRef } from 'react';
import { Typography, Divider } from 'antd';
import Filters from './components/Filters';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createAction, nanoid } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', function prepare(text) {
    return {
        payload: {
            text,
            id: nanoid(),
            createdAt: new Date().toISOString(),
        },
    };
});

const { Title } = Typography;

function Antd(props) {
    const listUsers = props.dataRedux;
    const [name, setName] = useState('');
    const ref = useRef();
    console.log(addTodo('Hello', 1, 2, 3));

    const handleDeleteUser = user => {
        props.deleteUserRedux(user);
    };
    const handleAddUser = name => {
        props.addUserRedux(name);
        setName('');
        ref.current.focus();
    };
    return (
        <div
            style={{
                width: 500,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                padding: 20,
                boxShadow: '0 0 10px 4px #bfbfbf',
                borderRadius: 5,
                height: '90vh',
            }}
        >
            <Title style={{ textAlign: 'center' }}>TODO APP with REDUX</Title>
            <Filters />
            <Divider />
            <ol>
                {listUsers.map(user => {
                    return (
                        <li key={user.id}>
                            {user.name}{' '}
                            <span
                                className='cursor-pointer'
                                onClick={() => handleDeleteUser(user)}
                            >
                                x
                            </span>
                        </li>
                    );
                })}
            </ol>
            <input
                className='mb-2 p-2 border-2 border-black rounded-md hover:border-green-500'
                ref={ref}
                placeholder='Add user...'
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <button onClick={() => handleAddUser(name)}>Add</button>
        </div>
    );
}

Antd.propTypes = {
    props: PropTypes.object,
    dataRedux: PropTypes.array,
    deleteUserRedux: PropTypes.func,
    addUserRedux: PropTypes.func,
};

const mapStateToProps = state => {
    return { dataRedux: state.users };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUserRedux: user =>
            dispatch({ type: 'DELETE_USER', payload: user }),
        addUserRedux: name => dispatch({ type: 'ADD_USER', payload: name }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Antd);
