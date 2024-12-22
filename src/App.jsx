import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react"

function App() {
	
	const [todos, setTodos] = useState([
		"Todo 1",
		"Todo 2",
		"Todo 3",
	])
	
    const [todoValue, setTodoValue] = useState('')

	function persistData(newList) {
		localStorage.setItem('todos', JSON.stringify({ todos: newList }))
	}

	function handleAddTodos(NewTodo) {
		const newTodoList = [...todos, NewTodo]
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleDeleteTodos(todoIndex) {
		const newTodoList = todos.filter((_, index) => index !== todoIndex)
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleEditTodos(todoIndex) {
		const valueToBeEdited = todos[todoIndex]
		setTodoValue(valueToBeEdited)
		handleDeleteTodos(todoIndex)
	}

	useEffect(() => {
		if (!localStorage)
			return
		
		let localTodos = localStorage.getItem('todos')
		if (!localTodos) 
			return
		
		localTodos = JSON.parse(localTodos).todos
		setTodos(localTodos)
		
	}, [])


	return (
		<>
			<TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
			<TodoList todoValue={todoValue} setTodoValue={setTodoValue} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos} todos={todos}/>

		</>
	)
}

export default App
