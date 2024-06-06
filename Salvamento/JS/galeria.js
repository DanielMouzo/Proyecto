document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("img01");
    var images = document.querySelectorAll(".galeriaOrden img");

    images.forEach(function(img) {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() { 
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
