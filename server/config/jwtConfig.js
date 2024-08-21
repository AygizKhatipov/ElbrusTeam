// ./config/jwtConfig.js
const jwtConfig = {
  access: {
    type: 'accessToken',
    expiresIn: `${1000 * 60 * 5* 24}`,
  },
  refresh: {
    type: 'refreshToken',
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;
