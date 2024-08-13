import Header from './src/components/Header';
import ProductList from './src/pages/ProductList';
import { fetchData } from './src/pages/ProductStore';

import Alpine from 'alpinejs';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${ProductList()}
  
`;

document.addEventListener('alpine:init', () => {
  Alpine.data('fetchData', fetchData);
  
});

Alpine.start();
