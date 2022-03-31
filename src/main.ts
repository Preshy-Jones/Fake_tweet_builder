import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import { createStore } from "vuex";
import { State } from "./types/state";

const store = createStore<State>({
  state() {
    return {
      name: "",
      username: "",
      tweet: "yoyo",
      number_of_tweets: 0,
      number_of_quote_tweets: 0,
    };
  },

  mutations: {
    updateName(state, field) {
      state.name = field;
    },
    updateUsername(state, field) {
      state.username = field;
    },
    updateNumberOfTweets(state, field) {
      state.number_of_tweets = field;
    },
    updateNumberOfQuoteTweets(state, field) {
      state.number_of_quote_tweets = field;
    },
    updateTweet(state, field) {
      state.tweet = field;
    },
  },
  actions: {},
  getters: {},
});

const app = createApp(App);

app.use(store).mount("#app");
