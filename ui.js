class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    let userDate = user.created_at;
    let date = userDate.slice(0, 10);
    this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
            <li class="list-group-item text-center h3 "> ${user.name}</li>
            <li class="list-group-item text-primary text-center"> ${user.bio}</li>
              <li class="list-group-item">Company:<span class="text-primary"> ${user.company}</span></li>
              <li class="list-group-item">Website/Blog: <a href="https://${user.blog}" target="_blank">${user.blog}</a></li>
              <li class="list-group-item">Location: <span class="text-primary">${user.location}</span></li>
              <li class="list-group-item">Member Since: <span class="text-primary">${date}</span></li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 text-center">Latest Repos</h3>
      <div id="repos"></div> `;
  }

  showRepos(repos) {
    let repoData = "";
    repos.map((repo) => {
      repoData += `
        Repo Name: ${repo.name}
        Owner: ${repo.owner.login}
        Description: ${repos.description}
        Link: ${repo.url}
        `;
    });
    const repoUI = document.querySelector("#repos");
    repoUI.innerHTML = repoData;
  }
}
