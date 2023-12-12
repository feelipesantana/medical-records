import { LinkMenu } from "@/components/LinkMenu";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Aside } from "@/components/Aside";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import { signOut } from "next-auth/react";
import { Header } from "@/components/Header";

export default async function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }
  async function handleSingOut() {}
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex flex-col h-full w-full">
        <Header />
        <main className="flex flex-1 bg-blue-default/10 p-4 overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
