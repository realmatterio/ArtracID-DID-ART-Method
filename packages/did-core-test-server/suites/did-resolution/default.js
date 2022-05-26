const brokenFixtures = process.env.DID_WG_INCLUDE_BREAKING ? [
] : []

module.exports = {
  name: '7.1 DID Resolution',
  resolvers: [
    require('../implementations/universal-resolver-did-art.json'),
    ...brokenFixtures
  ],
};
