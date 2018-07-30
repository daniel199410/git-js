const Ui = require('./ui');
const Github = require('./github').default;

const { client_id, client_secret } = require('./config.json');

const gitHub = new Github(client_id, client_secret);

const userForm = document.getElementById("userForm");
userForm.addEventListener('submit', e => {
    e.preventDefault();
    const textSearchValue = document.getElementById('textSearch').value.toString();
    if (textSearchValue.length > 0){
        gitHub.fetchUser(textSearchValue).then(data => {
            if(data.message === 'Not Found'){
            }
        });
    }    
})
