"use client";

import { addBoard } from "./actions";
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddNewCard = () => {
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex my-10 mx-8 justify-end transition-opacity duration-100 ${
        loaded ? "opacity-100 ease-in" : "opacity-0"
      }`}
    >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex gap-4">
              <svg
                width="24px"
                height="100%  "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M18 21V15M15 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className=" text-base">Criar novo Quadro</p>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-lg font-bold">Criar novo Quadro</AlertDialogTitle>
            </AlertDialogHeader>
            <form className="block">
              <AlertDialogDescription className="text-sm text-muted-foreground">
                Preencha os campos abaixo para criar um novo quadro.
              </AlertDialogDescription>
              <Input
                className="my-4"
                id="title"
                name="title"
                type="text"
                placeholder="Matéria"
                required
                onChange={e => {
                  e.preventDefault();
                  setTitle(e.target.value);
                }}
              />
              <div className="mb-5">
              {/* Unsplash API */}
              </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction type="submit" formAction={addBoard}>
                Criar
              </AlertDialogAction>
            </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
    </div>
  );
};

export default AddNewCard;
