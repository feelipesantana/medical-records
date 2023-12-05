import Image from "next/image";

export function Profile() {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className=" h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
        <Image
          src="https://github.com/feelipesantana.png"
          width={200}
          height={200}
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <span className="text-sm font-semibold">Olá Felipe Santana 🖐🏽</span>
    </div>
  );
}
