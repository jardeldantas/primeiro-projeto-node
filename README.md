# primeiro-projeto-node
Backed com nodejs + Typescript utilizando conceitos de Orientação a Objeto

## Scripts disponíveis

No diretório do projeto, você pode executar:

### `yarn`

Executa a instalação das dependências do projeto baixando a pasta node_modules;

### `yarn dev:server`

Executa o aplicativo no modo de desenvolvimento. <br>
O Servidor estará em execução: [http://localhost:3333/appointments] (http://localhost:3333/appointments)

Utilize o aplicativo Insomnia Core. Explore REST (ou algum de sua preferência) e crie duas rotas uma GET e outra POST:

POST: http://localhost:3333/appointments e faça a inclusão de um registro alimentando os atributos provider e date no formato JSON, conforme exemplo abaixo:

{
    "provider":"Fulano de Tal",
    "date":"2020-05-16"
}

Após a inserção do dado execute a rota abaixo:

GET: http://localhost:3333/appointments
