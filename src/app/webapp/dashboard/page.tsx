import CheckoutButton from "@/components/custom/CheckoutButton";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Produs",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {


  return (
    <div className="min-h-screen w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {/* <CheckoutButton price_id="price_1PPaqWFiIaExFNQpY0PTuBf5" email="alldevthings@gmail.com"/> */}
    </div>
  );
}
