import { map, sortBy, flow } from 'lodash';

const countryCodeMap = require('../../node_modules/svg-country-flags/countries.json');

const convertCodeMapToArray = codeMap => map(codeMap, (name, code) => ({
    id: code,
    name: countryCodeMap[code]
}));

const sortByName = countries => sortBy(countries, 'name');

export default flow([
    convertCodeMapToArray,
    sortByName
])(countryCodeMap);
