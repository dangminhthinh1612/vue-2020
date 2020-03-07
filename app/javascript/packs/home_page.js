import Vue from 'vue/dist/vue.esm'
import MainWrapper from '../sharedComponents/mainWrapper.vue'
import PageFooter from '../sharedComponents/pageFooter.vue'
import SubscribeMe from '../sharedComponents/subscribeMe.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#homePage',
    components: {
      'mainwrapper': MainWrapper,
      'pagefooter': PageFooter,
      'subscribeme': SubscribeMe
    }
  })
})
