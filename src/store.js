import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item)
    },
    editItem(state, { item, title = item.title, done = item.done }) {
      item.title = title;
      item.done = done;
    },
    removeItem(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", {
        id: item.id,
        title: item.title,
        description: item.description,
        img: item.img
      })
    },
    editItem({ commit }, { item, title }) {
      commit("editItem", { item, title });
    },
    toggleItem({ commit }, item) {
      commit("editItem", { item, done: !item.done });
    },
  }
});
