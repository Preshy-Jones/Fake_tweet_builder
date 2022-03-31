<template>
  <div class="flex justify-center items-center">
    <div class="bg-black w-1/2 py-6 pl-5">
      <div class="flex">
        <img
          src="../assets/falz.jpeg"
          alt=""
          class="w-12 rounded-secondary mr-2"
        />
        <div class="text-twitter_name">
          <div class="flex items-center">
            <h2 class="text-white font-bold">{{ name }}</h2>
            <div class="w-4">
              <svg
                viewBox="0 0 24 24"
                aria-label="Verified account"
                fill="#ffff"
                class="r-1fmj7o5 r-4qtqp9 r-yyyyoo r-1xvli5t r-9cviqr r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"
              >
                <g>
                  <path
                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <h2 class="text-twentieth">
            @<span>{{ username }}</span>
          </h2>
        </div>
      </div>
      <div class="mt-4">
        <p class="text-twenty_first text-tweet_body text-justify">
          {{ tweet }}
        </p>
      </div>
      <div class="mt-3">
        <h2 class="text-justify text-twentieth text-twitter_name">
          2:19 AM · Jan 29, 2022·Twitter for iPhone
        </h2>
      </div>
      <div class="flex text-twenty_second border-t border-b py-4 mt-4">
        <h2 class="mr-4">{{ number_of_tweets }}<span></span> Retweets</h2>
        <h2 class="mr-4">
          {{ number_of_quote_tweets }}<span></span> Quote Tweets
        </h2>
        <h2>16.1k<span></span> Likes</h2>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      "name",
      "tweet",
      "username",
      "number_of_tweets",
      "number_of_quote_tweets",
    ]),
  },
};
</script>

<style></style>
