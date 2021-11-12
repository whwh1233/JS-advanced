const loginButton = document.querySelector('button')

loginButton.onclick = function() {
  localStorage.setItem('name','local')
  sessionStorage.setItem('name','session')
}
