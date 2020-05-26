const main = document.getElementById('main')
document.getElementById('pops').addEventListener('click', function () {
    main.innerHTML = `<div id="billede2">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede5">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
</div>
<div id="billede7">
    <p class="tekst">Strikning</p>
    <a href="./opskrift.html">
        <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
    </a>
</div>
<div id="billede1">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="./images/bamse.jpg" alt="Hæklet bamse">
</div>
<div id="billede4">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="./images/trostedyr.jpg" alt="Trøstedyr med klud">
</div>
<div id="billede6">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/pude.jpg" alt="Strikket pude">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/sweater.jpg" alt="Strikket sweater">
</div>
<div id="billede9">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/hue.jpg" alt="Strikket hue">
</div>
<div id="billede8">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/babydragt.jpg" alt="Strikket babysuit">
</div>`
})

document.getElementById('nyeste').addEventListener('click', function () {
    main.innerHTML = `<div id="billede1">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede2">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <a href="./opskrift.html">
        <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
    </a>
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
</div>`

})
document.getElementById('anbefalet').addEventListener('click', function () {
    main.innerHTML = `<div id="billede8">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede9">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="./images/bamsebjorn.jpg" alt="Hæklede bamser">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <a href="./opskrift.html">
        <img class="billeder" src="./images/poncho.jpg" alt="Strikket Poncho">
    </a>
</div>
<div id="billede2">
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
<div id="billede4">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/hue.jpg" alt="Strikket hue">
</div>
<div id="billede1">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="./images/babydragt.jpg" alt="Strikket babysuit">
</div>`
})


// // Filter appere

const filter = document.getElementById('filter')
const formfilter = document.getElementById('formfilter')
const search = document.getElementById('searchbtn')

let showFilter = false

const currentHeight = getComputedStyle(formfilter, null).getPropertyValue("height")
const currentPadding = getComputedStyle(formfilter, null).getPropertyValue("padding")
const currentMargin = getComputedStyle(formfilter, null).getPropertyValue("marginBottom")

formfilter.style.height = '0px'
formfilter.style.padding = '0em 0'
formfilter.style.margin = '0'

search.onclick = function() {
    showFilter = !showFilter

    if (showFilter) {
        formfilter.style.height = currentHeight
        formfilter.style.padding = currentPadding
        formfilter.style.marginBottom = currentMargin
     filter.style.clipPath = "circle(200.0% at 55% 0%)"
 } else {
    filter.style.clipPath = "circle(00.0% at 55% 0%)"
    formfilter.style.height = '0px'
    formfilter.style.padding = '0em 0'
    formfilter.style.marginBottom = '0em'
 }
}