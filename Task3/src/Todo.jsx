import { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() === '') return

    setTodos(todos.concat({
      id: Date.now(),
      text: newTodo,
      done: false
    }))

    setNewTodo('')
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const completed = todos.filter(t => t.done).length

  return (
    <div>
      <h1>قائمة المهام</h1>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="أضف مهمة جديدة..."
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />

      <button onClick={addTodo}>إضافة</button>

      <p>المكتملة: {completed} / {todos.length}</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                background: todo.done ? '#e8f5e9' : '#fff3e0',
                padding: '8px',
                margin: '4px 0',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo