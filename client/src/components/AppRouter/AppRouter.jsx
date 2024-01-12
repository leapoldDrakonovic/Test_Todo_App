import React from 'react'
import {Route, Routes} from 'react-router-dom'
import TaskList from '../TaskList/TaskList'

export default function AppRouter() {

  const routes = [
    { path: '/all', url: 'all' },
    { path: '/done', url: 'done' },
    { path: '/inprocess', url: 'inprocess' },
    { path: '/wait', url: 'wait' },
    { path: '*', url: 'all' },
  ];

  return (
    <Routes>
    {routes.map(({ path, url }) => (
      <Route key={url} path={path} element={<TaskList key={url} url={url} />} exact />
    ))}
  </Routes>
  )
}

