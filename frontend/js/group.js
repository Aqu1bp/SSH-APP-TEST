import { state, } from './state.js'
import { showStores } from './storeAndProducts.js'


export function createGroup() {
    state.group = {
      id: Date.now(),
      name: 'Group 1',
      members: ['Student 1', 'Student 2']
    }
    state.page = 'stores'
  
    let main = document.getElementById('mainContent')
    if(!main) return
    
    main.innerHTML = '<div id="supermarketsGrid"></div>'
    showStores()
  }

export function showGroupPage() {
    let main = document.getElementById('mainContent')
    if(!main) return
  
    main.innerHTML = `
      <div class="p-8"> 
        <div class="bg-white p-6 rounded m-auto">
          <h2 class="text-2xl mb-4">Create Shopping Group</h2>
          
          <div>
            <div class="border rounded p-4 mb-4">
              <div class="mb-2">Group Members:</div>
              <div>
                <div class="flex mb-2">
                  <div class="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                  <span class="ml-2">Student 1</span>
                </div>
                <div class="flex">
                  <div class="bg-green-500 w-2 h-2 rounded-full mt-2"></div>
                  <span class="ml-2">Student 2</span>
                </div>
              </div>
            </div>
  
            <button id="createGroupButton" class="bg-indigo-600 text-white p-2 w-full">
              Start shopping with your group!
            </button>
          </div>
        </div>
      </div>
    `

    document.getElementById('createGroupButton')?.addEventListener('click', createGroup)
  }