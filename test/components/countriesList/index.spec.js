import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import '../../enzymeSetup.js';
import CountriesList from '../../../src/components/countriesList';
import Input from '../../../src/components/countriesList/input';

describe('CountriesList', () => {
    let wrapper;

    const filter = (input, wrapper) => {
        wrapper.find(Input).prop('onChange')(input);
    };

    beforeEach(() => {
        wrapper = shallow(
            <CountriesList
                countries={{}}
                selectedCountry={null}
                selectCountry={sinon.stub()}
                fetchCountry={sinon.stub()}
            />
        );
    });

    it('should filter countries by code', () => {
        filter('GB', wrapper);

        expect(wrapper.state().filteredCountryOptions).to.deep.equal([{
            id: 'GB-ENG',
            name: 'England'
        }, {
            id: 'GB-NIR',
            name: 'Northern Ireland'
        }, {
            id: 'GB-SCT',
            name: 'Scotland'
        }, {
            id: 'GB',
            name: 'United Kingdom'
        }, {
            id: 'GB-WLS',
            name: 'Wales'
        }]);

        filter('gb-nir', wrapper);

        expect(wrapper.state().filteredCountryOptions).to.deep.equal([{
            id: 'GB-NIR',
            name: 'Northern Ireland'
        }]);
    });

    it('should filter countries by name', () => {
        filter('Mongolia', wrapper);

        expect(wrapper.state().filteredCountryOptions).to.deep.equal([{
            id: 'MN',
            name: 'Mongolia'
        }]);

        filter('sing', wrapper);

        expect(wrapper.state().filteredCountryOptions).to.deep.equal([{
            id: 'SG',
            name: 'Singapore'
        }]);
    });
});
