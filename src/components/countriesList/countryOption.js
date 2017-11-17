import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';
import Flag from '../common/flag';

class CountryOption extends Component {
    render() {
        const { style, country, selectedCountry, onSelect } = this.props;

        return (
            <div
                onClick={this.handleOnClick(country.id, onSelect)}
                className={classnames({
                    'CountryOption_option': true,
                    'CountryOption_selected': selectedCountry === country.id
                })}
                style={style}
            >
                <Flag className="CountryOption_flagContainer" size="sm" id={country.id}/>
                <span className="CountryOption_name">{country.name}</span>
            </div>
        );
    }

    handleOnClick(id, onSelect) {
        return () => onSelect(id);
    }
}

CountryOption.propTypes = {
    country: PropTypes.object.isRequired, // Country option
    selectedCountry: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    style: PropTypes.object
};

export default CountryOption;
