'use strict'


document.getElementById("pops").addEventListener("click", function () {
    if (document.getElementById("anbefalet").clicked = false) {
        document.getElementById("billede7").id = "billede3";
        document.getElementById("billede3").id = "billede7";
        document.getElementById("billede8").id = "billede4";
        document.getElementById("billede4").id = "billede8";
        document.getElementById("billede6").id = "billede1";
        document.getElementById("billede1").id = "billede6";
        document.getElementById("billede5").id = "billede2";
        document.getElementById("billede2").id = "billede5";
    } else {
        document.getElementById("billede1").id = "billede9";
        document.getElementById("billede2").id = "billede1";
        document.getElementById("billede4").id = "billede2";
        document.getElementById("billede5").id = "billede6";
        document.getElementById("billede7").id = "billede9";

    }
})

document.getElementById("anbefalet").addEventListener("click", function () {

    if (document.getElementById("pops").clicked == true) {
        document.getElementById("billede3").id = "billede7";
        document.getElementById("billede7").id = "billede3";
        document.getElementById("billede9").id = "billede1";
        document.getElementById("billede1").id = "billede9";
        document.getElementById("billede8").id = "billede2";
        document.getElementById("billede2").id = "billede8";
        document.getElementById("billede6").id = "billede4";
        document.getElementById("billede4").id = "billede4";
    } else {
        document.getElementById("billede7").id = "billede3";
        document.getElementById("billede3").id = "billede7";
        document.getElementById("billede9").id = "billede1";
        document.getElementById("billede1").id = "billede9";
        document.getElementById("billede6").id = "billede2";
        document.getElementById("billede2").id = "billede6";
        document.getElementById("billede8").id = "billede4";
        document.getElementById("billede4").id = "billede8";
    }
})
