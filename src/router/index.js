import Vue from 'vue'
import Router from 'vue-router'
import DbContent from './components/DbContent.vue'
import DbSidebar from './components/DbSidebar.vue'
import DbHeader from './components/DbHeader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        DbHeader,
        DbSidebar,
        DbContent
      }
    }
  ]
})
