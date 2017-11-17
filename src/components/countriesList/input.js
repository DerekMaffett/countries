import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        return (
            <input
                className={this.props.className}
                onChange={this.handleChange.bind(this)}
            />
        );
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }
}

Input.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
