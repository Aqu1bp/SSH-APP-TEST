import { state, stores } from './state.js'
import { addToCart } from './cart.js'

export function showStores() {
  let main = document.getElementById('mainContent')
  if(!main) return

  main.innerHTML = `
    <div class="p-4">
      <div class="mb-4">
        <input
          type="text"
          placeholder="Search.."
          class="w-full p-3 border rounded"
        >
      </div>
      <div class="grid grid-cols-2 gap-4">
        ${stores.map(store => `
          <div data-store-id="${store.id}" class="cursor-pointer store-item">
            <div class="bg-white rounded border">
              <img src="${store.img}" class="w-full h-48">
            </div>
            <div class="text-center mt-2">
              ${store.name}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `

  document.querySelectorAll('.store-item').forEach(item => {
    item.addEventListener('click', () => {
      const storeId = item.dataset.storeId
      showProducts(storeId)
    })
  })
}

export async function showProducts(id) {
  let main = document.getElementById('mainContent')
  if (!main) return

  let store = stores.find(s => s.id === parseInt(id))
  

  try {
    let res = await fetch('http://localhost:8000/api/get_products')
    let data = await res.json()
    
    main.innerHTML = `
      <div class="p-4">
        <button id="backToStores" class="p-2">←</button>
        <span class="text-xl ml-2">${store?.name}</span>

        <div class="grid grid-cols-2 gap-4 mt-4">
          ${data.products.map(item => `
            <div class="border p-2">
              <img src="${item.image}" class="w-full h-40">
              <div class="mt-2">
                <div>${item.name}</div>
                <div>${item.price} AED</div>
                <button 
                  class="addToCart bg-indigo-600 text-white p-2 mt-2 w-full" 
                  data-product-name="${item.name}">
                  Add to Cart
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `
    document.getElementById('backToStores')?.addEventListener('click', showStores)
    document.querySelectorAll('.addToCart').forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.dataset.productName
        addToCart(productName.toLowerCase())
      })
    })

  } catch {
    main.innerHTML = `
      <div class="text-center text-red-500">
        Error
      </div>
    `
  }
}