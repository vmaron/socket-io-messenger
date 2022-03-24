var Service = require('node-windows').Service;
var EventLogger = require('node-windows').EventLogger;
var log = new EventLogger('Artemis Comm Server');

var svc = new Service({
  name: 'Artemis Comm Server',
  description: 'The websocket Artemis server.',
  script: 'D:\\Sites\\staging-artemis-comm-server.gdserver.net\\dist\\server.js',
  env: [{
    name: 'API_KEY',
    value: '1ef6bc29-58b0-447c-893c-903f0b3e0cc2'
  }, {
    name: 'NODE_ENV',
    value: 'production'
  }],
  nodeOptions: [
    '--max_old_space_size=4096'
  ]
});

svc.on('install', function () {
  svc.start();
  console.log('Install complete.');
  console.log('The service exists: ', svc.exists);
  log.info('Service installed');
});

svc.on('start', function () {
  log.info('Service started');
});

svc.on('stop', function () {
  log.info('Service stopped');
});

svc.on('error', function (err) {
  log.info('Service error: ' + err.toString());
});

svc.install();

