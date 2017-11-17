import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AutoSizer, List } from 'react-virtualized';

import './styles.css';
import countryData from '../../data/countrySvgs';

class CountryOption extends Component {
    render() {
        const { style, country, selectedCountry, onSelect } = this.props;

        return (
            <div
                onClick={this.handleOnClick(country.id, onSelect)}
                className={classnames({
                    'CountriesList_selected': selectedCountry === country.id
                })}
                style={style}
            >
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
    onSelect: PropTypes.func.isRequired
};

class CountriesList extends Component {
    render() {
        return <div className="CountriesList_container">
            <AutoSizer>
                {({ height, width }) => {
                    return <List
                        className="CountriesList_list"
                        width={width}
                        height={height}
                        rowCount={countryData.length}
                        rowHeight={50}
                        rowRenderer={this.getRowRenderer(this.props)}
                    />
                }}
            </AutoSizer>
        </div>;
    }

    getRowRenderer({ countries, selectedCountry, selectCountry, fetchCountry }) {
        return ({ key, index, style }) => {
            return <CountryOption
                key={key}
                style={style}
                selectedCountry={selectedCountry}
                country={countryData[index]}
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
