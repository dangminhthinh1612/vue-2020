import Vue from 'vue/dist/vue.esm'
import Home from '../homePage.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#home-index',
    components: { Home }
  })
})
