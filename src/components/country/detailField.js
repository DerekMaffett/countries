import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const DetailField = ({ name, data, suffix }) => {
    if (data === undefined) {
        return null;
    }

    return (
        <div>
            <span className={styles.fieldName}>{name}: </span>
            <span>{data}{suffix}</span>
        </div>
    );
};

DetailField.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    suffix: PropTypes.string
};

export default DetailField;
