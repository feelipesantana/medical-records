#App 

Medical Records

## Rfs (REQUISITOS FUNCIONAIS)

- [ ] Deve ser possível cadastrar um médico
- [ ] Deve ser possível cadastrar um administrador
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível que o médico crie uma consulta
- [ ] Deve ser possível obter os dados do médico
- [ ] Deve ser possível obter dados de um paciente existente no banco
- [ ] Deve ser possível obter o histórico do prontuário do paciente

## RN  (REGRAS DE NEGOCIO)

- [ ] O Usuário Médico não consegue criar um usuário
- [ ] O Usuário Administrador consegue criar um usuário adm ou usuário medico
- [ ] O Usuário Administrador consegue ver as consultas dos médicos e dos pacientes
- [ ] O Usuário Administrador não consegue visualizar o prontuário dos pacientes 
- [ ] O médico consegue ver o prontuário de todos os pacientes 

## RNF (REQUISITOS NÃO FUNCIONAIS)

- [ ] O usuário deve ser identificado por um JWT(JSON Web Token)