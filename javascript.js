// Get the modal
var modal0 = document.getElementById('sameh');

// Get the button that opens the modal
var btn = document.getElementById("samehBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal0.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal0.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal0) {
        modal0.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('muhamed');

// Get the button that opens the modal
var btn = document.getElementById("muhamedBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById('alaa');

// Get the button that opens the modal
var btn = document.getElementById("alaaBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

// Get the modal
var modal2 = document.getElementById('zahra');

// Get the button that opens the modal
var btn = document.getElementById("zahraBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}