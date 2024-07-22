import Header from './src/components/Header';

import { fetchData } from './src/components/ProductStore';
import { modal } from './src/components/ProductStore';
import Alpine from 'alpinejs';

document.getElementById('app').innerHTML = `
  ${Header()}
  ${modal()}
`;

document.addEventListener('alpine:init', () => {
  Alpine.data('fetchData', fetchData);
  Alpine.data('modal', modal);
});
Alpine.start();
