import { Outlet } from "react-router-dom";
import "../styles/_main.scss";

export const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
