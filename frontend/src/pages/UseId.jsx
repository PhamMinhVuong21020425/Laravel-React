import React from 'react';
import PasswordField from '../components/PasswordField';
const UseId = () => {
    return (
        <>
            <h1>Choose your password</h1>
            <PasswordField />
            <h1>Confirm your password</h1>
            <PasswordField />
        </>
    );
};

export default UseId;
