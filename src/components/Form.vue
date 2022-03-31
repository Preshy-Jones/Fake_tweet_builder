<template>
  <div class="flex justify-center mt-8">
    <form class="w-1/2" action="">
      <div class="flex flex-col mb-6">
        <label for="">Username</label>
        <input class="border border-gray-400" type="text" v-model="username" />
      </div>
      <div class="flex flex-col mb-6">
        <label for="">Name</label>
        <input class="border border-gray-400" type="text" v-model="name" />
      </div>
      <div class="flex flex-col mb-6">
        <label for="">Number of tweets</label>
        <input
          class="border border-gray-400"
          type="number"
          v-model="number_of_tweets"
        />
      </div>
      <div class="flex flex-col mb-6">
        <label for="">number of quote tweets</label>
        <input
          class="border border-gray-400"
          type="number"
          v-model="number_of_quote_tweets"
        />
      </div>

      <div class="flex flex-col">
        <label for="">Tweet</label>
        <textarea
          name=""
          class="border border-gray-400"
          cols="30"
          rows="5"
          v-model="tweet"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      },
    },
    username: {
      get() {
        return this.$store.state.usernam;
      },
      set(value) {
        this.$store.commit("updateUsername", value);
      },
    },
    tweet: {
      get() {
        return this.$store.state.tweet;
      },
      set(value) {
        this.$store.commit("updateTweet", value);
      },
    },
    number_of_tweets: {
      get() {
        return this.$store.state.number_of_tweets;
      },
      set(value) {
        this.$store.commit("updateNumberOfTweets", value);
      },
    },
    number_of_quote_tweets: {
      get() {
        return this.$store.state.number_of_quote_tweets;
      },
      set(value) {
        this.$store.commit("updateNumberOfQuoteTweets", value);
      },
    },
  },
  // computed: {
  //   ...mapState([
  //     "name",
  //     "tweet",
  //     "username",
  //     "number_of_tweets",
  //     "number_of_quote_tweets",
  //   ]),
  // },
  // methods: {
  //   updateMessage(e) {
  //     this.$store.commit("updateMessage", e.target.value);
  //   },
  // },
};
</script>

<style></style>
