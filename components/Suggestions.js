import faker from "faker";
import React, { useEffect, useState } from "react";
import { photo } from "../photos/photos";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);


  useEffect(() => {
    setSuggestions(
      [...Array(5)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }))
    );
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400 ">
          Sizin İçin Önerilenler
        </h3>
        <button className="text-gray-600 font-bold">Hepsini Gör</button>
      </div>
      {suggestions.map((profile, i) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src={photo[i + 10]}
            alt=""
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              {profile.company.name}'da Çalışıyor
            </h3>
          </div>
          <button className="text-blue-400 text-sm font-semibold">
            Takip Et
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
