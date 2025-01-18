# Silent Failure of Node.js http Server on Port Conflict

This repository demonstrates an uncommon bug in Node.js where an HTTP server fails silently when attempting to bind to a port that is already in use.  There is no error thrown, making debugging more difficult.

## Bug Description

The `http.createServer` and `server.listen` methods in Node.js do not throw an error when the specified port is occupied by another process. Instead, the server simply fails to start, and no indication of the failure is provided to the developer.

## How to Reproduce

1.  Run `bug.js`.
2.  While `bug.js` is running, attempt to run another instance of `bug.js` (or any other application that uses port 8080). The second instance will start without an error, but fail silently. 
3.  Check if you can access the server from your browser at `http://localhost:8080` . Only one instance should respond.

## Solution

The solution involves using event listeners to handle potential errors during server startup.  The solution is available in `bugSolution.js`.

## Additional Notes

This silent failure can be frustrating for developers. This example highlights the importance of proper error handling and monitoring in Node.js applications.