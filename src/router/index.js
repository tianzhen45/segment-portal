import Vue from 'vue'
import Router from 'vue-router'
import WordList from '@/components/WordList.vue'
import SegForm from '@/components/SegForm.vue'
import WordImport from '@/components/WordImport.vue'
import SqlGen from '@/components/SqlGen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/WordList',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/SegForm',
      name: 'SegForm',
      component: SegForm
    },
    {
      path: '/WordImport',
      name: 'WordImport',
      component: WordImport
    },
    {
      path: '/SqlGen',
      name: 'SqlGen',
      component: SqlGen
    }
  ]
})
