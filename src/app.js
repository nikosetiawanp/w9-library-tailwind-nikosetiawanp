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

      title.innerText = data.books[0].title;
      author.innerText = data.books[0].authors;
      image.src = data.books[0].image;
      // subject.innerText = data.books[0].subjects;

      for (let i = 1; i <= data.books.length; i++) {
        bookLibrary.innerHTML += placeholderLibrary.innerHTML;
        // searchResult.innerHTML += placeholderResult.innerHTML;
        title.innerText = data.books[i].title;
        author.innerText = data.books[i].authors;
        image.src = data.books[i].image;
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

// let searchBook = () => {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let submit = document.getElementById("submit");
//       let search = document.getElementById("search").value.toLowerCase();
//       let searchResult = document.getElementById("search-result");
//       let placeholderResult = document.querySelectorAll("#placeholder-result");
//       let bookDetailContainer = document.querySelectorAll(
//         "book-detail-container"
//       );

//       if (search === "") {
//         searchResult.classList.replace("flex", "hidden");
//         searchResult.innerHTML = "Please enter keyword";
//       } else if (!searchResult.innerHTML.includes(search)) {
//         searchResult.classList.replace("hidden", "flex");
//         searchResult.innerHTML =
//           "No books found, please try with another keyword";
//       } else if (searchResult.innerHTML.includes(search)) {
//         bookDetailContainer.classList.replace("hidden", "flex");
//         searchResult.classList.replace("hidden", "flex");
//       }
//     });
// };

let searchBook = async () => {
  let submit = document.getElementById("submit");
  let search = document.getElementById("search").value;
  let searchResult = document.getElementById("search-result");
  let placeholderResult = document.querySelectorAll("#placeholder-result");
  let bookDetailContainer = document.querySelectorAll("#book-detail-container");

  if (!search) {
    searchResult.classList.replace("hidden", "flex");
    searchResult.innerHTML = "Please enter keyword";
  } else if (!searchResult.innerHTML.includes(search)) {
    searchResult.classList.replace("hidden", "flex");
    searchResult.innerHTML = "Please enter keyword";
  }
};

let submit = document.getElementById("submit");
let search = document.getElementById("search").value;
let searchResult = document.getElementById("search-result");
let placeholderResult = document.querySelectorAll("#placeholder-result");
let bookDetailContainer = document.querySelectorAll("#book-detail-container");

console.log(bookDetailContainer.length);

/**
 * To get books data, you should make sure that your function is async function
 * and call `getBooksData` function with await.
 *
 * e.g.
 * async function yourFunction() {
 *      let books = await getBooksData();
 * }
 */
