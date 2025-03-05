'use strict'

module.exports = function (environment) {
  const ENV = {
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        String: false,
        Date: false
      }
    }
  }

  return ENV
}
