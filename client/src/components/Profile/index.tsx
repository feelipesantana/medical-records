import Image from "next/image";

export function Profile() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 z-[0] opacity-75  rounded-full bg-gradient-to-r from-blue-default to-white p-2 "></div>
      <div className="relative h-11 w-11">
        <Image
          src="https://github.com/feelipesantana.png"
          width={60}
          height={60}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
