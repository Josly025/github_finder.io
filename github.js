// Creating the github class

class Github {
  constructor() {
    this.client_id = "430d0e36bc53686e2d69";
    this.client_secret = "b3bbdefff92e358305d2bbc593fb616a054ade52";
  }

  async getUser(user) {
    const proflieResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await proflieResponse.json();
    console.log(profile);
    return {
      profile: profile,
    };
  }
}
