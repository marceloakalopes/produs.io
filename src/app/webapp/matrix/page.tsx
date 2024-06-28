import type { Metadata } from "next";
import { ScrollArea } from "@/components/ui/scroll-area";
import TodoMatrix from "./_components/TodoMatrix";

export const metadata: Metadata = {
  title: "Matriz de Eisenhower - Produs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return (
    <div className="block w-full h-full bg-[#F8F9FF] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="grid h-full grid-cols-2 max-md:grid-cols-1">
        {/* Quadrante 1 da Matriz de Eisenhower */}
        <ScrollArea className="rounded-3xl m-2 bg-white h-[48vh]">
          <div className="flex m-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FF5F68"
            >
              <path d="M479.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-432h72v-240h-72v240Zm36.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z" />
            </svg>
            <h3 className="font-bold text-sm text-[#FF5F68]">
              Urgente e Importante
            </h3>
          </div>

          <div className="block gap-3">
            
          </div>
        </ScrollArea>

        {/* Quadrante 2 da Matriz de Eisenhower */}
        <ScrollArea className="rounded-3xl m-2 bg-white h-[48vh]">
          <div className="flex m-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#FFB000"
            >
              <path d="M479.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-432h72v-240h-72v240Zm36.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z" />
            </svg>
            <h3 className="font-bold text-sm text-[#FFB000]">
              Não Urgente e Importante
            </h3>
          </div>

          <div></div>
        </ScrollArea>

        {/* Quadrante 3 da Matriz de Eisenhower */}
        <ScrollArea className="rounded-3xl m-2 bg-white h-[48vh]">
          <div className="flex m-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#4772FA"
            >
              <path d="M479.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-432h72v-240h-72v240Zm36.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z" />
            </svg>
            <h3 className="font-bold text-sm text-[#4772FA]">
              Urgente e Não Importante
            </h3>
          </div>

          <div></div>
        </ScrollArea>

        {/* Quadrante 4 da Matriz de Eisenhower */}
        <ScrollArea className="rounded-3xl m-2 bg-white h-[48vh]">
          <div className="flex m-3 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#0CCE9C"
            >
              <path d="M479.79-288q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5ZM444-432h72v-240h-72v240Zm36.28 336Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z" />
            </svg>
            <h3 className="font-bold text-sm text-[#0CCE9C]">
              Nem Urgente, Nem Importante
            </h3>
          </div>

          <div></div>
        </ScrollArea>
      </div>
    </div>
  );
}
