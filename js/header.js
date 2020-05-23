

// Når Header Login knappen trykkes
const modal = document.getElementById('loginmodal')
const registremodal = document.getElementById('registremodal')
const blur = document.getElementById('blur')

// Åbner Modal til login
function loginEnable(e) {
    blur.style.display = 'block'
    modal.style.display = 'block'
    document.getElementById('email').focus()

    // Hvis det er mobil, luk også mobil navigationen
    if (e.path[0].dataset) {
        mobilNavOn()
    }
}

// Listner til åbning af modal
document.getElementById('loginbtn').addEventListener('click', loginEnable)
document.getElementById('mobil-loginbtn').addEventListener('click', loginEnable)

// Fjerner blur og modal, (lukning af modal)
document.getElementById('blur').addEventListener('click', removeModal)
function removeModal() {
    modal.style.display = 'none'
    registremodal.style.display = 'none'
    blur.style.display = 'none'
}
// Skift mellem login og registre menu
document.getElementById('opret').addEventListener('click', toRegistreMenu)
document.getElementById('skiftlogin').addEventListener('click', toLoginMenu)


function toRegistreMenu() {
    modal.style.display = 'none'
    registremodal.style.display = 'block'
}

function toLoginMenu() {
    modal.style.display = 'block'
    registremodal.style.display = 'none'
}

// Lytter til begge navigationer
document.getElementById('dropdown-btn').addEventListener('click', enableDropdownMenu)
document.getElementById('mobil-dropdown-btn').addEventListener('click', enableDropdownMenu)

// Synlig og usynliggøre Opskrift menuen
let menuEnabelt = false
function enableDropdownMenu(e) {
    e.preventDefault()
    const menu = document.getElementById('dropdownMenu')

    if (menuEnabelt) {
        menu.style.display = 'none'
        
    } else {
        menu.style.display = 'grid'
    }
    menuEnabelt = !menuEnabelt
    
    // Hvis det er fra mobil navigation
    if (e.path[0].dataset) {
        mobilNavOn()
    }
    
}

// Mobil nav enable
let mobilNavEnable = false
function mobilNavOn() {
    const nav = document.getElementById('mobil-nav')
    if (mobilNavEnable) {
        nav.style.display = 'none'
        
    } else {
        nav.style.display = 'flex'
    }
    mobilNavEnable = !mobilNavEnable
}
document.getElementById('mobil-nav-btn').addEventListener('click', mobilNavOn)