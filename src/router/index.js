import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WordList from '@/components/WordList.vue'
import SegForm from '@/components/SegForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/WordList',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/SegForm',
      name: 'SegForm',
      component: SegForm
    }
  ]
})
