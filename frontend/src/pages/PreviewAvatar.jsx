import React, { useState, useEffect } from 'react';

export default function PreviewAvatar() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar?.url);
        };
    }, [avatar]);

    const handleAvatar = e => {
        const file = e.target.files[0];

        if (file) {
            file.url = URL.createObjectURL(file);
            setAvatar(file);
        }
        console.log(file);
    };

    return (
        <>
            <input type='file' onChange={handleAvatar} />
            {avatar && <img src={avatar?.url} alt='' width='40%' />}
        </>
    );
}
