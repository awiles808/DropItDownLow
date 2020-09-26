let btn = document.querySelector(".button");

function firstFunction(e, name) {
    btn.innerHTML = name
}



btn.addEventListener("click", function(e) {
    firstFunction(e, "Auburn")
});
btn.addEventListener("click", function() {
    btn.style.backgroundColor ="aqua"; 
});
