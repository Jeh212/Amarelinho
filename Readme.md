<h1 align="center">Amarelinho Test</h1>

<h1 align="center">
    <a href="https://nodejs.org/en/">🔗 Node.js e React.js</a>
</h1>
 <p align="center">🚀Pequena teste que adiciona vagas</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Docker](https://docs.docker.com/engine/install/), [Compose] (https://docs.docker.com/compose/install/), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Banco de dados no Docker

```bash
# Vá para a pasta backend
$ docker-compose up -d
```

### 🎲 Rodando o backend (ATENÇÃO!!! Rodar os seeds para adicionar vagas mocks)

```bash
# Vá para a pasta backend
$ cd backend
$ yarn
$ yarn prisma db seed
$ yarn dev
```

### 🎲 Rodando o frontend

```bash
# Vá para a pasta frontend
$ cd frontend
$ yarn
$ yarn dev
```
