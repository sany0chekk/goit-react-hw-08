import { Link } from "react-router-dom";

const AuthNav = ({ handleCloseMenu }) => {
  return (
    <ul className="flex items-center gap-8 max-md:bg-zinc-400 max-md:dark:bg-neutral-700 max-md:shadow-md max-md:p-4 max-md:rounded-md">
      <li>
        <Link
          to="/login"
          className="text-2xl md:text-sm font-medium transition-opacity hover:opacity-50"
          onClick={handleCloseMenu}
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="text-2xl md:text-sm text-zinc-300 dark:text-white font-medium p-2 bg-teal-700 rounded-md transition-colors hover:bg-teal-600"
          onClick={handleCloseMenu}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
