# socket-io-messenger backend

An Express node server maintaining real-time, bidirectional, and event-based socket.io connection between Angular client


## Getting started

| Command                   | Description                                       |
| --------------------------| --------------------------------------------------|
| `npm run install`         | Install dependencies                              |
| `npm run start:dev`       | Start server in dev mode                          |
| `npm run build`           | Compile to JavaScript for production build (dist) |
| `npm run start`           | Start server in release mode                      |

## Deployment

### Configure to run as Windows service

1. Install node-windows node module using the global flag. Make sure to run script from the service root folder.
   ```
   npm install node-windows -g 
   npm link node-windows
   ```
1. Copy `package.json`, and `dist` folder to installation folder
1. Install dependencies
    ```
   npm install
   ```
1. Confirm that node sever has successfully started
    ```
   node dist/server.js
   ```
1. Type `Ctrl + C` to terminate node process
1. Switch from root to `deployment` folder
1. Install node server as a Windows service. The installed Windows service should be visible from the Windows Services utility. Verify that service is running and no errors written in the Windows Event log.
    ```
   node install.js
   ```
1. Cleaning Up: uninstall previously installed Windows service
    ```
   node uninstall.js
   ```

### Configure SSL certificate 
1. Install Open SSL
   1. Download `openssl-0.9.8k_WIN32` to `C:\Program Files`
   1. Add `C:\Program Files\openssl-0.9.8k_WIN32\bin` to your system Path
1. Create localhost self-singed SSL certificate. Skip this step if certificate is already installed. From PowerShell command run
   ```
   New-SelfSignedCertificate -DnsName "localhost" -CertStoreLocation "cert:\LocalMachine\My"
   ```
1. Open Microsoft Management Console. Click Add/Remove snap-in and add Certificates snap-in.
1. Export certificate into new format
   1. Double-click on certificate name
   1. Go to Details tab click `Copy to File` button and then follow Export Certificate wizard steps
   1. Check "Yes, export the private key" button
   1. Export File Form wizard step: Leave all default options
   1. Security wizard step: Check Password checkbox and enter your password
1. Use OpenSSL to split exported certificate file into private key and public certificate
    ```
   openssl pkcs12 -in localhost.pfx -nocerts -out private-key.pem -nodes
   openssl pkcs12 -in localhost.pfx -nokeys -out public-cert.pem -nodes
   ```
1. This step is only required for localhost self-signed certificate. Open Microsoft Management Console and copy your certificate fom `Personal/Certificates` to `Trusted Root Certification Authorities\Certificates`
