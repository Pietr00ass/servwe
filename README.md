# Gladiatus Helper API

This folder contains a minimal Express server that can be deployed on a VPS.

## Setup

1. Install Node.js 18 or newer on your VPS.
2. Copy the contents of the `server` directory to your VPS.
3. Run `npm install` inside the directory to install dependencies.
4. Create a `.env` file based on `.env.example` and set the desired port.
5. Start the server with `npm start`.

The server exposes a simple `/api/hello` endpoint which can be expanded to implement the features used by the extension.
