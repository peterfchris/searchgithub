class Github {
  constructor(){
    this.client_id = 'df090592286c16806796'
    this.client_secret = 'baec7c0b5f25ccf3377d48336e0c66098e8f32c0'
  }

  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()

    return {
      profile
    }
  }
}