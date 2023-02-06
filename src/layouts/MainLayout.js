import {Outlet} from "react-router";
import Menu from "../components/Menu";

const MainLayout = () => {
  return (
      <>
        <Menu />

        <Outlet />
      </>
  );
};

export {MainLayout};