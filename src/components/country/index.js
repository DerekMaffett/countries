import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Country extends Component {
    render() {
        const { selectedCountry, displayedCountry } = this.props;

        if (!selectedCountry) {
            return null;
        }

        if (!displayedCountry) {
            return <p>LOADING</p>;
        }

        return (
            <div>
                <p>{displayedCountry.id}</p>
            </div>
        );
    }
}

Country.propTypes = {
    selectedCountry: PropTypes.string,
    displayedCountry: PropTypes.object
};

export default Country;
