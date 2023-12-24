import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={style.container}>
      <div>
        <Link to="/home">
        <button className={style.button}>Home</button>
        </Link>
       
        <Link to="/create">
            <button className={style.button}>Create</button>
        </Link>

        <Link to="/about">
            <button className={style.button}>About</button>
        </Link>

        <Link to="/">
            <button className={style.button}>Logout</button>
        </Link>
       
      </div>
      <div>
        <input className={style.input} type="text" placeholder="Search" />
        <button className={style.button}>Search</button>
      </div>
    </nav>
  );        
};

export default Navbar;
