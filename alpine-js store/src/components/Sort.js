export default function productSort() {
  return {
    sortOption: '', // Currently selected sort option

    sortData(data) {
      // Sort data based on the selected sortOption
      switch (this.sortOption) {
        case 'lowToHigh':
          return [...data].sort((a, b) => a.price - b.price);
        case 'highToLow':
          return [...data].sort((a, b) => b.price - a.price);
        default:
          return data; // No sorting applied
      }
    },

    resetSort() {
      this.sortOption = ''; // Reset sortOption
    },

    template: `
      <div class="sort-options">
        <select x-model="sortOption" @change="sortData()">
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <button @click="resetSort()">Reset</button>
      </div>
    `
  };
}
