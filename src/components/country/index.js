import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
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
                <div className={styles.spinner}>
                    <img src="./public/spinner.svg" />
                </div>
            );
        }

        return (
            <div className={styles.container}>
                <span className={styles.name}>{countryDetails.name}</span>
                <div className={styles.detailsContainer}>
                    <Flag className={styles.flagContainer} size="md" id={selectedCountry} />
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
