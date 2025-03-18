import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
