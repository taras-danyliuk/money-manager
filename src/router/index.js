import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})

Array.prototype.move = function (element, offset) {
  const index = this.indexOf(element);
  const newIndex = index + offset;
  let removedElement = null;

  if (newIndex > -1 && newIndex < this.length) removedElement = this.splice(index, 1)[0];

  this.splice(newIndex, 0, removedElement);
};
