import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DetailField = ({ name, data, suffix }) => {
    if (data === undefined) {
        return null;
    }

    return (
        <div>
            <span className="Country_fieldName">{name}: </span>
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
