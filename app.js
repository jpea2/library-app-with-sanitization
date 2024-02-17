const shelf = document.querySelector('.shelf')
const myLibrary = [];
const addBookModal = document.querySelector("#addBookModal")
const closeModal = document.querySelector("#closeModal")
const dialog = document.querySelector(".dialog")

document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault()
});

addBookModal.addEventListener("click", () => {
    dialog.showModal();
  });

closeModal.addEventListener("click", () => {
    dialog.close();
    title.value = '';
});

function Book(title) {
    this.title = title;
}

function AddBook(title) {
    const newBook = new Book(title);
    myLibrary.push(newBook)
}

function addToBookShelf() {
    title = document.querySelector("#title");
    AddBook(title.value);
    renderLibrary();
    console.log([myLibrary])
    dialog.close();
    title.value = '';
}

AddBook("Harry Potter");
AddBook("Lord of the Rings");

function renderLibrary() {
  let d = ""
  for(let i = 0; i < myLibrary.length; i++) {
    d += `
        <div class="card">
            <p>${myLibrary[i].title}</p>
            <button onclick="removeBook(${[i]})">Remove</button>
        </div>
    `
    shelf.setHTML(d)
  }
}   

console.log(myLibrary)

function removeBook(x) {
    myLibrary.splice(x, 1);
    console.log(myLibrary);
    renderLibrary();
}   

renderLibrary();