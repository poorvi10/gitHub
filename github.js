class GitHub {
  constructor() {
    this.client_id = '910af904cd529d93d35d';
    this.client_secret = 'a537cb80658f7c559c2115a6af093c0b540b2e66';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  } 
}