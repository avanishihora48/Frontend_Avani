function addTodo() {
  const todoInput = document.getElementById('todoInput')
  const todoText = todoInput.value.trim()

  if (todoText) {
    const newTodo = document.createElement('li')
    newTodo.textContent = todoText
    document.getElementById('todoList').appendChild(newTodo)

    document.cookie = 'todos=' + todoText + '; path=/;'
  }

  todoInput.value = ''
}

document.getElementById('addButton').addEventListener('click', addTodo)
