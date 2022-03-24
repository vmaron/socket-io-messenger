var Service = require('node-windows').Service;
var EventLogger = require('node-windows').EventLogger;
var log = new EventLogger('Artemis Comm Server');

var svc = new Service({
  name: 'Artemis Comm Server',
  description: 'The websocket Artemis server.',
  script: 'D:\\Sites\\staging-artemis-comm-server.gdserver.net\\dist\\server.js',
  nodeOptions: [
    '--max_old_space_size=4096'
  ]
});

svc.on('uninstall', function () {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
  log.info('Uninstall complete');
});

svc.on('error', function (err) {
  log.info('Service error: ' + err.toString());
});

svc.uninstall();

