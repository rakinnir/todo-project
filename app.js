// declaring variables
const form = document.querySelector(".add")
const list = document.querySelector(".todos")
const trashes = document.querySelectorAll(".delete")
const search = document.querySelector(".search input")

// adding new task
form.addEventListener("submit", (todo) => {
  todo.preventDefault()
  let newTodo = form.add.value
  let newList = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${newTodo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`

  if (newTodo.trim()) {
    list.innerHTML += newList
    form.reset()
  }
})

// triggering delete button
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove()
  }
})

// filtered callback function
const toFiltered = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"))

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"))
}

// search
search.addEventListener("keyup", (e) => {
  let term = search.value.toLowerCase()
  toFiltered(term)
})
