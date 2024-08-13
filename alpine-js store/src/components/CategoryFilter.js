 const CategoryFilter = () => {
    return (
    `
    <div class="filter">
        <!-- Category Filter -->
        <select x-model="selectedCategory" x-on:change="filterProducts" ">
          <option value="">All Categories</option>
          <template x-for="category in categories" :key="category">
            <option :value="category" x-text="category"></option>
          </template>
        </select>
      `
)};
export default CategoryFilter;