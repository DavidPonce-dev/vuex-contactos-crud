import { createStore } from 'vuex'

import personasStore from './personas'

export default createStore({
  modules: {
    personasStore
  }
})
