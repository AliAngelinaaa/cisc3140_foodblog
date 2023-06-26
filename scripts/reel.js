var mainImage = document.getElementById("main-image");
    var thumbnails = document.getElementsByClassName("thumbnail");
  
    if (mainImage && thumbnails.length > 0) {
      var images = ["images/bd_chomchom.jpg", "images/bingsu.jpg", "images/fr_creme.jpg"]; // List of image URLs
  
      // Set the first image as the main image
      mainImage.src = images[0];
  
      // Add click event listeners to thumbnails
      for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function() {
          // Remove the 'selected' class from all thumbnails
          for (var j = 0; j < thumbnails.length; j++) {
            thumbnails[j].classList.remove("selected");
          }
  
          // Set the clicked thumbnail as the main image
          mainImage.src = this.src;
  
          // Add the 'selected' class to the clicked thumbnail
          this.classList.add("selected");
        });
      }
    }
    function resetSelectedThumbnails() {
        for (var i = 0; i < thumbnails.length; i++) {
          thumbnails[i].classList.remove("selected");
        }
      }
      