const main = document.getElementById('main')
document.getElementById('pops').addEventListener('click', function () {
    main.innerHTML = `<div id="billede2">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede5">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/haeklet-bamsebjorn-e-opskrift.jpg" alt="Hæklede bamser">
</div>
<div id="billede7">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/poncho.jpg" alt="Strikket Poncho">
</div>
<div id="billede1">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/the-toft-alpaca-shop-edwards-menageri-kanin-h_kle-opskrift-dansk-copyright-mikkla-dk_2.jpg" alt="Hæklet bamse">
</div>
<div id="billede4">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/images.jpg" alt="Trøstedyr med klud">
</div>
<div id="billede6">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/images1.jpg" alt="Strikket pude">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/Sunday-sweater-petiteknit-front-p.jpg" alt="Strikket sweater">
</div>
<div id="billede9">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/LS_produkt_detaljebil_lang_Sno1_2.jpg" alt="Strikket hue">
</div>
<div id="billede8">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sunday-suit-petiteknit-opskrift-p.jpg" alt="Strikket babysuit">
</div>`
})

document.getElementById('nyeste').addEventListener('click', function () {
    main.innerHTML = `<div id="billede1">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede2">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/haeklet-bamsebjorn-e-opskrift.jpg" alt="Hæklede bamser">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/poncho.jpg" alt="Strikket Poncho">
</div>
<div id="billede4">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/the-toft-alpaca-shop-edwards-menageri-kanin-h_kle-opskrift-dansk-copyright-mikkla-dk_2.jpg" alt="Hæklet bamse">
</div>
<div id="billede5">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/images.jpg" alt="Trøstedyr med klud">
</div>
<div id="billede6">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/images1.jpg" alt="Strikket pude">
</div>
<div id="billede7">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/Sunday-sweater-petiteknit-front-p.jpg" alt="Strikket sweater">
</div>
<div id="billede8">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/LS_produkt_detaljebil_lang_Sno1_2.jpg" alt="Strikket hue">
</div>
<div id="billede9">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sunday-suit-petiteknit-opskrift-p.jpg" alt="Strikket babysuit">
</div>`

})
document.getElementById('anbefalet').addEventListener('click', function () {
    main.innerHTML = `<div id="billede8">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sokker.jpg" alt="Strikkede strømper">
</div>
<div id="billede9">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/haeklet-bamsebjorn-e-opskrift.jpg" alt="Hæklede bamser">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/poncho.jpg" alt="Strikket Poncho">
</div>
<div id="billede2">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/the-toft-alpaca-shop-edwards-menageri-kanin-h_kle-opskrift-dansk-copyright-mikkla-dk_2.jpg" alt="Hæklet bamse">
</div>
<div id="billede5">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/images.jpg" alt="Trøstedyr med klud">
</div>
<div id="billede6">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/images1.jpg" alt="Strikket pude">
</div>
<div id="billede7">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/Sunday-sweater-petiteknit-front-p.jpg" alt="Strikket sweater">
</div>
<div id="billede4">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/LS_produkt_detaljebil_lang_Sno1_2.jpg" alt="Strikket hue">
</div>
<div id="billede1">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/sunday-suit-petiteknit-opskrift-p.jpg" alt="Strikket babysuit">
</div>`
})


// // Filter appere
const filter = document.getElementById('filter')
const search = document.getElementById('searchbtn')
let showFilter = false


search.addEventListener('mouseleave', function() {
    console.log('hey');
    
    if (!showFilter)
        search.style.clipPath = "circle(50.0% at 50% 50%)"
}) 

search.onclick = function() {
    showFilter = !showFilter
    if (showFilter) {
    search.style.clipPath = "circle(100.0% at 50% 50%)"
     filter.style.clipPath = "circle(120.0% at 55% 0%)"
 } else {
    search.style.clipPath = "circle(50.0% at 50% 50%)"
    filter.style.clipPath = "circle(00.0% at 55% 0%)"
 }
}