class Github {
    constructor(client_id, client_secret){
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.reposCount = 7;
        this.sort ='created: asc';
    }

    async fetchUser(user){
        const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const userData = await userDataRequest.json();
        const userRepositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.reposCount}&sort=${this.sort}`);
        const userRepositories = await userRepositoriesRequest.json();
        return { userData, userRepositories };
    }
}

export default Github;