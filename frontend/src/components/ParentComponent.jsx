import React, { useContext, useId } from 'react';
import Post from './Post';
import ThemeContext from './ThemeContext';
const ParentComponent = () => {
    const { changeTheme } = useContext(ThemeContext);
    const id = useId();
    console.log(id);
    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
            <Post />
        </div>
    );
};

export default ParentComponent;
