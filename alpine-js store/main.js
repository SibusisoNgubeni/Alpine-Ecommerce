import Header from './src/components/Header';
import ProductList from './src/components/ProductList';
import { fetchData } from './src/components/ProductStore';
import Alpine from 'alpinejs';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${ProductList()}
`;

document.addEventListener('alpine:init', () => {
  Alpine.data('fetchData', fetchData);
});
Alpine.start();
