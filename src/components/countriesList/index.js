import React, { Component } from 'react';
import countryData from '../../data/countrySvgs';

const CountryOption = ({ name }) => {
    return (
        <li>{name}</li>
    );
};

class CountriesList extends Component {
    render() {
        return countryData.map(country => {
            return (
                <CountryOption name={country.name} />
            );
        });
    }
}

export default CountriesList;
