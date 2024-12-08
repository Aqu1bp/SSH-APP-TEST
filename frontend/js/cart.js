import { state, stores } from './state.js'
import { updateCartCount,updateCartBar,updateNotificationCount,updateNotificationsBar } from './change_UI.js'

export async function addToCart(name, qty = 1) {
  try {
    let res = await fetch('http://localhost:8000/api/add/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item_name: name,
        quantity: qty,
        added_by: state.student
      })
    })

    let data = await res.json()
    state.cart = data.cart
    state.total = data.total_price
    updateCartCount()
    
    if (state.popUps.cart) {
      updateCartBar()
    }
  } catch (err) {
    console.error('error:', err)
  }
}

export async function removeFromCart(id) {
  try {
    let res = await fetch('http://localhost:8000/api/remove/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item_id: id,
        student: state.student
      })
    })

    let data = await res.json()
    state.cart = data.cart
    state.total = data.total_price
    updateCartCount()
    
    if (state.popUps.cart) {
      updateCartBar()
    }
  } catch (err) {
    console.error('error:', err)
  }
}

export async function getCart() {
  try {
    let res = await fetch('http://localhost:8000/api/')
    let data = await res.json()
    state.cart = data.cart
    state.total = data.total_price
    updateCartCount()
  } catch (err) {
    console.error('error:', err)
  }
}