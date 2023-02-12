import { createStore } from 'vuex'
  const AppStats = createStore({
    state () { 
      return { Ids: [] } 
    },
    getters: { 
      getIds: state => state.Ids
    },
    mutations: { 
      setIds (state,id) { 
      state.Ids.push(id)
    } 
  }
})
export default AppStats;