<template>
  <div id="main-wrapper" class="homepage">
    <PageHeader></PageHeader>
    <HomePageContainer></HomePageContainer>
    <TwitterFeed></TwitterFeed>
    <FooterWidget></FooterWidget>
  </div>
</template>

<script>
import PageHeader from './pageHeader.vue'
import FooterWidget from '../mainWrapperComponents/footerWidget.vue'
import HomePageContainer from '../mainWrapperComponents/homePageContainer.vue'
import TwitterFeed from '../mainWrapperComponents/twitterFeed.vue'
export default {
  data: function () {
    return {
    }
  },
  components: {
    PageHeader,
    HomePageContainer,
    TwitterFeed,
    FooterWidget
  }
}
</script>
