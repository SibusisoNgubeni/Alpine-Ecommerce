// modal.js

export const modal = () => `
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-title" x-text="product.title"></h2>
      <button @click="closeModal()">Close</button>
    </div>
    <div class="modal-body">
      <img :src="product.image" alt="Product Image" class="modal-image"/>
      <div class="product-price" x-text="'$' + product.price"></div>
      <div class="product-category" x-text="product.category"></div>
      <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
    </div>
  </div>
`;

export const modalData = (productId) => ({
  product: {},
  async init() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      this.product = await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  },
  closeModal() {
    // This will close the modal by invoking the `closeModal` method from the `productList` component
    this.$el.closest('[x-data]').__x.$data.closeModal();
  }
});
