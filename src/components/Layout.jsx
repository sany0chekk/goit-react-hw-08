import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container";

const Layout = () => {
  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto p-4 flex flex-col gap-4 min-h-screen">
      <AppBar />
      <Container css="flex-grow h-full relative">
        <main className="h-full">
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default Layout;
