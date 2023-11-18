document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

//    fetch('https://api.github.com/users/MilaGuimaraes')
//    .then(function(res) {
//        return res.json();
//    })
//    .then(function(json) {
//        nameElement.innerText = json.name;
//        usernameElement.innerText = json.login;
//        avatarElement.src = json.avatar_url;
//        followingElement.innerText = json.following;
//        followersElement.innerText = json.followers;
//        repos.innerText = json.public_repos;
//        linkElement.href = json.html_url;
//      })

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/MilaGuimaraes', true);

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const json = JSON.parse(xhr.responseText);
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            reposElement.innerText = json.public_repos;
            linkElement.href = json.html_url;
        } else {
            console.error('Erro na solicitação para a API do Github.');
        }
    };

    xhr.onerror = function () {
        console.error('Erro de rede na solicitação para a API do Github.');
    };

    xhr.send();
});