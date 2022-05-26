const brokenFixtures = process.env.DID_WG_INCLUDE_BREAKING ? [
] : []

module.exports = {
  name: 'did-consumption',
  didMethods: [
    require('../implementations/did-art.json'),
    ...brokenFixtures
  ]
};
