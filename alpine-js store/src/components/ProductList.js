import sort from "./Sort";
import "/style.css"

const ProductList = () => `
  ${sort()}
  <div x-data="{ products: [], loading: true, error: null }" x-init="fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => { products = data; loading = false; })
    .catch(err => { error = err; loading = false; })">

    <template x-if="loading">
      <div>Loading...</div>
    </template>

    <template x-if="error">
      <div>Error: <span x-text="error.message"></span></div>
    </template>

    <template x-if="!loading && !error">
      <div class="grid justify-center">
        <div class="lg:max-h-[130rem] max-w-xl mx-auto grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center lg:max-w-none my-4">
          <template x-for="product in products" :key="product.id">
            <div class="product-card">
              <div class="product-title h-24" x-text="product.title"></div>
              <img :src="product.image" alt="Product Image" class="product-image w-64 h-64 mt-10"/>
              <div class="product-price" x-text="'$' + product.price"></div>
              <div class="product-rating" x-text="'Rating: ' + product.rating.rate + ' (' + product.rating.count + ')'"></div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
`

export default ProductList;
