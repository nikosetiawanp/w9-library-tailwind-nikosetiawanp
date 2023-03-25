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
let loadBooks = (currentPage = 1) => {
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

      // let currentPage = getPageFromUrl() || 1;
      let startIndex = (currentPage - 1) * 10;
      let endIndex = Math.min(startIndex + 10, data.books.length);
      console.log(startIndex, endIndex);
      bookLibrary.innerHTML = "";
      for (let i = startIndex; i < endIndex; i++) {
        bookLibrary.innerHTML += `
        <div
        class="w-full text-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 md:w-max-[50%]"
      >
        <img id="image" class="h-72 mx-auto" src="${data.books[i].image}" alt="image" />
        <h5
          id="title"
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >${data.books[i].title}</h5>
        <p
          id="author"
          class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        >${data.books[i].authors}</p>
      </div>
      
        `;
      }
    });
};

// LOAD TO INDEX HTML
// let loadSearch = async () => {
//   fetch("data.json")
//     .then((response) => response.json())
//     .then((data) => {
//       let image = document.getElementById("image");
//       let title = document.getElementById("title");
//       let author = document.getElementById("author");
//       let subject = document.getElementById("subject");
//       let bookLibrary = document.getElementById("book-library");
//       let searchResult = document.getElementById("search-result");
//       let placeholderLibrary = document.getElementById("placeholder-library");
//       let placeholderResult = document.getElementById("placeholder-result");

//       image.src = data.books[0].image;
//       title.innerText = data.books[0].title;
//       author.innerText = data.books[0].authors;
//       subject.innerText = data.books[0].subjects;

//       for (let i = 1; i < data.books.length; i++) {
//         searchResult.innerHTML += placeholderResult.innerHTML;
//         image.src = data.books[i].image;
//         title.innerText = data.books[i].title;
//         author.innerText = data.books[i].authors;
//         subject.innerText = data.books[i].subjects;
//       }
//     });
// };

// SEARCH BOOK

let searchBook = async () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let image = document.getElementById("image");
      let title = document.getElementById("title");
      let author = document.getElementById("author");
      let subject = document.getElementById("subject");
      let submit = document.getElementById("submit");
      let search = document.getElementById("search").value.toLowerCase();
      let searchResult = document.getElementById("search-result");
      let placeholderResult = document.getElementById("placeholder-result");
      let bookDetailContainer = document.querySelectorAll(
        "book-detail-container"
      );

      let filteredBook = data.books.filter((book) => {
        return (
          book.title.toLowerCase().includes(search) ||
          book.authors.toString().toLowerCase().includes(search) ||
          book.subjects.toString().toLowerCase().includes(search)
        );
      });
      console.log(filteredBook);
      if (!search) {
        searchResult.classList.replace("hidden", "flex");
        searchResult.innerHTML = "Please enter keyword";
      } else {
        searchResult.innerHTML = "";
        for (let i = 0; i < filteredBook.length; i++) {
          searchResult.innerHTML += `
  <div
    id="book-detail-container"
    class="w-full flex flex-col md:flex-row justify-start items-center p-4 gap-4 hover:bg-gray-700 hover:cursor-pointer bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img id="image" class="h-36 w-auto rounded-lg" src="${filteredBook[i].image}" alt="image" />
    <div
      class="flex flex-col items-center md:items-start justify-center text-gray-400"
    >
      <h5 id="title" class="mb-2 text-2xl font-bold tracking-tight">${filteredBook[i].title}</h5>
      <h6 class="font-bold flex gap-1">
        Author(s): 
        <p
          id="author"
          class="mb-3 font-normal text-gray-700 dark:text-gray-400"
        >${filteredBook[i].author}</p>
      </h6>
      <p
        id="subject"
        class="mb-3 font-normal text-gray-700 dark:text-gray-400"
      >${filteredBook[i].subjects}</p>
    </div>
  </div>
          `;
        }
        // bookDetailContainer.classList.replace("hidden", "flex");
        searchResult.classList.replace("hidden", "flex");
      }
    });
};

// let searchBook = async () => {
//   let submit = document.getElementById("submit");
//   let search = document.getElementById("search").value;
//   let searchResult = document.getElementById("search-result");
//   let placeholderResult = document.querySelectorAll("#placeholder-result");
//   let bookDetailContainer = document.querySelectorAll("#book-detail-container");

//   if (!search) {
//     searchResult.classList.replace("hidden", "flex");
//     searchResult.innerHTML = "Please enter keyword";
//   } else if (!searchResult.innerHTML.includes(search)) {
//     searchResult.classList.replace("hidden", "flex");
//     searchResult.innerHTML = "Please enter keyword";
//   }
// };

/**
 * To get books data, you should make sure that your function is async function
 * and call `getBooksData` function with await.
 *
 * e.g.
 * async function yourFunction() {
 *      let books = await getBooksData();
 * }
 */
