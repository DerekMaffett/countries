import countriesReducer from '../../src/ducks/countries';

describe('countries reducer', () => {
    it('should change country selection', () => {
        const initialState = {
            selectedCountry: 'AF',
            countries: {
                AF: 'AF data'
            }
        };

        const newState = countriesReducer(initialState, {
            type: 'SELECT_COUNTRY',
            payload: 'AD'
        });

        expect(newState).to.deep.equal({
            selectedCountry: 'AD',
            countries: {
                AF: 'AF data'
            }
        });
    });

    it('should add countries on load success', () => {
        const initialState = {
            selectedCountry: 'AF',
            countries: {
                AF: 'AF data',
                AD: 'AD data'
            }
        };

        const newState = countriesReducer(initialState, {
            type: 'FETCH_COUNTRY_SUCCESS',
            payload: {
                id: 'GB',
                name: 'United Kingdom'
            }
        });

        expect(newState).to.deep.equal({
            selectedCountry: 'AF',
            countries: {
                AF: 'AF data',
                AD: 'AD data',
                GB: {
                    id: 'GB',
                    name: 'United Kingdom'
                }
            }
        });
    });
});
