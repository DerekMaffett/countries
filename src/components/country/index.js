import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Flag from '../common/flag';
import DetailField from './detailField';

class Country extends Component {
    render() {
        const { selectedCountry, countryDetails } = this.props;

        if (!selectedCountry) {
            return null;
        }

        if (!countryDetails) {
            return (
                <div className="Country_spinner">
                    <img src="./public/spinner.svg" />
                </div>
            );
        }

        return (
            <div className="Country_container">
                <span className="Country_name">{countryDetails.name}</span>
                <div className="Country_detailsContainer">
                    <Flag className="Country_flagContainer" size="md" id={selectedCountry} />
                    <DetailField name="Native Name" data={countryDetails.nativeName} />
                    <DetailField name="Region" data={countryDetails.region} />
                    <DetailField name="Capital" data={countryDetails.capital} />
                    <DetailField name="Population" data={countryDetails.population} />
                    <DetailField name="Area" data={countryDetails.area} suffix=" km²" />
                </div>
            </div>
        );
    }
}

Country.propTypes = {
    selectedCountry: PropTypes.string,
    countryDetails: PropTypes.object
};

export default Country;
