// Documentos a serem criados no banco de dados MongoDB com as informações do usuário.

// Digite este comando: < use user_info > na instância do mongosh para criação do banco de dados;

// Para inserção dos primeiros documentos e efetivamente popularmos nosso banco é necessário executar a querie abaixo no mongosh;

db.users.insertMany([
  {
    name: 'Ana Nascimento',
    userName: 'ana_nascimento',
    lastAccess: '2020-07-11T00:00:45.000+00:00',
  },
  {
    name: 'Marcos Rodrigues',
    userName: 'marcosRodrigues',
    lastAccess: '2021-10-01T00:00:45.000+00:00',
  },
  {
    name: 'Ítalo Santos',
    userName: 'santos_italo',
    lastAccess: '2021-03-21T00:00:45.000+00:00',
  },
  {
    name: 'Marta Rocha',
    userName: 'marta_87_rocha',
    lastAccess: '2021-09-11T00:00:45.000+00:00',
  },
  {
    name: 'Raíssa Leite',
    userName: 'ray_leite_97',
    lastAccess: '2021-01-31T00:00:45.000+00:00',
  },
  {
    name: 'Isadora Medeiros',
    userName: 'medeirosIsa',
    lastAccess: '2021-05-15T00:00:45.000+00:00',
  },
  {
    name: 'Gabriel Oliveira',
    userName: 'G_oliveira',
    lastAccess: '2020-12-11T00:00:45.000+00:00',
  },
  {
    name: 'Benedita Costa',
    userName: 'costa_bene',
    lastAccess: '2021-10-01T00:00:45.000+00:00',
  },
  {
    name: 'Felipe Vianna',
    userName: 'viana_felipe',
    lastAccess: '2021-02-22T00:00:45.000+00:00',
  },
  {
    name: 'Marcelo Fernandes',
    userName: 'fernandes_mar',
    lastAccess: '2021-07-21T00:00:45.000+00:00',
  },
  {
    name: 'Andressa Marques',
    userName: 'dressa_m',
    lastAccess: '2021-03-31T00:00:45.000+00:00',
  },
  {
    name: 'André Ramos',
    userName: 'ramos_andre',
    lastAccess: '2021-08-11T00:00:45.000+00:00',
  },
  {
    name: 'Márcia de Souza Bastos',
    userName: 'marciaB',
    lastAccess: '2016-01-01T00:00:45.000+00:00',
  },
  {
    name: 'Érica Azevedo',
    userName: 'azevedo_erica',
    lastAccess: '2021-06-24T00:00:45.000+00:00',
  },
  {
    name: 'João Duarte',
    userName: 'duarteJoao',
    lastAccess: '2020-01-27T00:00:45.000+00:00',
  },
  {
    name: 'Roberta de Almeida',
    userName: 'almeida_rob',
    lastAccess: '2020-12-10T00:00:45.000+00:00',
  },
  {
    name: 'Alberto Cândido',
    userName: 'candido_alberto',
    lastAccess: '2020-08-29T00:00:45.000+00:00',
  },
  {
    name: 'Beatriz de Andrade',
    userName: 'andrade_bia',
    lastAccess: '2021-04-28T00:00:45.000+00:00',
  },
  {
    name: 'Daniela Figueiredo',
    userName: 'dani_figueiredo',
    lastAccess: '2021-02-23T00:00:45.000+00:00',
  },
  {
    name: 'Jade Vargas',
    userName: 'vargas_ja',
    lastAccess: '2020-10-11T00:00:45.000+00:00',
  },
  {
    name: 'Márcia Maia',
    userName: 'maia_marcia',
    lastAccess: '2021-11-11T00:00:45.000+00:00',
  },
]);
