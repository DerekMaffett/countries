import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import { selectCountry, fetchCountry } from '../../ducks/countries';
import CountriesList from '../countriesList';
import Country from '../country';

const CountriesListContainer = connect((state) => ({
    countries: state.countries,
    selectedCountry: state.selectedCountry
}), {
    selectCountry,
    fetchCountry
})(CountriesList);

const CountryContainer = connect((state) => ({
    selectedCountry: state.selectedCountry,
    countryDetails: state.countries[state.selectedCountry]
}))(Country);

class App extends Component {
    render() {
        return (
            <div className="App_appContainer">
                <CountriesListContainer />
                <CountryContainer />
            </div>
        );
    }
}

export default App;
