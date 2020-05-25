// Lytter til begge navigationer
document.getElementById('pilhvid').addEventListener('click', enableDropdownMenu)

// Synlig og usynliggøre menuen med de 5 seneste indlæg
let menuEnabelt = false

function enableDropdownMenu(e) {
    e.preventDefault()
    const menu = document.getElementById('wrapwrapwrap')

    if (menuEnabelt) {
        menu.style.display = 'block'

    } else {
        menu.style.display = 'none'
    }
    menuEnabelt = !menuEnabelt
