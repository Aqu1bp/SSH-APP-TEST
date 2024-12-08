import { state,stores} from './state.js'


export function setupStudent() {
    let s1 = localStorage.getItem('student1')
    let s2 = localStorage.getItem('student2')
    
    let student = null
    
    if (!s1) {
      localStorage.setItem('student1', Date.now())
      student = 'Student 1'
    } else if (!s2) {
      localStorage.setItem('student2', Date.now())
      student = 'Student 2'
    }
  
    return student
  }


  window.onunload = () => {
    let currentStudent = sessionStorage.getItem('currentStudent')
    if (currentStudent === 'Student 1') localStorage.removeItem('student1')
    else if (currentStudent === 'Student 2') localStorage.removeItem('student2')
  }