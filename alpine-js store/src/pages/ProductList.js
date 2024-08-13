import producSort from "../components/Sort";
import CategoryFilter from "../components/CategoryFilter";
import { modal } from "../components/modal";
import "/style.css"

const ProductList = () => `

      <div x-data="fetchData()" x-init="fetchData()">
      <div class="filter">
      ${producSort().template}
      ${CategoryFilter()}
      </div>
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
                <div class="product-card" @click="openModal(product.id">
                  <div x-show="open">
                  
                  </div>

                  <div class="product-title" x-text="product.title"></div>
                  <img :src="product.image" alt="Product Image" class="product-image "/>
                
                  <div class="product-price" x-text="'$' + product.price"></div>
                  <div class="product-category" x-text="product.category"></div>
                   <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
                </div>
            </template>

            </div>

            <template x-if="modalOpen">
            <div x-data="modalData(selectedProductid)" x-init="init()">
            $modal}
            </div>
            </template>
          </div>
        </template>
      </div>  
 <template x-if="modalOpen">
      <div x-data="modalData(selectedProductId)" x-init="init()">
        ${modal}
      </div>
    </template>

      

</div>


    `
  
  
  export default ProductList;