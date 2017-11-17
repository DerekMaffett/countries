import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { getFlagPath } from '../../data/countrySvgs';

class Flag extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <img
                    className="Flag_img"
                    src={getFlagPath('sm', this.props.id)}
                />
            </div>
        );
    }
}

Flag.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Flag;
