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

// LOAD TO BOOK
let loadBooks = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let image = document.getElementById("image");
      let title = document.getElementById("title");
      let author = document.getElementById("author");
      let subject = document.getElementById("subject");
      let bookLibrary = document.getElementById("book-library");
      let searchResult = document.getElementById("search-result");
      let placeholderLibrary = document.getElementById("placeholder-library");
      let placeholderResult = document.getElementById("placeholder-result");

      image.src = data.books[0].image;
      title.innerText = data.books[0].title;
      author.innerText = data.books[0].authors;
      // subject.innerText = data.books[0].subjects;

      for (let i = 1; i <= data.books.length; i++) {
        bookLibrary.innerHTML += placeholderLibrary.innerHTML;
        // searchResult.innerHTML += placeholderResult.innerHTML;
        image.src = data.books[i].image;
        title.innerText = data.books[i].title;
        author.innerText = data.books[i].authors;
        // subject.innerText = data.books[i].subjects;
      }
    });
};

// LOAD TO INDEX HTML
let loadSearch = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let image = document.getElementById("image");
      let title = document.getElementById("title");
      let author = document.getElementById("author");
      let subject = document.getElementById("subject");
      let bookLibrary = document.getElementById("book-library");
      let searchResult = document.getElementById("search-result");
      let placeholderLibrary = document.getElementById("placeholder-library");
      let placeholderResult = document.getElementById("placeholder-result");

      image.src = data.books[0].image;
      title.innerText = data.books[0].title;
      author.innerText = data.books[0].authors;
      subject.innerText = data.books[0].subjects;

      for (let i = 1; i <= data.books.length; i++) {
        searchResult.innerHTML += placeholderResult.innerHTML;
        image.src = data.books[i].image;
        title.innerText = data.books[i].title;
        author.innerText = data.books[i].authors;
        subject.innerText = data.books[i].subjects;
      }
    });
};

// SEARCH BOOK
let searchBook = () => {
  let div = getElementByTagName("div");
  for (let i = 0; i < div.length; i++) [0];
  if (div) {
  }
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
