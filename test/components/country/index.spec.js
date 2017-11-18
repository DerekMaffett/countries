import React from 'react';
import { shallow } from 'enzyme';

import '../../enzymeSetup.js';
import Country from '../../../src/components/country';
import Flag from '../../../src/components/common/flag';
import DetailField from '../../../src/components/country/detailField';

describe('Country', () => {
    it('should render nothing when no country is selected', () => {
        const wrapper = shallow(
            <Country />
        );

        expect(wrapper.children().length).to.equal(0);
    });

    it('should render a spinner when data is not available', () => {
        const wrapper = shallow(
            <Country selectedCountry="AD" />
        );

        expect(wrapper.find('img').prop('src')).to.equal('./public/spinner.svg');
    });

    it('should render a flag and details when data is available', () => {
        const countryDetails = {
            name: 'Afghanistan'
        };

        const wrapper = shallow(
            <Country selectedCountry="AF" countryDetails={countryDetails}/>
        );

        expect(wrapper.find(Flag).length).to.equal(1);
        expect(wrapper.find(Flag).prop('id')).to.equal('AF');

        expect(wrapper.find(DetailField).length).to.equal(5);
    });
});
