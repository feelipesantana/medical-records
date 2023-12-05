import { LinkMenu } from "@/components/LinkMenu";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Aside } from "@/components/Aside";
import { Menu } from "@/components/Menu";
import { Profile } from "@/components/Profile";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex flex-col h-full w-full">
        <header className="flex flex-col  px-14 ">
          <div className="flex justify-between items-center bg-white h-24">
            <Profile />
            <Bell />
          </div>
          <Menu />
        </header>
        <main className="flex flex-1 bg-blue-default/10 p-4">{children}</main>
      </div>
    </div>
  );
}
