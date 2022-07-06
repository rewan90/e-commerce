import {
      createRouter,
      createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import signIn from '../views/signIn.vue'
import signUp from '../views/signUp.vue'
import Admin from '../views/Admin.vue'
import Cart from '../views/Cart.vue'

import category from '../views/category/Category.vue'
import addCategory from '../views/category/addCategory.vue'
import editCategory from "../views/category/editCategory.vue";
import listProducts from "../views/category/listProducts.vue";

import product from '../views/product/product.vue'
import WishList from '../views/product/WishList.vue'
import addProduct from '../views/product/addProduct.vue'
import editProduct from "../views/product/editProduct.vue";
import showDetails from "../views/product/showDetails.vue";


const routes = [{
            path: '/',
            name: 'Home',
            component: Home
      },
      {
            path: '/signIn',
            name: 'signIn',
            component: signIn
      },
      {
            path: '/signUp',
            name: 'signUp',
            component: signUp
      },
      {
            path: '/Cart',
            name: 'Cart',
            component: Cart
      },


      {
            path: '/admin/Category/add',
            name: 'addCategory',
            component: addCategory
      },
      {
            path: '/admin/category/',
            name: 'Category',
            component: category
      },
      {
            path: '/admin/category/:id',
            name: 'editCategory',
            component: editCategory
      },
      {
            path: '/category/show/:id',
            name: 'listProducts',
            component: listProducts
      },
      //admain home page
      {
            path: '/admin/',
            name: 'Admin',
            component: Admin
      },
      {
            path: '/admin/product',
            name: 'product',
            component: product
      },
      //add product
      {
            path: '/admin/product/add',
            name: 'addProduct',
            component: addProduct
      },
      {
            path: '/admin/product/:id',
            name: 'editProduct',
            component: editProduct
      },
      {
            path: '/product/show/:id',
            name: 'showDetails',
            component: showDetails
      },
      {
            path: '/wishlist',
            name: 'WishList',
            component: WishList
      },

]

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
})

export default router
