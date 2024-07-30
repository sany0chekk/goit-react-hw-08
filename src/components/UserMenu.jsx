import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logOut } from "../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <p className="text-xl md:text-sm font-medium">
        Welcome, <span className="text-teal-700">{user.name}</span>
      </p>
      <button
        className="text-lg md:text-sm text-zinc-300 dark:text-white font-medium p-2 bg-teal-700 rounded-md transition-colors hover:bg-teal-600"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
