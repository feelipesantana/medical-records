import { Bell } from "lucide-react";
import { MenuDropDown } from "./MenuDropDown";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LinkMenu } from "../LinkMenu";

export function Header() {
  return (
    <header className="flex flex-col  px-14 ">
      <div className="flex justify-between items-center bg-white h-24">
        <div className="flex items-center mt-2 ">
          <LinkMenu path="/cms" name="Agenda" />
          <LinkMenu path="/cms/medical-records" name="Prontuário" />
          <LinkMenu path="/cms/patients" name="Pacientes" />
          <LinkMenu path="/cms/management" name="Gestão" />
          <LinkMenu path="/cms/others" name="Outros" />
          <LinkMenu path="/cms/config" name="Configurações Admin" />
        </div>

        <div className="flex items-center justify-center gap-6">
          <form className="flex gap-2">
            <Input
              type="text"
              placeholder="Encontrar paciente"
              className="outline-none selection:outline-none select-none h-9"
            />
            <Button
              variant={"default"}
              size={"sm"}
              className="bg-blue-default hover:bg-blue-500"
            >
              Buscar
            </Button>
          </form>
          <Bell className="text-blue-default " />

          <div className="flex items-center justify-center gap-1">
            <div className="relative">
              <div className="absolute -inset-1 z-[0] opacity-75  rounded-full bg-gradient-to-r from-blue-default to-white p-2 "></div>
              <Avatar>
                <AvatarImage src="https://github.com/feelipesantana.png" />
              </Avatar>
            </div>

            <MenuDropDown />
          </div>
        </div>
      </div>
    </header>
  );
}
