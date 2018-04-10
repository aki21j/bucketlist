import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/Index'
import Login from '@/components/Login'

import BucketList from '@/components/BucketList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/login',
      component : Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/bucket-list',
      name: 'BucketList',
      component: BucketList
    }
  ]
})
