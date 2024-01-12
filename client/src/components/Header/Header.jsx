import React, {useState} from 'react'
import style from './header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header({openModal}) {

  const [active, setActive] = useState(1);

  return (
    <header className={style.container}>
      <div className={style.logo_container}>
        <h3>ToDo</h3>
      </div>
      <div  className={style.navigation_container}>
        <nav className={style.navigation}>
          <ul className={style.navigation_list}>
            <NavLink to={'/'} className={active === 1 ? style.navigation_item_active : style.navigation_item} onClick={()=>setActive(1)}>All</NavLink>
            <NavLink to={'/wait'} className={active === 2 ? style.navigation_item_active : style.navigation_item} onClick={()=>setActive(2)}>Wait</NavLink>
            <NavLink to={'/inprocess'} className={active === 3 ? style.navigation_item_active : style.navigation_item} onClick={()=>setActive(3)}>In Progress</NavLink>
            <NavLink to={'/done'} className={active === 4 ? style.navigation_item_active : style.navigation_item} onClick={()=>setActive(4)}>Done</NavLink>
          </ul>
        </nav>
      </div>
      <div className={style.btn_container}>
        <button className={style.btn} onClick={openModal}>+ Create</button>
      </div>
    </header>
  )
}
