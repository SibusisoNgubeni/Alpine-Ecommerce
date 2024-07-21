const sort = () => {
  return`
  <div x-data="{ sorting: 'default' }" class="flex justify-end sm:w-[95%] max-w-[21rem] md:w-40 flex-wrap items-end mb-5 ">
   <div class="w-full md:w-auto md:ml-auto mr-4">
  <label for="sort" class="w-20 my-auto font-semibold">Sort by:</label>
  <select 
     x-model="sorting" 
     @change="$dispatch('sort-products')" 
     name="" id="sort" 
     class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
   
    <option value="default">Default</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
  </select>
  </div>
</div>


`
}

export default sort;