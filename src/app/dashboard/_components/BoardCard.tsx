"use client";

import { useState, useEffect } from "react";
import {Button} from "@/components/ui/button";
import { deleteBoard } from "./actions";

type BoardCardProps = {
  title: string;
  board_img: string;
  board_id: number;
};

const BoardCard = (props: BoardCardProps) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-64 place-self-center transition-all duration-300 ease-in-out transform active:scale-95 ${
      loaded ? "opacity-100 ease-in" : "opacity-0"
    }`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-24 w-full select-none"
          style={{ backgroundImage: `url(${props.board_img})` }}
        ></div>
        <div className="p-4 h-24">
          <h1 className="text-gray-900 font-bold text-2xl select-none">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
