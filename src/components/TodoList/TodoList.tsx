import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { useAppSelector } from '../../hooks/hooks';

function TodoList() {
  const todoList = useAppSelector((state) => state.todos);


  return (
    <div className='todo-list'>
      {
        todoList.map(({ id, name, isCompleted }) => {
          return (
            <TodoItem key={id} name={name} isCompleted={isCompleted} id={id} />
          )
        })
      }
    </div>
  )
}

export default TodoList