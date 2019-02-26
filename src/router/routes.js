import VueRouter from 'vue-router'
import Home from '../components/views/main/Main'
import Ui from '../components/views/ui/Ui'
import Profile from '../components/views/profile/Profile'
export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/ui',
      component: Ui
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
