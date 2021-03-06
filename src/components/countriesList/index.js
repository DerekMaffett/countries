import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toLower } from 'lodash';
import { AutoSizer, List } from 'react-virtualized';

import styles from './styles.css';
import { countries as countryData } from '../../data/countrySvgs';
import Input from './input';
import CountryOption from './countryOption';

class CountriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredCountryOptions: countryData
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <Input
                    className={styles.filter}
                    onChange={this.handleFilterChange.bind(this)}
                />
                <AutoSizer>
                    {({ height, width }) => {
                        return (
                            <List
                                className={styles.list}
                                width={width}
                                height={height - 50}
                                rowCount={this.state.filteredCountryOptions.length}
                                rowHeight={125}
                                rowRenderer={this.getRowRenderer().bind(this)}
                            />
                        );
                    }}
                </AutoSizer>
            </div>
        );
    }

    handleFilterChange(newFilter) {
        this.setState({
            filteredCountryOptions: this.filterCountries(newFilter, countryData)
        });
    }

    filterCountries(filter, countries) {
        const lowerCaseFilter = toLower(filter);

        return countries.filter((country) => {
            return toLower(country.name).match(lowerCaseFilter) ||
                toLower(country.id).match(lowerCaseFilter);
        });
    }

    getRowRenderer() {
        const { countries, selectedCountry, selectCountry, fetchCountry } = this.props;

        return ({ key, index, style }) => {
            return <CountryOption
                key={key}
                style={style}
                selectedCountry={selectedCountry}
                country={this.state.filteredCountryOptions[index]}
                onSelect={this.onSelect(countries, selectCountry, fetchCountry)}
            />;
        };
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
