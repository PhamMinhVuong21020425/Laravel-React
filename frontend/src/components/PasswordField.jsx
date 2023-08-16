import React, { useId } from 'react';

function PasswordField() {
    const id = useId();
    console.log('Generated identifier:', id);
    return (
        <>
            <label htmlFor={id}>
                Password:
                <input type='password' id={id} />
            </label>
            <p id={id}>The password should contain at least 8 characters</p>
        </>
    );
}

export default PasswordField;
