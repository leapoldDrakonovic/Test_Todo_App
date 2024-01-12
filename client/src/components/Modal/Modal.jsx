// Modal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import style from "./modal.module.css"
import HttpController from '../../controllers/http_controller';
import { BASE_URL } from '../../controllers/const';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    display: "flex",
    flexDirection: "column",
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AddTodoModal = ({ isOpen, onRequestClose }) => {
  const controller = new HttpController (BASE_URL)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Wait'); // Default status

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleSubmit2 = () => {
    controller.postData('add', {
        title,
        description,
        status,
      })

    onRequestClose()
    refreshPage()
  }



  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <h2>Add Task</h2>
      <label className={style.label}>
        Title:
        <input className={style.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label className={style.label}>
        Description:
        <textarea className={style.textarea} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label  className={style.label}>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Wait">Wait</option>
          <option value="In process">In Process</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button onClick={handleSubmit2}>Submit</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default AddTodoModal;
