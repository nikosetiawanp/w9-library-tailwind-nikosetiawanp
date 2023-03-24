function getPageFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let page = urlParams.get("page");

  return page;
}

// GET DATA FROM JSON
async function getBooksData() {
  let response = await fetch("./data.json");
  let json = await response.json();
  return json["books"];
}

// DROP DOWN
let menuButton = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");
let dropDown = document.getElementById("drop-down");
let toggleMobileMenu = () => {
  menuButton.classList.replace("inline-flex", "hidden"),
    closeButton.classList.replace("hidden", "inline-flex"),
    dropDown.classList.replace("hidden", "flex");
};
let closeMobileMenu = () => {
  menuButton.classList.replace("hidden", "inline-flex");
  closeButton.classList.replace("inline-flex", "hidden");
  dropDown.classList.replace("flex", "hidden");
};

// DISPLAY BOOK TO PAGE

let loadBook = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let image = document.getElementById("image");
      let title = document.getElementById("title");
      let author = document.getElementById("author");
      let bookLibrary = document.getElementById("book-library");
      let placeholderLibrary = document.getElementById("placeholder-library");

      image.src = data.books[0].image;
      title.innerText = data.books[0].title;
      author.innerText = data.books[0].authors;

      for (let i = 1; i <= data.books.length; i++) {
        bookLibrary.innerHTML += placeholderLibrary.innerHTML;
        image.src = data.books[i].image;
        title.innerText = data.books[i].title;
        author.innerText = data.books[i].authors;
      }
    });
};

// SEARCH BOOK
let searchBook = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let search = document.getElementById("search").value;
      let submit = document.getElementById("submit");
      let result = document.getElementById("search-result");
      let title = data.books[i].title;

      console.log(title);

      if (!search) {
        console.log("The search bar is still empty!");
        result.classList.replace("hidden", "flex");
        result.innerHTML = "Your search is still empty";
      }
    });
};

/**
 * To get books data, you should make sure that your function is async function
 * and call `getBooksData` function with await.
 *
 * e.g.
 * async function yourFunction() {
 *      let books = await getBooksData();
 * }
 */
