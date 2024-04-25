import React from 'react';
import completeIcon from '../../images/done.svg';
import { toggle } from '../../store/reducers/todosSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { TTodoItem } from '../../types/app';

type Props = {
  id: TTodoItem['id'];
}

const MarkComplete = ({id}: Props) => {

  const dispatch = useAppDispatch();
  const toggleSwitch = () => {
    dispatch(toggle(id))
  };

  return (
    <button className='complete-button' onClick={toggleSwitch}>
      <img src={completeIcon} alt="complete mark icon" />
    </button>
  )
}

export default MarkComplete