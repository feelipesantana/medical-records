#App 

Medical Records

## Rfs (REQUISITOS FUNCIONAIS)

- [x] Deve ser possível cadastrar um médico
- [x] Deve ser possível cadastrar um administrador
- [ ] Deve ser possível se autenticar
- [x] Deve ser possível que o médico ou o administrador crie uma consulta
- [ ] Deve ser possível obter os dados do médico
- [ ] Deve ser possível obter dados de um paciente existente no banco
- [ ] Deve ser possível obter as consultas por data
- [ ] Deve ser possível obter o histórico do prontuário do paciente


## RN  (REGRAS DE NEGOCIO)


- [ ] Não é possível criar dois usuário com o mesmo email
- [ ] Não é possível criar dois usuários com o mesmo cpf
- [ ] Não é possível que o mesmo usuário tenha dois apontamentos no mesmo horário e data
- [ ] Não é possível criar um apontamento com a dataFinal antes da data inicial

- [ ] O Usuário Médico não consegue criar um usuário

- [ ] O Usuário Administrador consegue criar um usuário adm ou usuário medico
- [ ] O Usuário Administrador consegue ver as consultas dos médicos e dos pacientes
- [ ] O Usuário Administrador não consegue visualizar o prontuário dos pacientes 
- [ ] Não pode criar um apontamento com datas iguais

- [ ] O médico consegue ver o prontuário de todos os pacientes 

## RNF (REQUISITOS NÃO FUNCIONAIS)

- [ ] O usuário deve ser identificado por um JWT(JSON Web Token)