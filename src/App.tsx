import React, { useState } from 'react';

import './App.css';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>ToDo list</h1>
      </header>
      <Main openModal={openModal} />
      <Modal isOpen={isOpen} closeModal={closeModal}><AddTaskForm closeModal={closeModal} /></Modal>
    </div>
  );
}

export default App;
