import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Content({ onIncrease }) {
    console.log('re-render Content');
    return (
        <div>
            <button onClick={onIncrease}>Increment</button>
        </div>
    );
}

Content.propTypes = {
    onIncrease: PropTypes.func.isRequired, // Định nghĩa prop onIncrease là một hàm và yêu cầu phải có
};

export default memo(Content);
