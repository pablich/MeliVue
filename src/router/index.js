import Home from './../pages/Home.vue';
import SubCategoryList from './../components/Category/SubCategoryList.vue';
import ProductList from './../components/Product/ProductList.vue';
import Product from './../components/Product/Product.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/:id',
    component: SubCategoryList,
    name: 'subCategoryList',
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
