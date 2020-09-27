let btn = document.querySelector(".button");

function firstFunction(e, name) {
    btn.innerHTML = name
}



btn.addEventListener("click",  function(e) {
    firstFunction(e, "Auburn")
});
btn.addEventListener("mouseover", function() {
    btn.style.backgroundColor ="aqua"; 
    setTimeout(function() {
        btn.style.backgroundColor ="tomato";
    }, 5000);
}, false);

