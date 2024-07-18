import Header from './components/header';
import ProductList from './components/productList';
import { fetchData } from './components/productStore';
import Alpine from 'alpinejs';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${ProductList()}
`;

document.addEventListener('alpine:init', () => {
  Alpine.data('fetchData', fetchData);
});
Alpine.start();
