<template>
  <div id="main-wrapper" class="homepage">
    <PageHeader></PageHeader>
    <HomePageContainer :featurePost=[1,2,3] :lastestNews=[1,2,3,4,5,6,7,8,9]></HomePageContainer>
    <TwitterFeed :twitterFeeds=[1,2,3]></TwitterFeed>
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
