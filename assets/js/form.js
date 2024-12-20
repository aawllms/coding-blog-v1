// TODO: Create a variable that selects the form element
const newPost = document.querySelector(".form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function getFormData(event) {
  event.preventDefault();
  const userName = document.querySelector("#username").value;
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  const formData = {
    userName: userName,
    formTitle: title,
    formContent: content,
  };
  console.log(formData);
  const blogData = JSON.parse(localStorage.getItem("blogPost")) || [];
  blogData.push(formData);

  localStorage.setItem("blogPost", JSON.stringify(blogData));
  window.location.href = "blog.html";
}

console.log(newPost);

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
newPost.addEventListener("submit", getFormData);
