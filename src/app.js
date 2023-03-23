function getPageFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let page = urlParams.get("page");

  return page;
}

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

let loadLibrary = () => {
  document.getElementById("");
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
