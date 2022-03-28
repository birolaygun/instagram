import React, { useEffect, useState } from "react";

export function ErrorModal() {
  const [modalIsOpen, setIsOpen] = useState();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
     
     modalIsOpen ? <div className="fixed w-full h-full bg-black bg-opacity-50
      left-0 top-0 z-50 flex items-center justify-center">
        <div className="bg-white  p-4 rounded-lg shadow-md m-3">
          <h2 className="text-red-600">Error !!!</h2>
          <p className="my-3 ">
            firebase's 1 mounth free service have been finished. So you can't connect database.
            Click <a className="underline text-blue-800" href="https://www.youtube.com/watch?v=j7EQHJUIf5I">this link</a>  to watch the smooth state of the site.
          </p>
          <button
            className="border rounded p-1 text-white bg-red-600"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
        </div>
      </div> : <div></div>
    
  );
}
