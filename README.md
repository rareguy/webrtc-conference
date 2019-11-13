# webrtc-conference
To start on the local server, use [Node.js](nodejs.org).
1.  Before starting, go to each directory and use `npm install`, and each `package.json` will install the dependecies for you.
2. After that, start the server with command `node server.js`.
3. Or, if the server.js doesn't have a HTTP listener, find an `index.html` in the folder, and then use `node-static` (install it with `npm install node-static`) to gain an access via HTTP server. Use the command `static` to open a `https://localhost:8080/` access to server.

## License
### RTCMultiConnection
Released under MIT Licenses - Copyright (c) 2014-2018 Muaz Khan <muazkh@gmail.com>
