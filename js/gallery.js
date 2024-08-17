// Acticates the image gallery
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on the click
function activateGallery() {
  // alert("Hello, from the gallery file!");
  // let thumbnails = document.querySelector("#gallery-thumbs").
  // querySelectorAll("img");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
  let mainImage = document.querySelector("#gallery-photo img");
  // Image info to be updated
  let galleryInfo = document.querySelector("#gallery-info");
  let title = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");


  thumbnails.forEach(function(thumbnail) {
    // Preload large images
    let newImageSrc = thumbnail.dataset.largeVersion;
    let largeVersion = new Image();
    largeVersion.src = newImageSrc;
    thumbnail.addEventListener("click", function() {
      // code to set clicked image as main image
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);

      // change which image is current
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // update image info
      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}