// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// @ts-ignore
const packageJson = require('../../package.json');

export const environment = {
  version: packageJson.version,
  webSocketHost: 'https://localhost:8443',
  apiKey: '1ef6bc29-58b0-447c-893c-903f0b3e0cc2',
  api: 'http://localhost:1337/api',
  host: 'http://localhost:1337',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
