import React,{useEffect} from "react";
import { NavLink ,Link} from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const heading = document.querySelector(".header h1");
    const scrollTop = window.scrollY;
    if (scrollTop > 20) {
      heading.style.fontSize = "0px";
    } else {
      heading.style.fontSize = "2em";
    }
  };

  const activeStyle = {
    textDecoration:'underline dotted 3px',
    textUnderlineOffset:'4px'
  }

  return (
    <header className={styles.header + " header"}>
      <h1 className={styles.header__heading}> <Link to="/">Reiignmaka</Link></h1>
      <ul className={styles.linksContainer}>
        <li>
          <NavLink style={({isActive})=> isActive ? activeStyle : undefined} to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink style={({isActive})=> isActive ? activeStyle : undefined}  to="/video">Video</NavLink>
        </li>
        <li>
          <NavLink to="/">Shop</NavLink>
        </li>
      </ul>
    </header>
  );
}
