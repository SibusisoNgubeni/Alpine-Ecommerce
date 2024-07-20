

export function fetchData() {
    return {
      loading: false,
      error: null,
      data: null,
      async fetchData() { 
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
  