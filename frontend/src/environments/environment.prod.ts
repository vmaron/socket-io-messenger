const packageJson = require('../../package.json');

export const environment = {
  version: packageJson.version,
  webSocketHost: 'https://localhost:8443',
  apiKey: '1ef6bc29-58b0-447c-893c-903f0b3e0cc2',
  api: 'http://localhost:1337/api',
  host: 'http://localhost:1337',
  production: true
};
