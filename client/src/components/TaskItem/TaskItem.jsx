// import React from 'react';
// import style from './taskitem.module.css';

// export default function TaskItem({ title, description, status, id, onDelete }) {
//   return (
//     <div className={style.container}>
//       <div className={style.text_container}>
//         <div className={style.title_container}>
//           <p className={style.title}>{title}</p>
//         </div>
//         <div className={style.description_container}>
//           <p className={style.description}>{description}</p>
//         </div>
//       </div>
//       <div className={style.status}>
//         {status}
//         <button>Изменить</button>
//         <button onClick={() => onDelete()}>Удалить</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import style from './taskitem.module.css';
import HttpController from '../../controllers/http_controller';
import {BASE_URL} from "../../controllers/const"

export default function TaskItem({ title, description, status, id, onDelete, fetchData }) {
  const controller = new HttpController(BASE_URL);

  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedStatus, setEditedStatus] = useState(status);

  const handleEdit = async () => {
    try {
      await controller.updateData(`update`, { Id: id, title: editedTitle, description: editedDescription, status: editedStatus });
      setEditing(false);
      fetchData()
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.text_container}>
        {editing ? (
           <div>
           <div className={style.title_container}>
           <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
           </div>
           <div className={style.description_container}>
           <textarea value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
           </div>
           <div >
           <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
            <option value="Wait">Wait</option>
            <option value="In process">In Process</option>
            <option value="Done">Done</option>
          </select>
           </div>
         </div>
        ) : (
          <div>
            <div className={style.title_container}>
              <p className={style.title}>{title}</p>
            </div>
            <div className={style.description_container}>
              <p className={style.description}>{description}</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.status}>
        {status}
        <button onClick={() => setEditing(!editing)}>{editing ? 'Отменить' : 'Изменить'}</button>
        <button onClick={() => onDelete()}>Удалить</button>
        {editing && <button onClick={handleEdit}>Сохранить</button>}
      </div>
    </div>
  );
}
