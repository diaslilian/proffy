<h1 align="center">
    <img src="https://user-images.githubusercontent.com/47895394/89720070-b1425600-d9a4-11ea-8da2-c9f8c267f32a.png" width="40%"></img> 
    <br>

<h4>
Proffy, plataforma de busca e cadastro de aulas. Na plataforma os alunos podem buscar, professores de diversas matérias e entrarem em contato com estes através do WhatsApp. Os professores podem cadastrar seus horários de aulas para que os alunos entrem em contato.
</h4>

![proffy](https://user-images.githubusercontent.com/47895394/89720097-f8c8e200-d9a4-11ea-9e79-519b9cd54431.png)

### :books: Layout

Acessar o layout da aplicação utilizando a ferramenta Figma

- [versão WEB](<https://www.figma.com/file/XkirWCxvnyJQQxjp4E1Hti/Proffy-Web-(Copy)>).
- [versão Mobile](<https://www.figma.com/file/kF3XFnHBjHQLNXqox74IEB/Proffy-Mobile-(Copy)>)

Implementar novas funcionalidades para a aplicação; - [Desafio](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970)

## :rocket: Tecnologias

### API

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [knex](https://knexjs.org)
- [SQLite](https://github.com/mapbox/node-sqlite3)
- [Cors](https://github.com/expressjs/cors#readme)

### WEB

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://github.com/axios/axios)

### MOBILE

- [React Native](http://facebook.github.io/react-native/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Axios](https://github.com/axios/axios)

## :information_source: COMO USAR:

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v10.16](nodejs) or higher + [Yarn v1.13](yarn) or higher installed on your computer. From your command line:

### **Clonar o repositório**

```bash
# Clone this repository
$ git clone https://github.com/diaslilian/proffy

# Go into the repository
$ cd proffy
```

### **API**

> Logo após clonar o repositório navegue ate a pasta 'server' e execute o comando yarn install.

```bash
# Go into server
$ cd server

# Install dependencies
$ yarn install

# Run SQLite
$ yarn run knex:migrate

$ yarn run knex:seed

# Start the backend server
$ yarn run dev
```

### WEB

> Após seguir os passos acima e o server estiver funcionando vá para pasta web.

> Depois das dependências terminarem de instalar execute o comando yarn start.

```bash
# Go into frontend web
$ cd web

# Install dependencies
$ yarn install

# Start the frontend
$ yarn start
```

### :eyes: **Visualizar no navegador**

The frontend web will start on

> http://localhost:3333

### MOBILE

> Para executar o mobile entre na pasta do mobile logo após o backend server estiver funcionando execute yarn install.

> Após as dependências terminarem de baixar execute yarn start. O expo já estará funcionando para você ler o Qr Code e utilizar a aplicação.

```bash
# On another terminal, go to the mobile folder
$ cd mobile

# Install dependencies
$ yarn install

# Start the expo server
$ yarn start
```

<br><br>

<hr>

Created by Lilian Dias :wave: [Hi-5!](https://www.linkedin.com/in/dias-lilian/)
