const UI = require('./ui').default;
const Github = require('./github').default;

const { client_id, client_secret } = require('./config.json');

const gitHub = new Github(client_id, client_secret);
const ui = new UI();

const userForm = document.getElementById("userForm");
userForm.addEventListener('submit', e => {
    e.preventDefault();
    const textSearchValue = document.getElementById('textSearch').value.toString();
    if (textSearchValue.length > 0){
        gitHub.fetchUser(textSearchValue).then(data => {
            if(data.userData.message === 'Not Found'){
                ui.showMessage("Usuario no encontrado", "alert alert-danger col-md-12");
            } else {
                ui.showProfile(data.userData);
                ui.showRepositories(data.userRepositories);
            }
        });
    }    
})
