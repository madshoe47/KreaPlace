'use strict'
const main = document.getElementById('main')
document.getElementById('pops').addEventListener('click', function() {
    
    main.innerHTML = `<div id="billede1">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/9089d08ed06f4654b4d20339ae12fa4e.jpg" alt="Strikkede strømper">
</div>
<div id="billede2">
    <p class="tekst">Hækling</p>
    <img class="billeder" src="images/haeklet-bamsebjorn-e-opskrift.jpg" alt="Hæklede bamser">
</div>
<div id="billede3">
    <p class="tekst">Strikning</p>
    <img class="billeder" src="images/Image_23.jpg" alt="Strikket Poncho">
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

document.getElementById('nyeste').addEventListener('click', function() {

})
document.getElementById('anbefalet').addEventListener('click', function() {

})

// document.getElementById("pops").addEventListener("click", function () {
//     if (document.getElementById("anbefalet").clicked = false) {
//         document.getElementById("billede7").id = "billede3";
//         document.getElementById("billede3").id = "billede7";
//         document.getElementById("billede8").id = "billede4";
//         document.getElementById("billede4").id = "billede8";
//         document.getElementById("billede6").id = "billede1";
//         document.getElementById("billede1").id = "billede6";
//         document.getElementById("billede5").id = "billede2";
//         document.getElementById("billede2").id = "billede5";
//     } else {
//         document.getElementById("billede1").id = "billede9";
//         document.getElementById("billede2").id = "billede1";
//         document.getElementById("billede4").id = "billede2";
//         document.getElementById("billede5").id = "billede6";
//         document.getElementById("billede7").id = "billede9";

//     }
// })

// document.getElementById("anbefalet").addEventListener("click", function () {

//     if (document.getElementById("pops").clicked == true) {
//         document.getElementById("billede3").id = "billede7";
//         document.getElementById("billede7").id = "billede3";
//         document.getElementById("billede9").id = "billede1";
//         document.getElementById("billede1").id = "billede9";
//         document.getElementById("billede8").id = "billede2";
//         document.getElementById("billede2").id = "billede8";
//         document.getElementById("billede6").id = "billede4";
//         document.getElementById("billede4").id = "billede4";
//     } else {
//         document.getElementById("billede7").id = "billede3";
//         document.getElementById("billede3").id = "billede7";
//         document.getElementById("billede9").id = "billede1";
//         document.getElementById("billede1").id = "billede9";
//         document.getElementById("billede6").id = "billede2";
//         document.getElementById("billede2").id = "billede6";
//         document.getElementById("billede8").id = "billede4";
//         document.getElementById("billede4").id = "billede8";
//     }
// })