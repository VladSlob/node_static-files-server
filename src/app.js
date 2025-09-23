/* eslint-disable no-console */
'use strict';

const { createServer } = require('./createServer');
const axios = require('axios');
const PORT = process.env.PORT || 5701;
const server = createServer();



server.listen(PORT);
