import { state } from './state.js'
import { getCart } from './cart.js'
import { showGroupPage} from './group.js'
import { updateNotificationCount, showBar } from './change_UI.js'
import { setupStudent } from './user.js'
import { showProducts, showStores } from './storeAndProducts.js'



document.addEventListener('DOMContentLoaded', () => {
    let student = setupStudent()
    
    if (student) {
      state.student = student
      sessionStorage.setItem('currentStudent', student)
      
      showGroupPage()
      getCart()
      updateNotificationCount() 
  
      document.getElementById('cartButton').onclick = () => 
        showBar('cart', !state.popUps.cart)
  
      document.getElementById('notificationButton').onclick = () => 
        showBar('notifications', !state.popUps.notifs)

      document.getElementById('current-Student').textContent = `Currently used by: ${state.student}`
  
      setInterval(getCart, 5000)
  
    } else {
      document.body.innerHTML = `
        <div class="fixed inset-0 bg-gray-100">
          <div class="bg-white p-6 rounded m-auto mt-20 max-w-md">
            <h2 class="text-xl text-red-600 mb-4">Too Many Users</h2>
            <p class="text-gray-600">Maximum students in current session.</p>
          </div>
        </div>
      `
    }
  })