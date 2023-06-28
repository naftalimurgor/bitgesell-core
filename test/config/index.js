
/**
 * Default config for Docker-based test suite.
 */

/**
 * Export services config.
 */

module.exports = {
  bitgesell: {
    host: 'localhost',
    password: 'localuser',
    port: 8334,
    username: 'foo'
  },
  bitgesellMultiWallet: {
    host: 'localhost',
    password: 'bar',
    port: 18453,
    username: 'foo'
  },
  bitgesellSsl: {
    host: 'localhost',
    password: 'bar',
    port: 18463,
    username: 'foo'
  },
  bitgesellUsernameOnly: {
    host: 'localhost',
    port: 18473,
    username: 'foo'
  }
};
