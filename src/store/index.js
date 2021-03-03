import { createStore } from 'vuex'

import lists from './lists';

export default createStore({
  debug : true,
  modules: {
      lists
    },
})
