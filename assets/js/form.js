// // TODO: Create a variable that selects the form element
const newPost = document.querySelector(".form");

// // TODO:.

//If the form is submitted with missing data, display an error message to the user.
function displayError(message) {
  const error = document.createElement("p");
  error.classList.add("error");
  error.textContent = message;
  document.querySelector(".form").appendChild(error);
}

function removeErrorMessages() {
  const existingErrors = document.querySelectorAll(".error-message");
  existingErrors.forEach((error) => error.remove());
}
// Create a function that handles the form submission
function getFormData(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  if (!username || !title || !content) {
    removeErrorMessages();
    displayError("Please complete the form.");
    return;
  }

  const formData = {
    username: username,
    title: title,
    content: content,
  };
  //rab the form data and store it in local storage
  //   console.log(formData);
  storeLocalStorage(formData);
  //Then redirect to the blog page using the `redirectPage` function
  // window.location.href = "blog.html";
  redirectPage("blog.html");
}

// console.log(newPost);

// // TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
newPost.addEventListener("submit", getFormData);

loadTheme();
