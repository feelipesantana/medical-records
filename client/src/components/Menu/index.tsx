import { LinkMenu } from "../LinkMenu";

export function Menu() {
  return (
    <div className="flex items-center mt-2">
      <LinkMenu path="/cms" name="Prontuário" />
      <LinkMenu path="/register" name="Agenda" />
      <LinkMenu path="/register" name="Pacientes" />
      <LinkMenu path="/register" name="Gestão" />
      <LinkMenu path="/register" name="Outros" />
      <LinkMenu path="/register" name="Configurações Admin" />
    </div>
  );
}
