

// Når Header Login knappen trykkes
const modal = document.getElementById('loginmodal')
const blur = document.getElementById('blur')
document.getElementById('loginbtn').addEventListener('click', function() {
    blur.style.display = 'block'
    modal.style.display = 'block'
    document.getElementById('email').focus()
})

// Fjerner blur og modal
document.getElementById('blur').addEventListener('click', function() {
    modal.style.display = 'none'
    blur.style.display = 'none'
})

// Skift mellem login og registre menu
document.getElementById('opret').addEventListener('click', function() {
    // Find template
    const registretemplate = document.getElementById('registreTemplate').content.querySelector('.registre')

    const logintemplate = document.getElementById('loginTemplate')
    // console.log(logintemplate);


    // Fjern login form children (børn)
    while(modal.children.length > 0) {
        modal.removeChild(modal.children.item(0));
    }

    modal.appendChild(registretemplate)

    const registreform = document.getElementById('registreform')
    const registresubmit = registreform.querySelector('input[type="submit"]')
    registresubmit.addEventListener('click', registere) 

})

function removeElement(className) {
    // Removes an element from the document
    var element = modal.getElementsByClassName(className)[0]
    element.parentNode.removeChild(element);
}

// document.getElementById('skiftlogin').addEventListener('click', function() {

// })
