import React from 'react';
import PropTypes from 'prop-types';

const StudentList = ({ data }) => {
    console.log('re-render');
    return (
        <>
            <h1>Student List</h1>
            <ul>{data}</ul>
        </>
    );
};

StudentList.propTypes = {
    data: PropTypes.array,
};

export default StudentList;
