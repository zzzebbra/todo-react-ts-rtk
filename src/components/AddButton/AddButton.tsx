import React from 'react';
import addIcon from '../../images/add.svg';

type Props = {
  openModal: () => void
}

function AddButton({ openModal }: Props) {
  
  return (
    <button className='add-button' onClick={openModal}>
      <img src={addIcon} alt="plus icon" />
    </button>
  )
}

export default AddButton