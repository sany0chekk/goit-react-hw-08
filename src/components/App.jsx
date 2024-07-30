import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
