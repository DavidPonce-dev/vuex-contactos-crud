import { createStore } from 'vuex'

import personas from './personas'
import error from './error'

export default createStore({
  modules: {
    personas,
    error
  }
})
