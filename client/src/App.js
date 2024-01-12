import './App.css';
import { Routes, Route} from "react-router"
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter/AppRouter';
import AddTodoModal from "./components/Modal/Modal"
import { useState } from 'react';
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className="App">
      <Header openModal={openModal}/>
      <AppRouter/>
      <AddTodoModal isOpen={isModalOpen} onRequestClose={closeModal}/>
    </div>
  );
}

export default App;
