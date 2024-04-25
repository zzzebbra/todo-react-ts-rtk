import React from 'react';
import deleteIcon from '../../images/delete.svg';
import { remove } from '../../store/reducers/todosSlice';
import { TTodoItem } from '../../types/app';
import { useAppDispatch } from '../../hooks/hooks';

type Props = {
  id: TTodoItem['id'];
}

function DeleteButton({id}: Props) {

  const dispatch = useAppDispatch();

  const deleteTodo = () => {
    dispatch(remove(id))
  };

  return (
    <button className='delete-button' onClick={deleteTodo}>
      <img src={deleteIcon} alt="delete icon" />
    </button>
  )
}

export default DeleteButton