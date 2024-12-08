import { state, stores } from './state.js'
import { addToCart,removeFromCart,getCart } from './cart.js'
import { showStores } from './storeAndProducts.js'


export function showBar(type, show) {
    let b = document.getElementById(type + 'Bar')
    if (!b) return
  
    state.popUps[type === 'notifications' ? 'notifs' : type] = show
    b.style.transform = show ? 'translateX(0)' : 'translateX(100%)'
  
    if (type === 'cart') {
      updateCartBar()
    } else {
      updateNotificationsBar()
    }
  }

export function updateNotificationCount() {
    let notificationCount = document.getElementById('notificationCount')
    if (!notificationCount) return
    
    let count = state.notifications.length
    notificationCount.textContent = count || '0' 
    notificationCount.style.display = count > 0 ? 'flex' : 'flex'  
  }
  
  export function updateCartCount() {
    let cartCount = document.getElementById('cartCount')
    if (!cartCount) return
    
    let count = 0
    for (let item of state.cart) {
      count += item.quantity
    }
    cartCount.textContent = count || ''
  }
  
  export function updateCartBar() {
    let bar = document.getElementById('cartBar')
    if (!bar) return
  
    bar.innerHTML = `
      <div class="p-4">
        <div class="flex mb-4">
          <h2>Shared Cart</h2>
          <button class = "close ml-auto">×</button>
        </div>
  
        ${state.cart.length === 0 ? 
          '<div class="text-center">Empty cart</div>' :
          state.cart.map(item => `
            <div class="border-b p-4">
              <div>${item.name}</div>
              <div>Added by: ${item.added_by}</div>
              <div>${item.price} AED</div>
              <div>Qty: ${item.quantity}</div>
              ${item.added_by === state.student ? 
                `<button class="delete-prod bg-red-500 text-white p-2 mt-2" data-item-id= "${item.id}">
                  Remove
                </button>` : 
                ''
              }
            </div>
          `).join('')
        }
  
        ${state.cart.length > 0 ? `
          <div class="border-t mt-4 pt-4">
            <div class="flex">
              <span>Total (After Discounts):</span>
              <span class="ml-auto">${state.total} AED</span>
            </div>
            <button class="bg-indigo-600 text-white p-2 w-full mt-4">Checkout</button>
          </div>
        ` : ''}
      </div>
    `
    bar.querySelector('.close').addEventListener('click', () => showBar('cart', false))
    bar.querySelectorAll('.delete-prod').forEach(button => {
      button.addEventListener('click', () => {
        const itemId = button.dataset.itemId
        removeFromCart(itemId)
      })
    })
  }
  
  export function updateNotificationsBar() {
    let bar = document.getElementById('notificationsBar')
    let count = document.getElementById('notificationCount')
    
    if (!bar) return
  
     bar.innerHTML = `
      <div class="p-4">
        <div class="flex mb-4">
          <h2>Messages</h2>
          <button class="close-noti ml-auto">×</button>
        </div>
  
        ${state.notifications.length === 0 ? 
          '<div class="text-center">No messages</div>' :
          state.notifications.map(msg => `
            <div class="border-b p-2">
              <div>${msg.title}</div>
              <div>${msg.msg}</div>
              <div class="text-gray-500">${msg.time}</div>
            </div>
          `).join('')
        }
      </div>
    `

    bar.querySelector('.close-noti').addEventListener('click', () => showBar('notifications', false))
  }