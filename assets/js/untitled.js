window.addEventListener("load", function () {
  // Get the loading screen and the image
  const loadingScreen = document.querySelector(".loading-screen");
  const loadingImage = document.querySelector(".loading-image");
  const body = document.querySelector("body");

  // Set a 2-second delay before hiding the loading screen
  setTimeout(function() {
    loadingScreen.style.opacity = 0;
    body.classList.add("loaded");
  }, 2000);

  // Add an 'onload' event to the image
  loadingImage.onload = function() {
    loadingImage.style.opacity = 1; // Make the image visible
    // Add any additional code to start the animation or take other actions
  };
});
