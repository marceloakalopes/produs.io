import Link from "next/link";


export default function Page() {
    return (
        <div className="max-w-[100vw] max-h-[100vh] p-6 bg-white rounded-lg shadow-lg">
      <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="mx-4 flex max-w-md flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Check_mark_%28white%29.svg/750px-Check_mark_%28white%29.svg.png?20221115155028' className="h-8 w-8" />
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sua conta foi criada com sucesso!</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Confira seu email para ativar sua conta.
          </p>
        </div>
        <Link
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/login"
        >
          Log In
        </Link>
      </div>
    </div>
    </div>
    );
}