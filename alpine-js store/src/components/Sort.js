const Sort = () => `
  <div class="sort mt-10 mb-10">
    <label for="sort">Sort by:</label>
    <select class=" bg-blue-200" id="sort" @change="sortProducts($event.target.value)">
      <option value="default">Default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
    </select>
  </div>
`

export default Sort;