const images = document.querySelectorAll(".image");

images.forEach((image) => {
  const nameDisplay = image.querySelector(".image-name");
  const imageElement = image.querySelector("img");

  //getting the name of the image from alt attribute
  const imageName = imageElement.getAttribute("alt");
  //displaying the image name
  nameDisplay.textContent = imageName;

  image.addEventListener("mouseenter", () => {
    nameDisplay.style.opacity = 1;
  });

  image.addEventListener("mouseleave", () => {
    nameDisplay.style.opacity = 0;
  });
});
