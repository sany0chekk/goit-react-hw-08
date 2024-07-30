import { MdClose } from "react-icons/md";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import ThemeChanger from "./ThemeChanger";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";

const MobileMenu = ({ isOpen, handleClose }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <div
      className={`transition transform ${
        isOpen
          ? "opacity-100 visible -translate-y-0 pointer-events-auto"
          : "opacity-0 invisible -translate-y-10 pointer-events-none"
      } absolute z-50 w-full h-full top-0 left-0 bg-zinc-200 dark:bg-neutral-800 p-4 flex md:hidden flex-col items-center gap-32`}
    >
      <div className="w-full flex items-center justify-between">
        <ThemeChanger />
        <button onClick={handleClose}>
          <MdClose size="25" />
        </button>
      </div>
      {isLoggedIn ? (
        <Navigation handleCloseMenu={handleClose} />
      ) : (
        <p className="text-center text-xl opacity-40 font-semibold">
          Please log in or create an account to access the menu.
        </p>
      )}
      <div className="mt-auto">
        <AuthNav handleCloseMenu={handleClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
