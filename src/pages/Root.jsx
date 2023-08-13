import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <div className={classes["root-layout"]}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
