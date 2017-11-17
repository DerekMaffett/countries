import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';
import countryData from '../../data/countrySvgs';

class CountryOption extends Component {
    render() {
        const { country, selectedCountry, onSelect } = this.props;

        return (
            <li
                onClick={this.handleOnClick(country.id, onSelect)}
                className={classnames({
                    'CountriesList_selected': selectedCountry === country.id
                })}
            >
                {country.name}
            </li>
        );
    }

    handleOnClick(id, onSelect) {
        return () => onSelect(id);
    }
}

CountryOption.propTypes = {
    country: PropTypes.object.isRequired, // Country option
    selectedCountry: PropTypes.string,
    onSelect: PropTypes.func.isRequired
};

class CountriesList extends Component {
    render() {
        const { countries, selectedCountry, selectCountry, fetchCountry } = this.props;

        return (<ul>
            {countryData.map((country) => {
                return (
                    <CountryOption
                        selectedCountry={selectedCountry}
                        country={country}
                        onSelect={this.onSelect(countries, selectCountry, fetchCountry)}
                        key={country.id}
                    />
                );
            })}
        </ul>);
    }

    onSelect(countries, selectCountry, fetchCountry) {
        return (id) => {
            selectCountry(id);

            if (!countries[id]) {
                fetchCountry(id);
            }
        };
    }
}

CountriesList.propTypes = {
    countries: PropTypes.object.isRequired,
    selectedCountry: PropTypes.string,
    selectCountry: PropTypes.func.isRequired,
    fetchCountry: PropTypes.func.isRequired
};

export default CountriesList;
