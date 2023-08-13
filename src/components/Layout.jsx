import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div
      className={
        props.center
          ? `${classes.container} ${classes.center}`
          : classes.container
      }
    >
      {props.children}
    </div>
  );
};
export default Layout;
