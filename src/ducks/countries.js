import { merge } from 'lodash';

import { fetchCountryDetails } from '../api';
import createReducer from './createReducer';

const initialState = {
    countries: {},
    selectedCountry: null
};

const SELECT_COUNTRY = 'SELECT_COUNTRY';
const FETCH_COUNTRY_INIT = 'FETCH_COUNTRY_INIT';
const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export default createReducer({
    [SELECT_COUNTRY]: (state, payload) => ({
        ...state,
        selectedCountry: payload
    }),
    [FETCH_COUNTRY_SUCCESS]: (state, payload) => ({
        ...state,
        countries: merge({}, state.countries, { [payload.id]: payload })
    })
}, initialState);

export const selectCountry = (id) => {
    return { type: SELECT_COUNTRY, payload: id };
};

export const fetchCountry = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_COUNTRY_INIT });

        fetchCountryDetails(id)
            .then((country) => dispatch({
                type: FETCH_COUNTRY_SUCCESS,
                payload: country
            }))
            .catch((err) => dispatch({
                type: FETCH_COUNTRY_FAILURE,
                payload: err
            }));
    };
};
