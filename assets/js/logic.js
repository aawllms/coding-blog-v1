// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// const themeSwitcher = document.querySelector("#toggle");
// const container = document.querySelector(".container");

// let mode = "light";

// themeSwitcher.addEventListener("click", function () {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//     themeSwitcher.textContent = "☀️";
//   } else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//     themeSwitcher.textContent = "🌒";
//   }
// });
const themeSwitcher = document.querySelector("#toggle"); // Assuming your button has the class 'toggle'
const container = document.querySelector(".container");

let mode = "light";

// Set initial theme based on the mode
document.body.classList.add(mode); // Add initial theme class (e.g., "light")

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
    container.setAttribute("class", "container dark"); // Set the container class to "light"
    themeSwitcher.textContent = "🌒"; // Change the icon to the sun
  } else {
    mode = "light";
    container.setAttribute("class", "container light"); // Set the container class to "dark"
    themeSwitcher.textContent = "☀️"; // Change the icon to the moon
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// function readLocalStorage() {
//   const blogData = JSON.parse(localStorage.getItem("blogPost")) || [];
//   blogData.push(formData);
// }
// // TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// function storeLocalStorage() {
//   localStorage.setItem("blogPost", JSON.stringify(blogData));
//   //Then redirect to the blog page using the `redirectPage` function
//   window.location.href = "blog.html";
// }
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
