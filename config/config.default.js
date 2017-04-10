'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1491814835884_3701';
  config.security = {
    csrf: {
      enable: false,
    },
  };

  return config;
};
