var modal = document.getElementById("regModal");
var btn = document.getElementById("regBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById("signModal");
var btn = document.getElementById("signBtn");
var span = document.getElementsByClassName("close1")[0];
btn.onclick = function() {
    modal1.style.display = "block";
}
span.onclick = function(event) {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}