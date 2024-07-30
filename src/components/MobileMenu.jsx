import { MdClose } from "react-icons/md";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";

const MobileMenu = ({ isOpen, handleClose }) => {
  return (
    <div
      className={`transition transform ${
        isOpen
          ? "opacity-100 visible -translate-y-0 pointer-events-auto"
          : "opacity-0 invisible -translate-y-10 pointer-events-none"
      } absolute z-50 w-full h-full top-0 left-0 bg-zinc-200 dark:bg-neutral-800 p-4 flex md:hidden flex-col items-center gap-32`}
    >
      <button className="ml-auto" onClick={handleClose}>
        <MdClose size="25" />
      </button>
      <Navigation handleCloseMenu={handleClose} />
      <div className="mt-auto">
        <AuthNav handleCloseMenu={handleClose} />
      </div>
    </div>
  );
};

export default MobileMenu;
