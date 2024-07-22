import Header from './src/components/Header';
import ProductList from './src/components/ProductList';

import Alpine from 'alpinejs';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${ProductList()}
`;


