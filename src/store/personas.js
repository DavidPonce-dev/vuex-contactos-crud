export default {
  namespaced: true,
  state: {
    editId: null,
    personas: []
  },
  mutations: {
    addPersona({ personas }, persona) {
      personas.push(persona)
    },
    setPersona() {
    },
    delPersona(state, persona) {
      state.personas = state.personas.filter( p => p.id != persona.id )
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