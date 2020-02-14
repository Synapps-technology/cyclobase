import Vue from 'vue'
import Router from 'vue-router'

import UserList from '@/components/UserList'
import Login from '@/components/Login'
import AddUserForm from '@/components/AddUserForm'
import Home from '@/components/Home'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users/add',
      name: 'AddUserForm',
      component: AddUserForm,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
