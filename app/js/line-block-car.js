var btnLile = document.querySelectorAll(".car");
var falist = document.querySelector(".fa-th-list");
var fath = document.querySelector(".fa-th");
document.getElementById('Line').onclick = function() {
    for(var i=0; i<btnLile.length;i++) {
        btnLile[i].classList.remove("col-10","col-sm-6","col-xl-4");
        btnLile[i].classList.add("carline");
        falist.style.color="red";
        fath.style.color="black";
    }
}
document.getElementById('Block').onclick = function() {
    for(var i=0; i<btnLile.length;i++) {
        btnLile[i].classList.remove("carline");
        btnLile[i].classList.add("col-10","col-sm-6","col-xl-4");
        falist.style.color="black";
        fath.style.color="red";
    }
} 