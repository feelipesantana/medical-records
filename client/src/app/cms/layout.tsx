import { LinkMenu } from "@/components/LinkMenu";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Aside } from "@/components/Aside";
import { Menu } from "@/components/Menu";
import { Profile } from "@/components/Profile";
import { GetPatientSearch } from "@/components/GetPatientSearch";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex flex-col h-full w-full">
        <header className="flex flex-col  px-14 ">
          <div className="flex justify-between items-center bg-white h-24">
            <Menu />

            <div className="flex items-center justify-center gap-6">
              <GetPatientSearch />
              <Bell className="text-blue-default " />
              <div className="flex items-center justify-center gap-1">
                <Profile />
                <ChevronDown className="text-blue-default " />
              </div>
            </div>
          </div>
        </header>
        <main className="flex flex-1 bg-blue-default/10 p-4 overflow-y-scroll">
          {children}
        </main>
      </div>
    </div>
  );
}
