'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    console.log('Got http request.');
    res.send('Hello world from SUSE!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    process.exit(0);
});
