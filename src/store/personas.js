export default {
  namespaced: true,
  state: {
    editId: null,
    personas: []
  },
  mutations: {
    addPersona({ personas }, persona) {
      personas.push(persona)
      //throw new Error('Error agregando persona')
    },
    setPersona(state, persona) {
      state.personas[state.editId] = persona
      state.editId = null
      //throw new Error('Error editando persona')
    },
    delPersona(state, persona) {
      state.personas = state.personas.filter( p => p.id != persona.id )
      //throw new Error('Error borrando persona')
    },
    setEditId(state, id) {
      state.editId = id
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
    },
    setEditId({ commit }, id){
      commit('setEditId', id)
    }
  }
}