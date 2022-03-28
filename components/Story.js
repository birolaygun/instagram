import { useSession } from "next-auth/react";
import React from "react";

const Story = ({ img, username }) => {
  const { data: session } = useSession();

  return (
    <div className=" ">
      <img
        className="hover:scale-110 duration-200 ease-out h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-cover cursor-pointer"
        src={ img }
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
