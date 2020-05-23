// Check om email og password er korrekt, ved tryk på submit
const loginform = document.getElementById('loginform')
const registereform = document.getElementById('registreform')
// const loginsubmit = loginform.querySelector('input[type="submit"]')
loginform.addEventListener('submit', logon)
registereform.addEventListener('submit', registere)

sessionStorage.setItem('logedIn', 'false')

function registere(e) {
    console.log(e, 'Yay');
    
    e.preventDefault()
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
           localStorage.setItem('username', username.toLowerCase())
           localStorage.setItem('email', email)
           localStorage.setItem('password', password)

           errorMsg.style.color = 'darkgreen'
           errorMsg.textContent = 'Du er nu registreret'
           setTimeout(function() {
            window.location = window.location.search = `?username=${username}&email=${email}&password=${password}`;
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

    if (email !== localStorage.getItem('email')) {
        errorMsg.textContent = 'Forkert Email eller Brugernavn'
    } else if (password !== localStorage.getItem('password')) {
        errorMsg.textContent = 'Forkert Password'
    } else {
        // Default behavior
        sessionStorage.setItem('logedIn', 'true')
        errorMsg.style.color = 'green'
        errorMsg.textContent = `Du er logget ind som ${localStorage.getItem('username')}`
        // window.location = window.location.search = "?user=annemikkelsen";
    }
}

// Login avatar
const avatar = document.getElementsByClassName('profil')
if(sessionStorage.getItem('logedIn') === 'true') {
    for (const element of avatar) {
        element.children[0].style.display = 'none'
        element.children[1].style.display = 'flex'
    }
    localStorage.getItem('username')
    
}



// // Filter appere
// const filter = document.getElementById('filter')
// const search = document.getElementById('searchbtn')
// let showFilter = false


// search.onmouseleave = function() {
//     if (!showFilter)
//         search.style.clipPath = "circle(50.0% at 50% 50%)"
// }


// search.onclick = function() {
//     showFilter = !showFilter
//     if (showFilter) {
//     search.style.clipPath = "circle(100.0% at 50% 50%)"
//      filter.style.clipPath = "circle(120.0% at 55% 0%)"
//  } else {
//     search.style.clipPath = "circle(50.0% at 50% 50%)"
//     filter.style.clipPath = "circle(00.0% at 55% 0%)"
//  }
// }








    






