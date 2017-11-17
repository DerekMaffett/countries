import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { getFlagPath } from '../../data/countrySvgs';

class Flag extends Component {
    render() {
        const { id, size, className } = this.props;

        return (
            <div className={className}>
                <img
                    src={getFlagPath(size, id)}
                />
            </div>
        );
    }
}

Flag.propTypes = {
    id: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md"]),
    className: PropTypes.string
};

export default Flag;
