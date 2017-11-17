import { countryCodeMap, getFlagPath, countries } from '../../src/data/countrySvgs';

describe('countrySvgs', () => {
    it('should get a small flag path', () => {
        expect(getFlagPath('sm', 'AD')).to.equal(
            '../../node_modules/svg-country-flags/png100px/ad.png'
        );
        expect(getFlagPath('md', 'AD')).to.equal(
            '../../node_modules/svg-country-flags/png250px/ad.png'
        );
        expect(getFlagPath('md', 'DB')).to.equal(
            '../../node_modules/svg-country-flags/png250px/db.png'
        );
    });

    it('should give a list of country options', () => {
        expect(Array.isArray(countries)).to.equal(true);
        expect(countries[0]).to.deep.equal({
            id: 'AF',
            name: 'Afghanistan'
        });
    });

    it('should give a mapping country codes to names', () => {
        expect(countryCodeMap['GB']).to.equal('United Kingdom');
    });
});
