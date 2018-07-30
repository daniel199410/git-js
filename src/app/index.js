const Ui = require('./ui');
const Github = require('./github').default;

const { client_id, client_secret } = require('./config.json');

const gitHub = new Github(client_id, client_secret);
gitHub.fetchUser('daniel199410');