import Home from './../pages/Home.vue';
import Cart from './../pages/Cart.vue';
import CategoryList from './../components/Category/CategoryList.vue';
import ProductList from './../components/Product/ProductList.vue';
import Product from './../components/Product/Product.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart',
  },
  {
    path: '/:id',
    component: CategoryList,
    name: 'CategoryList',
  },
  {
    path: '/category/:id',
    component: ProductList,
    name: 'productList',
  },
  {
    path: '/product/:id',
    component: Product,
    name: 'product',
  },
  {
    path: '/search/:id',
    component: ProductList,
    name: 'search',
  },
];

export default routes;
