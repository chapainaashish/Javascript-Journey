// Using promises instead of callback function
console.log('Before');
// Using Callback function
/*
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })
});
*/

// Using promises instead of callback function (catch error as a best practice)
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits ' + commits))
    .catch(err => console.log(err.message));


console.log('After');

function getUser(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);

    })
}

function getRepositories(username) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);

    })
}

function getCommits(repo) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);

    })
}