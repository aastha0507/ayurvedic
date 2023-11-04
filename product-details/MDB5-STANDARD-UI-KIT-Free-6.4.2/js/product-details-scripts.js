const imgDisplay = document.getElementById("display-img");
const imgOptions = document.querySelectorAll(".product-imgs");

imgOptions.forEach((img) => {
  img.addEventListener("click", () => {
    imgDisplay.src = img.getAttribute("src");
  });
});

// function displayThisImg(event) {
//   console.log(event);
//   console.log("abcd");
// }
