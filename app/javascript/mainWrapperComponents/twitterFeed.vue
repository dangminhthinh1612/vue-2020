<template>
  <div id="twitter-feed">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="twitter-feeds">
            <div v-for="feed in twitterFeeds" :key="feed.id">
              <div class="twitter-feed">
                <img class="img-fluid" src="assets/twitter.png" alt="Image" />
                <h2>#Newspress</h2>
                <p>Confusing <a href="#">#design</a> terms: what's the difference between quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="#">#UX, #UI and #IA? http://buff.ly/1KdjpEi  </a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><!--/#twitter-feed-->
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  props: {
    twitterFeeds: Array
  },
  mounted: function() {
    $(".twitter-feeds").owlCarousel({
      items : 1,
      singleItem : true,
      pagination	: false,
      autoPlay	: true,
      stopOnHover	: true,
    });
  }
}
</script>
