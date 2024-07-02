"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

type TodoMatrixProps = {
  id: string;
  done: boolean;
  title: string;
  description: string;
  dueDate: string;
};

const TodoMatrix = (props: TodoMatrixProps) => {
  const [selected, setSelected] = useState(false);
  const [done, setDone] = useState(props.done);

  return (
    <>
    <div className="rounded-lg hover:bg-gray-100 ease-in-out duration-150 mx-6 cursor-pointer">
      <div className="flex items-center justify-between px-4" onClick={e => {
        e.preventDefault();
        setSelected(!selected);
      }}>
        <div id={props.id} className="flex h-10 items-center">
          <span
            onClick={() => setDone(!done)}
            className={`h-4 w-4 border-2 border-[#FF5F68] cursor-pointer mr-2  ease-in-out duration-300 rounded ${
              done ? "bg-[#FF5F68]" : "hover:bg-gray-200"
            }`}
          ></span>
          <div className="text-sm font-medium">{props.title}</div>
        </div>
        <div>
          <div
            className={`text-xs ${
              new Date(props.dueDate) > new Date()
                ? "text-[#4772FA]"
                : "text-red-500"
            }`}
          >
            {new Date(props.dueDate).toLocaleDateString("PT-BR", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      <div className="mx-16">
        <Separator className="bg-gray-100" />
      </div>
    </div>
    </>
  );
};

export default TodoMatrix;
