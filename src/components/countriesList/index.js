import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './styles.css';
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

class CountriesList extends Component {
    render() {
        const { selectedCountry, selectCountry } = this.props;

        return (<ul>
            {countryData.map(country => {
                return (
                    <CountryOption
                        selectedCountry={selectedCountry}
                        country={country}
                        onSelect={selectCountry}
                        key={country.id}
                    />
                );
            })}
        </ul>)
    }
}

export default CountriesList;
