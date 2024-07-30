import Container from "./Container";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import ThemeChanger from "./ThemeChanger";
import { CiMenuFries } from "react-icons/ci";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const isMobile = () => window.innerWidth >= 768;
  const handleCloseMenu = () => {
    if (isMobile()) return;
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <Container css="flex items-center justify-between gap-4">
          <p className="font-bold text-lg">
            <span className="text-teal-500">E</span>-Contacts
          </p>
          <div className="hidden md:block">
            <Navigation />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <AuthNav />
            <ThemeChanger />
          </div>
          <div className="block md:hidden">
            <button onClick={handleOpenMenu}>
              <CiMenuFries size="25" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu isOpen={isMenuOpen} handleClose={handleCloseMenu} />
    </>
  );
};

export default AppBar;
