export const state = () => ({
  movieResults: ''
})

export const getters = {
  getMovieResults(state) {
    return state.movieResults
  }
}

export const mutations = {
  setMovieResults(state, payload) {
    state.movieResults = payload
  }
}

export const actions = {
  requestMovieResults({ commit, dispatch }) {
    this.$axios
      .$get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=9436950aed01e5d0f8d81b8672c7a6be&language=en-US&page=1'
      )
      .then(res => {
        commit('setMovieResults', res.results)
      })
  }
}
