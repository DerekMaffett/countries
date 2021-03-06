import axios from 'axios';

import apiPatch from './apiPatch';

export const fetchCountryDetails = (id) => {
    if (id.match('GB-')) {
        return Promise.resolve(apiPatch[id]);
    }

    return axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
        .then((res) => {
            const { data } = res;

            return {
                id: data.alpha2Code,
                name: data.name,
                nativeName: data.nativeName,
                region: data.region,
                capital: data.capital,
                population: data.population,
                area: data.area
            };
        });
};
