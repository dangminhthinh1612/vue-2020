import Vue from 'vue/dist/vue.esm'
import PageHeader from '../sharedComponents/pageHeader.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#homePage',
    components: {
      'pageheader': PageHeader
    }
  })
})
