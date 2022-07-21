import React, { Fragment } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const todos = [
  { text: 'Cocinar', done: true },
  { text: 'Estudiar', done: false },
  { text: 'llorar con la llorona', done: false }
]

function App () {
  return (
    <main className='w-full h-screen bg-[url("https://images.pexels.com/photos/4150119/pexels-photo-4150119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover'>
      <h1 className='py-7 text-5xl font-bold text-gray-200'>My to-do's</h1>
      <TodoCounter />
      <section className='w-4/5 m-auto'>
        <TodoSearch />
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo.text} done={todo.done} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </section>
    </main>
  )
}

export default App
