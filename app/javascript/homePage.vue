<template>
  <div id="homePage">
    <MainWrapper></MainWrapper>
    <PageFooter></PageFooter>
    <SubscribeMe></SubscribeMe>
  </div>
</template>

<script>
import MainWrapper from './sharedComponents/mainWrapper.vue'
import PageFooter from './sharedComponents/pageFooter.vue'
import SubscribeMe from './sharedComponents/subscribeMe.vue'
export default {
  data: function () {
    return {
    }
  },
  components: {
    MainWrapper,
    PageFooter,
    SubscribeMe
  }
}
</script>
