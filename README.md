# App 

GymPass style app.

## RFs (Requisitos Funcionais)
**ℹ️ RFs são as funcionalidades que o usuário poderá realizar na aplicação.  
Exemplo: cadastrar usuário, autenticar, registrar check-in, etc.**

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu historico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar acedmias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)
**ℹ️ RNs (Regras de Negócio) são regras, restrições ou condições que determinam como cada requisito funcional deve ser implementado ou utilizado na aplicação.
Exemplo: O usuário só pode fazer check-in se estiver a menos de 10km da academia, ou só pode realizar um check-in por dia.

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100km) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais) 
**ℹ️: RNFs (Requisitos Não Funcionais) são requisitos técnicos ou restrições que não estão diretamente ligados às funcionalidades para o usuário final, mas são essenciais para o funcionamento, desempenho, segurança ou manutenção da aplicação.
Exemplo: tempo de resposta da API, requisitos de segurança, escalabilidade, compatibilidade com navegadores, uso de determinada tecnologia, etc.

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados de aplicação precisam estar persistido em um banco PostgresSQL;
- [ ] Todas listas de dados precisam estar paginados com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);