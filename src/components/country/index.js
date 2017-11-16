import React, { Component } from 'react';

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

export default Country;
