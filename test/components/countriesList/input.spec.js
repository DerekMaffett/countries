import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import '../../enzymeSetup.js';
import Input from '../../../src/components/countriesList/input';

describe('Input', () => {
    it('should trigger an onChange prop on change', () => {
        const stub = sinon.stub();
        const wrapper = shallow(
            <Input onChange={stub} />
        );

        wrapper.find('input').simulate('change', {
            target: { value: 'searchText' }
        });

        expect(stub.calledOnce).to.equal(true);
        expect(stub.calledWith('searchText')).to.equal(true);
    });
});
