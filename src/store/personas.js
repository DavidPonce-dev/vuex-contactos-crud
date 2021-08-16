export default {
  namespaced: true,
  state: {
    personas: []
  },
  mutations: {
    addPersona(state, persona) {
      return state.personas.push(persona)
    },
    setPersona() {
    },
    delPersona(state, persona) {
      return state.personas.filter( p => p.id != persona.id )
    }
  },
  actions: {
    addPersona({ commit }, persona){
      commit('addPersona', persona)
    },
    setPersona({ commit }, persona){
      commit('setPersona', persona)
    },
    delPersona({ commit }, persona){
      commit('delPersona', persona)
    }
  }
}