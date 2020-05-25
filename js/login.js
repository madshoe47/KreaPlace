// Check om email og password er korrekt, ved tryk på submit
const loginform = document.getElementById('loginform')
const registereform = document.getElementById('registreform')

loginform.addEventListener('submit', logon)
registereform.addEventListener('submit', registere)
console.log('Session loged in:',sessionStorage.getItem('logedIn'));

if (localStorage.getItem('user') && sessionStorage.getItem('logedIn') === 'true') {
    console.log(localStorage.getItem('user'));
    showAvatar()
    
}


function registere(e) {
    e.preventDefault()
    sessionStorage.setItem('logedIn', 'false')
    let errorMsg = document.getElementById('registreerror')
    errorMsg.style.color = 'red'
    // Create user login, with localStorage
    const username = document.getElementById('regusername').value
    const email = document.getElementById('regemail').value.toLowerCase()
    const password = document.getElementById('regpassword').value
    const repassword = document.getElementById('reregpassword').value
    
    if (!email) {
        errorMsg.textContent = 'Udfyld venligst email felt'
    } else if(!password) {
        errorMsg.textContent = 'Udfyld venligst kodeord felt'
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
        localStorage.setItem('user', `{"username": "${username}","password": "${password}","email": "${email}"}`)

           errorMsg.style.color = 'darkgreen'
           errorMsg.textContent = 'Du er nu registreret'
           setTimeout(function() {
            window.location = window.location.search = `?username=${username}&email=${email}&password=${password}`
           }, 1000)
       }
    }
}

function logon(e) {
    e.preventDefault()
    let errorMsg = document.getElementById('loginerror')
    errorMsg.style.color = 'red'
    // Create user login, with localStorage
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        errorMsg.textContent = 'Bruger eksistere ikke'
    } else {
        if (email !== user.email && email !== user.username ) {
            errorMsg.textContent = 'Forkert Email eller Brugernavn'
        } else if (password !== user.password) {
            errorMsg.textContent = 'Forkert Password'
        } else {
            sessionStorage.setItem('logedIn', 'true')
            errorMsg.style.color = 'green'
            errorMsg.textContent = `Du er logget ind som ${user.username}`
            removeModal()
            showAvatar()
            // window.location = window.location.search = "?user=annemikkelsen";
        }
    }
    
}

// Login avatar
function showAvatar() {
    const avatar = document.getElementsByClassName('profil')
    const onlyLogin = document.getElementsByClassName('onlyLogin')
    if(sessionStorage.getItem('logedIn') === 'true') {
        for (const element of onlyLogin) {
            element.style.display = 'block'
        }
        
        for (const element of avatar) {
            element.children[0].style.display = 'none'
            element.children[1].style.display = 'flex'
        }
        
    }

}












    






