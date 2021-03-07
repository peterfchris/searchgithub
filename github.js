class Github {
  constructor(){
    this.client_id = 'df090592286c16806796'
    this.client_secret = 'baec7c0b5f25ccf3377d48336e0c66098e8f32c0'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    
    const repoResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()

    return {
      profile,
      repos
    }
  }
}