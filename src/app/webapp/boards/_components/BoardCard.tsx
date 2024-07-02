"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { checkLength } from "@/utils/custom/checkLength";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

enum difficulty {
  EASY = "Fácil",
  MEDIUM = "Médio",
  HARD = "Difícil",
}

type BoardCardProps = {
  title: string;
  board_img: string;
  board_id: number;
  difficulty: difficulty;
  next_test: string;
  tasks: number;
  assignments: number;
  tests: number;
};

const BoardCard = (props: BoardCardProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className={`hover:cursor-pointer w-64 place-self-center transition-all duration-75 ease-in-out transform active:scale-95 ${
          loaded ? "opacity-100 ease-in" : "opacity-0"
        }`}
      >
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-24 w-full select-none"
            style={{ backgroundImage: `url(${props.board_img})` }}
          ></div>
          <div className="p-4">
            <div
              className={`flex mb-1 max-w-fit items-center px-1 rounded ${
                props.difficulty === difficulty.EASY
                  ? "bg-green-500"
                  : props.difficulty === difficulty.MEDIUM
                  ? "bg-yellow-500"
                  : props.difficulty === difficulty.HARD
                  ? "bg-red-500"
                  : ""
              }`}
            >
              <p className="text-xs text-white font-semibold select-none">{`${
                props.difficulty === difficulty.EASY
                  ? "Fácil"
                  : props.difficulty === difficulty.MEDIUM
                  ? "Médio"
                  : props.difficulty === difficulty.HARD
                  ? "Difícil"
                  : ""
              }`}</p>
            </div>
            <div>
              <h1 className="text-gray-900 font-extrabold text-xl select-none whitespace-nowrap">
                {checkLength(props.title, 0, 18)}
              </h1>
            </div>
            <p className="text-xs text-gray-500 select-none">{`Próxima prova: ${props.next_test}`}</p>

            <Separator className="my-3" />

            <div className="flex items-center justify-around">
              {/* To-Dos */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="block mx-1 w-fit">
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="18px"
                          viewBox="0 -960 960 960"
                          width="18px"
                          fill="#6b7280"
                        >
                          <path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q63 0 120 19t105 54l-52 52q-37-26-81-39.5T480-792q-130 0-221 91t-91 221q0 130 91 221t221 91q130 0 221-91t91-221q0-21-3-41.5t-8-40.5l57-57q13 32 19.5 67t6.5 72q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm-55-211L264-468l52-52 110 110 387-387 51 51-439 439Z" />
                        </svg>
                        <p className="text-gray-500 select-none">
                          {props.tasks}
                        </p>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tarefas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Assignments */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#6b7280"
                      >
                        <path d="M384-408h192v-72H384v72Zm0-120h336v-72H384v72Zm0-120h336v-72H384v72Zm-72 408q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z" />
                      </svg>
                      <p className="text-gray-500 select-none">
                        {props.assignments}
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Trabalhos</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Tests */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 -960 960 960"
                        width="18px"
                        fill="#6b7280"
                      >
                        <path d="M336-240h288v-72H336v72Zm0-144h288v-72H336v72ZM263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z" />
                      </svg>
                      <p className="text-gray-500 select-none">{props.tests}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Provas</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Abrir</ContextMenuItem>
        <ContextMenuItem>Renomear</ContextMenuItem>
        <ContextMenuItem>Excluir</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default BoardCard;
