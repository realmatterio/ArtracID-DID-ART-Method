const brokenFixtures = process.env.DID_WG_INCLUDE_BREAKING ? [
] : []

module.exports = {
  "name": "DID URL Dereferencing",
  "dereferencers": [
    require('../implementations/dereferencer-art.json'),
    ...brokenFixtures
  ]
}
