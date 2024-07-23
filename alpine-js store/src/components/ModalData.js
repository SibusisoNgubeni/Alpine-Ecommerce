export default function ModalData() {
  return {
    modalOpen: false,
    selectedProduct: null,
    loadingModal: false,
    async showModal(productId) {
      this.modalOpen = true;
      this.loadingModal = true;
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        this.selectedProduct = await response.json();
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
  };
}
