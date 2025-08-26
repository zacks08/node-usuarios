# 👤 API de Usuários

API REST para cadastro, consulta, atualização e remoção de usuários, desenvolvida com **Node.js**, **Express** e **Prisma ORM** utilizando **MongoDB**.

---

## 🆕 O que foi alterado nesta versão?

- Atualização e organização das dependências do projeto.
- Refatoração completa do código para separar responsabilidades (rotas, controllers, serviços).
- Comentários detalhados em todo o código para facilitar manutenção e entendimento.
- Otimização dos processos de acesso ao banco de dados com Prisma.
- Melhoria na estrutura de pastas e arquivos para facilitar escalabilidade.
- Testes completos dos endpoints realizados via Postman.
- Documentação atualizada para facilitar o uso e a contribuição.

---

## ✨ Funcionalidades

- ✅ Cadastro de usuários  
- ✅ Listagem de todos os usuários  
- ✅ Consulta de usuários por filtros (nome, email, idade)  
- ✅ Atualização de usuário por ID  
- ✅ Remoção de usuário por ID  

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)

---



## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-usuarios.git
cd api-usuarios

# Instale as dependências
npm install
```

---

## ⚙️ Configuração do Banco de Dados

1. Crie um arquivo `.env` na raiz do projeto:

   ```
   DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/SeuBanco"
   ```

2. Gere o Prisma Client e atualize o banco:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

---

## ▶️ Como rodar o projeto

```bash
# Inicie o servidor (ajuste o caminho se necessário)
node src/server.js
```

O servidor rodará na porta **3000** por padrão.

---

## 📚 Rotas da API

### ➕ Criar usuário

`POST /usuarios`

```json
{
  "email": "exemplo@email.com",
  "name": "Isaac",
  "age": 25
}
```

---

### 📋 Listar todos os usuários

`GET /usuarios`

Parâmetros de consulta opcionais: `name`, `email`, `age`

---

### 🔎 Listar usuário por ID

`GET /usuarios/:id`

---

### ✏️ Atualizar usuário

`PUT /usuarios/:id`

```json
{
  "email": "novo@email.com",
  "name": "Novo Nome",
  "age": 30
}
```

---

### ❌ Deletar usuário

`DELETE /usuarios/:id`

---

## 🧪 Testes

Todos os endpoints foram testados utilizando o Postman, garantindo o correto funcionamento das operações de CRUD.

---

## ℹ️ Observações

* O campo `age` está como `Int` no banco, conforme definido no schema Prisma.
* O projeto utiliza MongoDB Atlas, mas pode ser adaptado para outros bancos suportados pelo Prisma.
* Para aplicar filtros na listagem, utilize parâmetros de query na rota `GET /usuarios`.

---

## 👨‍💻 Autor

Desenvolvido por [Isaac](https://github.com/zacks08) 🚀

---

> *Sinta-se à vontade para contribuir, sugerir melhorias ou reportar issues!*

© 2025 GitHub Copilot. Este README foi gerado com o auxílio da inteligência artificial GitHub Copilot para fins educacionais e profissionais.
