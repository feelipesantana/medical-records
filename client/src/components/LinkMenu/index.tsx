import Link from "next/link";

interface LinkMenuProps {
  path: string;
  name: string;
}
export function LinkMenu({ path, name }: LinkMenuProps) {
  return (
    <Link
      href={path}
      className="text-sm p-2 border-b border-gray-400/20 transition duration-300 hover:bg-blue-default hover:text-white rounded-t-md"
    >
      {name}
    </Link>
  );
}
