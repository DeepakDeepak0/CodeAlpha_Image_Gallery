const Container = document.querySelector(".container");
const GalleryOverlay = document.querySelector(".galleryOverlay");
const ImgBox = document.querySelector(".imgBox");
const Img = document.querySelector(".imgBox img");
const Close = document.querySelector(".imgBox span");

Container.addEventListener("click", (event) => {
  const imagePath = event.target.src;

  if (imagePath != undefined) {
    GalleryOverlay.classList.add("galleryOverlayShow");
    ImgBox.classList.add("imgBoxShow");
    Img.src = imagePath;
  }
});

Close.addEventListener("click", () => {
  GalleryOverlay.classList.remove("galleryOverlayShow");
  ImgBox.classList.remove("imgBoxShow");
});
GalleryOverlay.addEventListener("click", () => {
  GalleryOverlay.classList.remove("galleryOverlayShow");
  ImgBox.classList.remove("imgBoxShow");
});
