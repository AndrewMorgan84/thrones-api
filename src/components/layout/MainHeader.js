import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>THRONES API</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/houses" activeClassName={classes.active}>
              Houses
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" activeClassName={classes.active}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" activeClassName={classes.active}>
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
