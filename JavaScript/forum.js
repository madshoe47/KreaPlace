// Lytter til begge navigationer
document.getElementById('udfold').addEventListener('click', enableDropdownMenu)
document.getElementById('pilhvid').addEventListener('click', enableDropdownMenu)

// Synlig og usynliggøre menuen med de 5 seneste indlæg
let menuEnabelt = false

function enableDropdownMenu(e) {
    e.preventDefault()
    const menu = document.getElementById('wrapwrapwrap')
    const pil = document.getElementById('pilhvid')

    if (menuEnabelt) {
        menu.style.display = 'block'


    } else {
        menu.style.display = 'none'
        pil.style.transform = 'rotate(0deg)'
    }
    menuEnabelt = !menuEnabelt
