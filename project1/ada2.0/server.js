const express = require("express");
const { sequelize } = require("./db");
const app = express();
require('dotenv').config('.env')
const port = 3000;
const { auth } = require('express-openid-connect');
const journalRouter  = require("./routes/adas_journal")

const {
  AUTH0_SECRET,
  AUTH0_BASE_URL,
  AUTH0_CLIENT_ID,
  AUTH0_ISSUER_BASE_URL
}  = process.env;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret:  AUTH0_SECRET,
  baseURL: 'http://localhost:3000',
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use("/notes",journalRouter)
//TODO: Create your GET Request Route Below:
const adas_journal_conn = require("./routes/adas_journal");
app.use("/adas_journal", adas_journal_conn);

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});