import React from 'react';

const Truncator = ({ string }) => {

    function truncateString(str) {
        const truncatedStr = str.slice(0, 18).padEnd(21, '.');
        return truncatedStr;
    };

    return (
        <div>
            {string.length < 21 ? string : <div title={string}>{truncateString(string)}</div>}
        </div>
    );
};

export default Truncator;