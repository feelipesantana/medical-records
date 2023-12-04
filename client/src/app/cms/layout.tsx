import { LinkMenu } from "@/components/LinkMenu";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-24  flex justify-between items-center text-blue-default bg-white px-14">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
        <h1 className="text-semibold">Home</h1>
        <Bell />
      </header>
      <div className="h-1 w-full  bg-gradient-to-r from-blue-500  to-purple-500 p-1"></div>
      <div className="flex h-full ">
        <aside className="w-96 border border-l-blue-default flex flex-col">
          <LinkMenu name="Home" path="/cms" />
          <LinkMenu name="Dados pessoais" path="/cms" />
          <LinkMenu name="Prontuário" path="/cms" />
          <LinkMenu name="Calendário" path="/cms" />
        </aside>
        <main className="flex flex-1 bg-blue-default/10 p-4">{children}</main>
      </div>
    </div>
  );
}
