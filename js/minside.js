'use strict'

const bardine = document.getElementById('barparts1')
const bargemte = document.getElementById('barparts2')
const barliked = document.getElementById('barparts3')
const dine = document.getElementById('text1')
const gemte = document.getElementById('text2')
const liked = document.getElementById('text3')
const main = document.getElementById('picwrap')


document.getElementById('text2').addEventListener('click', function () {
    bardine.style.display = 'none'
    barliked.style.display = 'none'
    bargemte.style.display = 'block'

    dine.style.color = '#8B8B8B'
    gemte.style.color = '#B94B85'
    liked.style.color = '#8B8B8B'

    main.innerHTML = `<div id="picoverhead">
            <div id="billede4">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sokkker.jpg" alt="Strikkede strømper">
            </div>
            <div id="billede3">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
            </div>
            <div id="billede1">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
            </div>
            <div id="billede9">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamse.jpg" alt="Hæklet bamse">
            </div>
            <div id="billede6">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/trostedyr.jpg" alt="Trøstedyr med klud">
            </div>
            <div id="billede8">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/pude.jpg" alt="Strikket pude">
            </div>
            <div id="billede5">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sweater.jpg" alt="Strikket sweater">
            </div>
            <div id="billede7">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/hue.jpg" alt="Strikket hue">
            </div>
            <div id="billede2">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/babydragt.jpg" alt="Strikket babysuit">
            </div>
        </div> `
})


document.getElementById('text1').addEventListener('click', function () {
    bardine.style.display = 'block'
    barliked.style.display = 'none'
    bargemte.style.display = 'none'

    dine.style.color = '#B94B85'
    gemte.style.color = '#8B8B8B'
    liked.style.color = '#8B8B8B'

    main.innerHTML = `<div id="picoverhead">
            <div id="billede1">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sokkker.jpg" alt="Strikkede strømper">
            </div>
            <div id="billede2">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
            </div>
            <div id="billede3">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
            </div>
            <div id="billede4">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamse.jpg" alt="Hæklet bamse">
            </div>
            <div id="billede5">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/trostedyr.jpg" alt="Trøstedyr med klud">
            </div>
            <div id="billede6">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/pude.jpg" alt="Strikket pude">
            </div>
            <div id="billede7">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sweater.jpg" alt="Strikket sweater">
            </div>
            <div id="billede8">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/hue.jpg" alt="Strikket hue">
            </div>
            <div id="billede9">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/babydragt.jpg" alt="Strikket babysuit">
            </div>
        </div> `
})


document.getElementById('text3').addEventListener('click', function () {
    bardine.style.display = 'none'
    barliked.style.display = 'block'
    bargemte.style.display = 'none'

    dine.style.color = '#8B8B8B'
    gemte.style.color = '#8B8B8B'
    liked.style.color = '#B94B85'

    main.innerHTML = `<div id="picoverhead">
            <div id="billede8">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sokkker.jpg" alt="Strikkede strømper">
            </div>
            <div id="billede9">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
            </div>
            <div id="billede6">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
            </div>
            <div id="billede1">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/bamse.jpg" alt="Hæklet bamse">
            </div>
            <div id="billede2">
                <p class="tekst">Hækling</p>
                <img class="billeder" src="./images/trostedyr.jpg" alt="Trøstedyr med klud">
            </div>
            <div id="billede3">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/pude.jpg" alt="Strikket pude">
            </div>
            <div id="billede4">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/sweater.jpg" alt="Strikket sweater">
            </div>
            <div id="billede5">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/hue.jpg" alt="Strikket hue">
            </div>
            <div id="billede7">
                <p class="tekst">Strikning</p>
                <img class="billeder" src="./images/babydragt.jpg" alt="Strikket babysuit">
            </div>
        </div> `
})
