import '/style.css';

const modal = () => `
  <div x-data="{
    product: {},
    async init() {
      const response = await fetch('https://fakestoreapi.com/products/${productId}');
      const data = await response.json();
      this.product = data;
    }
  }" x-init="init()">
    <div class="modal-card">
      <div class="modal-product-title" x-text="product.title"></div>
      <img :src="product.image" alt="Product Image" class="modal-image" />
      <div class="product-price" x-text="'$' + product.price"></div>
      <div class="product-category" x-text="product.category"></div>
      <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
    </div>
  </div>
`;

export default modal;
