import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/cms");
  }
  return (
    <main className="flex justify-between bg-blue-50 h-screen w-screen">
      <section className="flex flex-col h-screen w-full  items-center justify-center">
        <Image src="/assets/logo.png" width={400} height={400} alt="Logo" />
      </section>
      <section className="flex flex-col items-center justify-center px-[8rem] py-[0.5rem]  bg-white/50 backdrop-blur-md h-[100%] max-w-[52rem] w-full rounded-r-none rounded-l-[6.4rem]">
        {children}
      </section>
    </main>
  );
}
