// Creating the github class

class Github {
  constructor() {
    this.client_id = "430d0e36bc53686e2d69";
    this.client_secret = "b3bbdefff92e358305d2bbc593fb616a054ade52";
    this.repoCount = 7;
    this.latest = "create: asc";
  }

  async getUser(user) {
    //profile request
    const proflieResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //repos request
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.latest}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    //await response
    const profile = await proflieResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);
    console.log(profile);
    return {
      profile: profile,
      repos: repos,
    };
  }
}
