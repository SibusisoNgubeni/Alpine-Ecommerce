export function fetchData() {
  return {
    loading: false,
    error: null,
    data: null,
    async init() {
      try {
        this.loading = true;
        const response = await fetch('https://fakestoreapi.com/products');
        this.data = await response.json();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  };
}



export function modalData() {
  return {
    modalOpen: true,
    selectedProduct: null,
    loadingModal: false,
    async showModal(productId) {
      this.modalOpen = true;
      this.loadingModal = true;
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        this.selectedProduct = data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loadingModal = false;
      }
    },
    closeModal() {
      this.modalOpen = false;
      this.selectedProduct = null;
    },
    sortOrder: 'default',
    sortProducts(products, sortOrder) {
      if (sortOrder === 'highToLow') {
        return products.sort((a, b) => b.price - a.price);
      } else if (sortOrder === 'lowToHigh') {
        return products.sort((a, b) => a.price - b.price);
      } else {
        return products;
      }
    },
    setSortOrder(order) {
      this.sortOrder = order;
      if (this.data) {
        this.data = this.sortProducts([...this.data], order);
      }
    },
  };
}