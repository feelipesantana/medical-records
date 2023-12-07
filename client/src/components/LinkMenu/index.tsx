"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkMenuProps {
  path: string;
  name: string;
}
export function LinkMenu({ path, name }: LinkMenuProps) {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <Link
      href={path}
      className="text-sm p-2  transition duration-300 hover:bg-blue-default hover:text-white rounded-md selected:bg-blue-default"
    >
      {name}
    </Link>
  );
}
