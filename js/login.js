
const registreform = document.getElementById('registreform')
const registresubmit = registreform.querySelector('input[type="submit"]')


registresubmit.addEventListener('click', function(e) {
    e.preventDefault()
    let errorMsg = document.getElementById('error')
    errorMsg.style.color = 'red'
    // Create user login, with localStorage
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repassword = document.getElementById('repassword').value

    if (!email) {
        errorMsg.textContent = 'udfyld venligst email felt'
    } else if(!password) {
        errorMsg.textContent = 'udfyld venligst kodeord felt'
    } else if (!repassword) {      
        errorMsg.textContent = 'Gentag venligst kodeord felt'
    }  else {
        errorMsg.textContent = ''
    }

    if (password && repassword) {
        if (password !== repassword) {
            errorMsg.textContent = 'Kodeord stemte ikke overens'
       } else {
           errorMsg.textContent = ''
        //    Everything is good
           localStorage.setItem('email', email)
           localStorage.setItem('password', password)
           errorMsg.style.color = 'darkgreen'
           errorMsg.textContent = 'Du er nu registreret'
       }
    }
}) 

const loginform = document.getElementById('loginform')
const loginsubmit = loginform.querySelector('input[type="submit"]')
loginsubmit.addEventListener('click', function(e) {
    e.preventDefault()
    let errorMsg = document.getElementById('loginerror')
    errorMsg.style.color = 'red'
    // Create user login, with localStorage
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email !== localStorage.getItem('email')) {
        errorMsg.textContent = 'Forkert Email'
    } else if (password !== localStorage.getItem('password')) {
        errorMsg.textContent = 'Forkert Password'
    } else {
        
        alert('Du er logget ind')
    }
})








    






