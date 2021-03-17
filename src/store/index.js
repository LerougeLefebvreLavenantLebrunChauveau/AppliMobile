import { createStore } from 'vuex'

import account from './account';

export default createStore({
  debug : true,
  modules: {
      account
    },
})
