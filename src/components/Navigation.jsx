import { NavLink } from "react-router-dom";

const Navigation = ({ handleCloseMenu }) => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "border-b border-b-teal-500 opacity-95" : ""
              } text-3xl md:text-base transition-opacity opacity-50  hover:opacity-80`
            }
            onClick={handleCloseMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${
                isActive ? "border-b border-b-teal-500 opacity-95" : ""
              } text-3xl md:text-base transition-opacity opacity-50  hover:opacity-80`
            }
            onClick={handleCloseMenu}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
