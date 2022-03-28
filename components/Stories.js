import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useSession } from "next-auth/react";
import { photo } from "../photos/photos";

const Stories = () => {
  const { data: session } = useSession();

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setSuggestions(
      [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }))
    );
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
    border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {session && (
        <Story img={session?.user.image} username={session?.user.username} />
      )}
      {suggestions.map((profile, i) => (
        <Story key={profile.id} img={photo[i]} username={profile.username} />
      ))}
    </div>
  );
};

export default Stories;
