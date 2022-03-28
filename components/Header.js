import React from "react";
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { photo } from "../photos/photos";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="header shadow-sm border-b bg-white sticky top-0 z-50 ">
      <div className="flex justify-between max-w-6xl mx-2 lg:mx-auto ">
        <div className="flex justify-center items-center">
          <div
            onClick={() => router.push("/")}
            className="relative lg:inline-grid hidden h-10 w-24 cursor-pointer justify-center items-center "
          >
            <img src="https://links.papareact.com/ocw" alt="" />{" "}
          </div>
          <div
            onClick={() => router.push("/")}
            className=" relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
          >
            <img src="https://links.papareact.com/jjm" alt="" />{" "}
          </div>
        </div>

        <div className="max-w-xs">
          <div className="relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-grey-300 focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>

        <div className="flex items-center">
          {session ? (
            <PlusCircleIcon
              onClick={() => setOpen(true)}
              className="h-6 md:hidden cursor-pointer"
            />
          ) : (
            <MenuIcon className="h-6 md:hidden cursor-pointer" />
          )}
        </div>

        <div className="flex items-center space-x-4 pr-3 mr-2">
          <HomeIcon
            onClick={() => router.push("/")}
            className="hidden md:flex h-6 cursor-pointer"
          />

          {session ? (
            <>
              <div className="relative navBar">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="hidden md:inline-flex absolute -top-1 -right-2 text-xs w-5 h-5  bg-red-500  rounded-full items-center justify-center  text-white animate-pulse ">
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={() => signOut()}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={session?.user.image}
                alt="nooo"
              />
            </>
          ) : (
            <button onClick={() => signIn()}>Giriş</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
