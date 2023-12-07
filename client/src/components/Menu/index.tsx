import { LinkMenu } from "../LinkMenu";

export function Menu() {
  return (
    <div className="flex items-center mt-2 ">
      <LinkMenu path="/cms" name="Agenda" />
      <LinkMenu path="/cms/medical-records" name="Prontuário" />
      <LinkMenu path="/cms/patients" name="Pacientes" />
      <LinkMenu path="/cms/management" name="Gestão" />
      <LinkMenu path="/cms/others" name="Outros" />
      <LinkMenu path="/cms/config" name="Configurações Admin" />
    </div>
  );
}
