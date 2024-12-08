export let state = {
  cart: [], 
  total: 0,
  page: 'group',
  store: null,
  popUps: {
    cart: false,
    notifs: false 
  },
  group: null,
  student: 'Student 1',
  notifications: [
    {
      id: 1,
      title: 'Order Delivered',
      msg: 'Your order #XYZ has been delivered', 
      time: '3h ago'
    }
  ]
}

export const stores = [
  { id: 1, name: 'Supermarket1', img: '/api/img/80/80' },
  { id: 2, name: 'Supermarket2', img: '/api/img/80/80' },
  { id: 3, name: 'Supermarket3', img: '/api/img/80/80' },
  { id: 4, name: 'Supermarket4', img: '/api/img/80/80' },
]