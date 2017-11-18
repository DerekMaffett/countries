import React from 'react';
import { shallow } from 'enzyme';

import '../../enzymeSetup.js';
import DetailField from '../../../src/components/country/detailField';

describe('DetailField', () => {
    it('should render a full detail field', () => {
        const wrapper = shallow(
            <DetailField name="Efficiency" data={30} suffix="%" />
        );

        expect(wrapper.text()).to.equal('Efficiency: 30%');
    });

    it('should not show the suffix if not supplied', () => {
        const wrapper = shallow(
            <DetailField name="Efficiency" data={30} />
        );

        expect(wrapper.text()).to.equal('Efficiency: 30');
    });

    it('should not render if no data is passed', () => {
        const wrapper = shallow(
            <DetailField name="Efficiency" />
        );

        expect(wrapper.children().length).to.equal(0);
    });
});
