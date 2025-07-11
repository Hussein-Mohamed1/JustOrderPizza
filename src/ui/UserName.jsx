import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return null;
  return (
    <div className="flex items-center space-x-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500">
        <span className="text-sm font-bold text-white">H</span>
      </div>
      <p className="font-medium text-white">{userName}</p>
    </div>
  );
}

export default UserName;
