import Image from "next/image";

export function Profile() {
  return (
    <div className=" h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
      <Image
        src="https://github.com/feelipesantana.png"
        width={60}
        height={60}
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
}
