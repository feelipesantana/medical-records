import Link from "next/link";

interface LinkMenuProps {
  path: string;
  name: string;
}
export function LinkMenu({ path, name }: LinkMenuProps) {
  return (
    <Link
      href={path}
      className="text-[1.2rem] p-2 border-b border-gray-400/20 hover:bg-blue-default hover:text-white"
    >
      {name}
    </Link>
  );
}
