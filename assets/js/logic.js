// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const themeSwitcher = document.querySelector("#toggle"); // Assuming your button has the class 'toggle'
const container = document.querySelector(".container");

let mode = localStorage.getItem("theme") || "light";

// Set initial theme based on the mode
document.body.classList.add(mode);
container.setAttribute("class", `container ${mode}`);
themeSwitcher.textContent = mode === "light" ? "☀️" : "🌒";

themeSwitcher.addEventListener("click", function () {
  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  loadTheme();
});

const loadTheme = function () {
  if (mode === "dark") {
    container.setAttribute("class", "container dark");
    themeSwitcher.textContent = "🌒";
    localStorage.setItem("theme", "dark");
    document.documentElement.style.setProperty("--circle-color", "gray");
  } else {
    container.setAttribute("class", "container light");
    themeSwitcher.textContent = "☀️";
    localStorage.setItem("theme", "light");
    document.documentElement.style.setProperty("--circle-color", "#ffb100");
  }
};

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  return JSON.parse(localStorage.getItem("blogPost")) || [];
}
// // TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(formData) {
  const blogData = readLocalStorage();
  blogData.push(formData);

  localStorage.setItem("blogPost", JSON.stringify(blogData));
}

// localStorage.setItem("blogPost", JSON.stringify(blogData));
//   //Then redirect to the blog page using the `redirectPage` function
//   window.location.href = "blog.html";
// }
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
