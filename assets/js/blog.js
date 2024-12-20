// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");
// TODO: Create a function that builds an element and appends it to the DOM
function createArticle(blog) {
  const articleEl = document.createElement("article");
  articleEl.setAttribute("class", "card");
  const h2El = document.createElement("h2");
  h2El.textContent = blog.formTitle;
  const pEl = document.createElement("p");
  pEl.textContent = "posted by: " + blog.userName;
  const blockEl = document.createElement("blockquote");
  blockEl.textContent = blog.formContent;

  articleEl.appendChild(h2El);
  articleEl.appendChild(pEl);
  articleEl.appendChild(blockEl);

  mainEl.appendChild(articleEl);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPost() {
  const pEl = document.createElement("p");
  pEl.textContent = "No Blog posts yet...";
  mainEl.appendChild(pEl);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogData = JSON.parse(localStorage.getItem("blogPost")) || [];
  if (blogData.length > 0) {
    for (let i = 0; i < blogData.length; i++) {
      createArticle(blogData[i]);
    }
  } else {
    noPost();
  }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener('click', function() {
    window.location.href = "index.html"
})