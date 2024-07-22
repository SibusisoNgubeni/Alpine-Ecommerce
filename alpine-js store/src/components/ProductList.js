import sort from "./Sort";
import "/style.css"


 



const ProductList = () => `

     

       ${sort()}
      <div x-data="fetchData()" x-init="fetchData()">
        <template x-if="loading">
          <div>Loading...</div>
        </template>

        <template x-if="error">
          <div>Error: <span x-text="error.message"></span></div>
        </template>

        <template x-if="data">
          <div class="grid justify-center">
            <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
            
            <template x-for="product in data" :key="product.id">
                <div class="product-card">
                  <div class="product-title h-24 text-xl text-gray-600 font-bold" x-text="product.title"></div>
                  <img :src="product.image" alt="Product Image" class="product-image w-64 h-64"/>
                
                  <div class="product-price" x-text="'$' + product.price"></div>
                  <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
                  <div class="product-category" x-text="product.category"></div>
                </div>
            </template>

            </div>
          </div>
        </template>
      </div>  


      <div id="myModal" class="modal"
       x-show="modalOpen" x-on:click.away="closeModal"
      <div class="product-card" x-on:click="open = !open">product-card => x-on:click="open = ! open

          
           <div class="modal-content">
              <div class="product-title h-24 text-xl text-gray-600 font-bold" x-text="product.title"></div>
                  <img :src="product.image" alt="Product Image" class="product-image w-64 h-64"/>
                
                  <div class="product-price" x-text="'$' + product.price"></div>
                  <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
                  <div class="product-category" x-text="product.category"></div>
                </div>
      </div>

</div>


    `
  
  
  export default ProductList;
  