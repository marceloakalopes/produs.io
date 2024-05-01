"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { signup } from "../actions";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div
      className={`min-h-dvh max-h-full flex flex-col items-center justify-center max-md:h-full my-10 transition-opacity duration-300 ${
        loaded ? "opacity-100 ease-in" : "opacity-0"
      }`}
    >
      <div className="w-16 mb-5 ">
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="flex max-w-96 flex-col justify-center gap-5 max-md:max-w-80 max-md:my-10">
        <div className="mb-5">
          <h2 className="tracking-tight font-extrabold text-xl">
            O melhor app de produtividade para estudantes
          </h2>
          <h2 className="tracking-tight font-extrabold text-xl text-gray-400">
            Crie sua conta da Produs
          </h2>
        </div>

        <form className="flex flex-col gap-5">
          <div>
            <label className="font-bold text-sm" htmlFor="email">
              Email:
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              onChange={(e) => { setEmail(e.target.value) }}
              
            />
          </div>

          <div>
            <label className="font-bold text-sm" htmlFor="password">
              Senha:
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <div>
            <label className="font-bold text-sm" htmlFor="password">
              Confirme a Senha:
            </label>
            <Input id="password" name="password" type="password" required />
          </div>

          <p className="text-gray-400 text-xs text-justify">
            * Ao continuar, você confirma que entende e concorda com os Termos e
            Condições e com a Política de Privacidade
          </p>
          <button
            className="bg-black rounded-xl font-medium text-white p-3 hover:bg-gray-800 transition-all w-full"
            formAction={() => {
              if (password === confirmPassword) {
                signup
            }}}
            onClick={() => {
              if (password != "" && email != "") {
                setLoading(true)}}
              }
          >
            {loading ? "Carregando..." : "Criar Conta"}
          </button>
        </form>

        <div className="flex items-center justify-center my-2">
          <div className="h-px w-full bg-gray-300"></div>
          <div className="w-full text-center">
            <p className="text-xs">Ou continue com</p>
          </div>
          <div className="h-px w-full bg-gray-300"></div>
        </div>

        <div className="flex gap-3">
          <a
            href=""
            className="flex items-center justify-center w-full p-3 border-2 rounded-xl border-gray-300"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt=""
            />
          </a>

          <a
            href=""
            className="flex items-center justify-center w-full p-3 border-2 rounded-xl border-gray-300"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt=""
            />
          </a>

          <a
            href=""
            className="flex items-center justify-center w-full p-3 border-2 rounded-xl border-gray-300"
          >
            <img
              className="w-4"
              src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
              alt=""
            />
          </a>
        </div>
        <div className="flex gap-1 justify-center my-3">
          <p className="text-xs">Já tem uma conta?</p>
          <Link className="font-bold text-xs" href="/login">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
