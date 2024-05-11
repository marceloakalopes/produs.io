'use client';

import { User } from "@/types/custom";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = (user: User | any) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);


  return (
    <nav className={`flex px-5 py-8 justify-around transition-opacity duration-300 ${
      loaded ? "opacity-100" : "opacity-0"
    }`}>
      <div>
        <img className="w-16" src="/logo.png" alt="" />
      </div>
      <div className="flex items-center justify-center">
        { user.user ? (
          <div className="flex items-center justify-center">
            <Link
              className="px-4 py-3 rounded-xl text-white text-sm bg-black font-semibold hover:bg-neutral-700 transition-all duration-300 ease-in-out transform active:scale-95"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </div>
        ) : (
          <div className="flex gap-5 items-center justify-center">
            <Link className="px-4 py-3 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-all duration-300 ease-in-out transform active:scale-95" href="/login">
              Fazer Login
            </Link>
            <Link
              className="px-4 py-3 rounded-xl text-white text-sm bg-black font-semibold hover:bg-neutral-700 transition-all duration-300 ease-in-out transform active:scale-95"
              href="/signup"
            >
              Criar conta
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
