import React, { useEffect, useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import HttpController from '../../controllers/http_controller';
import { BASE_URL } from '../../controllers/const';
import style from "./tasklist.module.css"

export default function TaskList({ url }) {
  const controller = new HttpController(BASE_URL);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      await controller.getData(url).then(response=>setData(response));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTaskDelete = async (id) => {
    try {
      await controller.deleteData(`delete/`, { Id: id });
      fetchData();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className={style.container}>
      {data?.length ? (
        <div>
          {data.map((elem, i) => (
            <TaskItem
              key={i}
              title={elem.title}
              description={elem.description}
              status={elem.status}
              id={elem.Id}
              onDelete={() => handleTaskDelete(elem.Id)}
              fetchData={fetchData}
            />
          ))}
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
