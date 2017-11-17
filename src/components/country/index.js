import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Flag from '../common/flag';

class Country extends Component {
    render() {
        const { selectedCountry, countryDetails } = this.props;

        if (!selectedCountry ) {
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
                <div className="Country_header">
                    <span className="Country_name">{countryDetails.name}</span>
                    <Flag className="Country_flagContainer" size="md" id={selectedCountry} />
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
