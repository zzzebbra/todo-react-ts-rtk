import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { add } from '../../store/reducers/todosSlice';

import { v4 as uuidv4 } from 'uuid';

type Props = {
  closeModal: () => void
}

const AddTaskForm = ({closeModal}: Props) => {

  const dispatch = useAppDispatch();

  const [newTodoName, setNewTodoName] = useState('');

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    const newValue = evt.target.value;
    setNewTodoName(newValue);
  }

  const addTodo = ((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let newTodo = {
      name: newTodoName,
      isCompleted: false,
      id: uuidv4(),
    };

    dispatch(add(newTodo));
    setNewTodoName('');
    closeModal();
  });

  return (
    <div className='add-task'>
      <p className="add-task__title">Adding a new task</p>
      <form action="" className="add-task__form" onSubmit={(evt) => addTodo(evt)}>
        <label htmlFor="task" className='add-task__label'>Please provide a new task below:</label>
        <input id='task' type="text" className='add-task__input' onChange={handleChange} value={newTodoName} />
        <button type="submit" className='add-task__submit'>Add task</button>
      </form>
    </div>
  )
}

export default AddTaskForm