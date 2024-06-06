"use client";

import Link from "next/link";
import { login } from "../actions";
import { loginWithGoogle } from "../actions";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLogin = async () => {
    if (email === "") {
      setErrorMessage("Email é obrigatório");
    } else if (password === "") {
      setErrorMessage("Senha é obrigatória");
    } else if (email != "" && password != "") {
      setErrorMessage("");
      setLoading(true);
      try {
        await login(email, password);
      } catch (error: Error | any) {
        setErrorMessage("Credenciais inválidas");
        setLoading(false);
      }
    }
  };

  return (
    <div
      className={`min-h-dvh max-h-full flex flex-col items-center justify-center max-md:h-full transition-opacity duration-300 ${
        loaded ? "opacity-100 ease-in" : "opacity-0"
      }`}
    >
      <div className="w-16 mb-16 max-md:mb-8">
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="flex max-w-96 flex-col justify-center gap-5 max-md:gap-4 max-md:max-w-80">
        <div className="mb-5 max-md:mb-0">
          <h2 className="tracking-tight font-extrabold text-xl max-md:text-base">
            O melhor app de produtividade para estudantes
          </h2>
          <h2 className="tracking-tight font-extrabold text-xl text-gray-400 max-md:text-base">
            Faça login na sua conta da Produs
          </h2>
        </div>

        <div className="flex flex-col gap-5 max-md:gap-3">
          <div>
            <label className="font-bold text-sm max-md:text-xs" htmlFor="email">
              Email:
            </label>
            <Input
              className="max-md:h-8 max-md:text-xs"
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleLogin();
                }
              }}
              value={email}
            />
          </div>

          <div>
            <label
              className="font-bold text-sm max-md:text-xs"
              htmlFor="password"
            >
              Senha:
            </label>
            <Input
              className="max-md:h-8 max-md:text-xs"
              id="password"
              name="password"
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleLogin();
                }
              }}
              value={password}
            />
          </div>
          <p className="text-gray-400 text-xs text-justify">
            * Ao continuar, você confirma que entende e concorda com os Termos e
            Condições e com a Política de Privacidade
          </p>
          <button
            className="max-md:text-sm max-md:p-2 bg-black rounded-lg font-medium text-white p-3 hover:bg-gray-800 transition-all duration-150 ease-in-out transform active:scale-95 w-full"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            value={password}
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
          {errorMessage && (
            <p className="text-red-500 font-medium text-xs text-center">
              {errorMessage}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center my-2 max-md:my-0">
          <div className="h-px w-full bg-gray-300"></div>
          <div className=" w-full text-center">
            <p className=" text-xs">Ou continue com</p>
          </div>
          <div className="h-px w-[80%] bg-gray-300"></div>
        </div>

        <div className="flex gap-3">
          <div
            onClick={async () => {
              try {
                await loginWithGoogle();
              } catch (error: Error | any) {
                console.error(error);
              }
            }}
            className="cursor-pointer flex items-center justify-center w-full p-1 border-2 rounded-xl border-gray-300 max-md:h-10 hover:bg-gray-300 ease-in-out transition-all duration-500"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt=""
            />
          </div>

          <a
            href=""
            className="flex items-center justify-center w-full p-3 border-2 rounded-xl border-gray-300 max-md:h-10 hover:bg-gray-300 ease-in-out transition-all duration-500"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt=""
            />
          </a>

          <a
            href=""
            className="flex items-center justify-center w-full p-3 border-2 rounded-xl border-gray-300 max-md:h-10 hover:bg-gray-300 ease-in-out transition-all duration-500"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-1 justify-center my-3 max-md:flex-col max-md:items-center">
          <p className="text-xs">Ainda não tem uma conta?</p>
          <Link
            className="font-bold text-xs relative hover:text-black underline-animation"
            href="/signup"
          >
            Crie uma conta
          </Link>
        </div>
      </div>
    </div>
  );
}
