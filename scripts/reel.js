var mainImage = document.getElementById("main-image");
var thumbnails = document.getElementsByClassName("thumbnail");
var currentIndex = 0;

if (mainImage && thumbnails.length > 0) {
  var images = ["images/bd_chomchom.jpg", "images/bingsu.jpg", "images/fr_creme.jpg", "images/jp_cheese.jpg", "images/chococake.jpg","images/tiramisu.jpeg", "images/Strawberry_Shortcake_Tiramisu.jpg", "images/tres_leches_cake.jpg", "images/flan.jpg", "images/mochi_icecream.jpg"]; // List of image URLs

  // Set the first image as the main image
  mainImage.src = images[currentIndex];
  thumbnails[currentIndex].classList.add("selected");

  // Function to change the main image
  function changeImage() {
    thumbnails[currentIndex].classList.remove("selected");
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
    thumbnails[currentIndex].classList.add("selected");
  }

  // Set interval to change images every half second
  setInterval(changeImage, 500);

  // Add click event listeners to thumbnails
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      thumbnails[currentIndex].classList.remove("selected");
      currentIndex = Array.from(thumbnails).indexOf(this);
      mainImage.src = images[currentIndex];
      thumbnails[currentIndex].classList.add("selected");
    });
  }
}
