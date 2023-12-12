import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ChevronDown } from "lucide-react";
export function MenuDropDown() {
  return (
    <Menubar className="border-none bg-none ">
      <MenubarMenu>
        <MenubarTrigger className="border-none bg-none">
          <ChevronDown className="text-blue-default " />
        </MenubarTrigger>
        <MenubarContent className="mx-12">
          <MenubarItem>
            Perfil <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Configurações</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Sair</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}