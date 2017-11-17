import { fetchCountryDetails } from '../../src/api';
import sinon from 'sinon';
import axios from 'axios';

describe('api', () => {
    beforeEach(() => {
        sinon.stub(axios, 'get').returns(Promise.resolve({
            data: { name: 'Midgard' }
        }));
    });

    afterEach(() => {
        axios.get.restore();
    });

    it('should send back patched data', (done) => {
        fetchCountryDetails('GB-NIR').then((data) => {
            expect(data.name).to.equal('Northern Ireland');

            done();
        }).catch(done);
    });

    it('should request data from the correct endpoint', (done) => {
        fetchCountryDetails('MDGD').then((data) => {
            expect(data.name).to.equal('Midgard');
            expect(axios.get.calledWith(
                'https://restcountries.eu/rest/v2/alpha/MDGD'
            )).to.equal(true);

            done();
        }).catch(done);
    });
});
