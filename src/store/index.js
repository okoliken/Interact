import { createStore } from "vuex";
import { auth } from "../firebase/config";

import { createUserWithEmailAndPassword } from "@firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    userProfile(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signup({ commit }, { email, password }) {
      const data = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((res) => {
        if (res) {
          commit("userProfile", res.user);
        }
      });
      return data;
    },
  },
  modules: {},
});
