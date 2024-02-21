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
    // Clear existing content in the shelf
    while (shelf.firstChild) {
        shelf.removeChild(shelf.firstChild);
    }

    for (let i = 0; i < myLibrary.length; i++) {
        // Create elements
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        var titleParagraph = document.createElement("p");
        titleParagraph.textContent = myLibrary[i].title;

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            removeBook(i);
        });

        // Append elements to cardDiv
        cardDiv.appendChild(titleParagraph);
        cardDiv.appendChild(removeButton);

        // Append cardDiv to the shelf
        shelf.appendChild(cardDiv);
    }
}



console.log(myLibrary)

function removeBook(x) {
    myLibrary.splice(x, 1);
    console.log(myLibrary);
    renderLibrary();
}   

renderLibrary();