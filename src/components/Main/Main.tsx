import React from 'react'
import TodoList from '../TodoList/TodoList';
import AddButton from '../AddButton/AddButton';

type Props = {
  openModal: () => void
}

const Main = ({openModal}: Props) => {
  return (
    <section className='main'>
      <TodoList />
      <AddButton openModal={openModal} />
    </section>
  )
}

export default Main