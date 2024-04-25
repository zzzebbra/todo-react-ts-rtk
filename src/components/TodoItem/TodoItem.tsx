import React from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import MarkComplete from '../MarkComplete/MarkComplete';
import { TTodoItem } from '../../types/app';

function TodoItem({name, isCompleted, id}: TTodoItem) {
  return (
    <div className={ isCompleted ? 'todo-item todo-item_complete' : 'todo-item'}>
      <p className='todo-item__name'>{name}</p>
      <div className="todo-item__buttons">
        <MarkComplete id={id} />
        <DeleteButton id={id} />
      </div>
    </div>
  )
}

export default TodoItem