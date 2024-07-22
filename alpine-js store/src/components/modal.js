const modal = () => {`

    <div x-data="modalData()" x-init="modalData()">
        <template x-if="loading">
          <div>Loading...</div>
        </template>

        <template x-if="error">
          <div>Error: <span x-text="error.message"></span></div>
        </template>

    <div id="myModal" class="modal"
    x-show="modalOpen" x-on:click.away="closeModal"
   <div class="modal-card" x-on:click="open = !open">product-card => x-on:click="open = ! open

       
        <div class="modal-content">
           <div class="product-title h-24 text-xl text-gray-600 font-bold" x-text="product.title"></div>
               <img :src="product.image" alt="Product Image" class="product-image w-64 h-64"/>
             
               <div class="product-price" x-text="'$' + product.price"></div>
               <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
               <div class="product-category" x-text="product.category"></div>
             </div>
   </div>
   `
}