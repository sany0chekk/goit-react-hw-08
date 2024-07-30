import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";

const UserMenu = () => {
  const user = useSelector(selectUser);

  return (
    <div className="flex items-center gap-4">
      <p className="text-sm font-medium">Welcome, {user.name}</p>
      <button className="text-2xl md:text-sm text-zinc-300 dark:text-white font-medium p-2 bg-teal-700 rounded-md transition-colors hover:bg-teal-600">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
