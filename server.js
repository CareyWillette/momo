const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/momo'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/momo/'}),
);

const PORT = process.env.PORT || 8080;

// Start the app by listening on the default Heroku port
app.listen(PORT);
console.log(`now listening on port ${PORT}`)