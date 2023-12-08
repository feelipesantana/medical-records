import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function GetPatientSearch() {
  return (
    <form className="flex gap-2">
      <Input
        type="text"
        placeholder="Encontrar paciente"
        className="outline-none selection:outline-none select-none h-9"
      />
      <Button
        variant={"default"}
        size={"sm"}
        className="bg-blue-default hover:bg-blue-500
        "
      >
        Buscar
      </Button>
    </form>
  );
}
