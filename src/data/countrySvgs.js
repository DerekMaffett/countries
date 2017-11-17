import { flow, toLower, map, sortBy } from 'lodash';

const countryCodeMap = require('../../node_modules/svg-country-flags/countries.json');

const convertCodeMapToArray = (codeMap) => map(codeMap, (name, code) => ({
    id: code,
    name: countryCodeMap[code]
}));

const sortByName = (countries) => sortBy(countries, 'name');

export const countries = flow([
    convertCodeMapToArray,
    sortByName
])(countryCodeMap);

export const getFlagPath = (size, id) => {
    const width = size === 'sm' ? 100 : 250;

    return `../../node_modules/svg-country-flags/png${width}px/${toLower(id)}.png`;
};
