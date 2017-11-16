const countryCodeMap = require('../../node_modules/svg-country-flags/countries.json');

export default Object.keys(countryCodeMap).map(code => ({
    id: code,
    name: countryCodeMap[code]
}));
