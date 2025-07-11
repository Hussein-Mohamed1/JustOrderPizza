import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 sm:h-8 sm:w-8">
        <span className="text-xs font-bold text-white sm:text-sm">
          {userName.charAt(0).toUpperCase()}
        </span>
      </div>
      <p className="hidden font-medium text-white sm:block">{userName}</p>
    </div>
  );
}

export default UserName;
