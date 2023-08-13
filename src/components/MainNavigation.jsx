import { useLocation } from "react-router";
import classes from "./MainNavigation.module.css";
const menu = ["Your Info", "Select Plan", "Add-Ons", "Summary"];
const getActivePath = (pathName) => {
  if (pathName === "/") return 0;
  if (pathName === "/select-plan") return 1;
  if (pathName === "/add-ons") return 2;
  if (pathName === "/summary") return 3;
};
const MainNavigation = () => {
  const location = useLocation();

  return (
    <nav className={classes.nav}>
      <ul>
        {menu.map((item, i) => (
          <li key={item}>
            <div
              className={`${classes["nav-link"]} ${
                getActivePath(location.pathname) === i ? classes.active : ""
              }`}
            >
              <span className={classes.num}>{i + 1}</span>
              <div>
                <span className={classes.step}>Step {i + 1}</span>
                <span className={classes["step-name"]}>{item}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNavigation;
