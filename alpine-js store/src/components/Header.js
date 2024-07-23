


const Header = () => `
  <header class="sticky z-50 top-0" x-data="{ open: true }">

    <nav class="bg-gray-500 border-gray-200 mb-5">

       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
               <img src="./src/assets/online-shop.png" class="h-8" alt="Flowbite Logo">
               <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SwiftCart</span>
            </a>
       </div>
           
    </nav>
  </header>
`

export default Header;
