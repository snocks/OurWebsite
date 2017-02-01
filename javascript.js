// Get the modal
var modal = document.getElementById('muhamed');

// Get the button that opens the modal
var btn = document.getElementById("muhamedBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";

      var elem = document.getElementById("myBar");   
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 90) {
          clearInterval(id);
        } else {
          width++; 
          elem.style.width = width + '%'; 
          document.getElementById("label").innerHTML = width * 1  + '%';
        }
      }
      var elem1 = document.getElementById("myBar1");   
      var width1 = 0;
      var id = setInterval(frame1, 10);
      function frame1() {
        if (width1 >= 90) {
          clearInterval(id);
        } else {
          width1++; 
          elem1.style.width1 = width1 + '%'; 
          document.getElementById("label1").innerHTML = width1 * 1  + '%';
        }
      }

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
