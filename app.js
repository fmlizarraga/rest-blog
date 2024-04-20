const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const runServer = async () => {
    const lPort = process.env.PORT || 3000;
    // TODO: try to call data repository here
    app.listen(lPort);
    console.log("API running on port: ", lPort);
}

app.use(cors());
app.use(bodyParser.json());

// TODO: add public route to serve static files

// * Routes *
// ! WIP

// * Send request to unknown paths to the frontend *
// ! WIP


runServer();