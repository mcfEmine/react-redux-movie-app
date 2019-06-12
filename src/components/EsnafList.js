import React  from 'react';
import PropTypes from 'prop-types';

const EsnafList = ({ esnaf }) => {
    const emptyMessage  =  (
        <p>  There are no esnaf yet.  </p>
);
    const esnafList = (
        <div>
        Esnaf List
    </div>

);
    return (
        <div>
        {esnaf.length === 0 ? emptyMessage : esnafList}
        </div>
);
};

EsnafList.propTypes = {
    esnaf: PropTypes.array.isRequired
};

export default EsnafList;