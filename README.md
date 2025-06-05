<h1>👤 API de Usuários</h1>

<p>
API REST para cadastro, consulta, atualização e remoção de usuários, desenvolvida com <strong>Node.js</strong>, <strong>Express</strong> e <strong>Prisma ORM</strong> utilizando <strong>MongoDB</strong>.
</p>

<h2>✨ Funcionalidades</h2>
<ul>
  <li>Cadastro de usuários</li>
  <li>Listagem de todos os usuários</li>
  <li>Consulta de usuários por filtros (nome, email, idade)</li>
  <li>Atualização de usuário por ID</li>
  <li>Remoção de usuário por ID</li>
</ul>

<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Prisma ORM</li>
  <li>MongoDB</li>
</ul>

<h2>📦 Instalação</h2>
<ol>
  <li>Clone o repositório<br>
    <code>git clone https://github.com/seu-usuario/api-usuarios.git</code><br>
    <code>cd api-usuarios</code>
  </li>
  <li>Instale as dependências<br>
    <code>npm install</code>
  </li>
</ol>

<h3>⚙️ Configuração do Banco de Dados</h3>
<ol>
  <li>Crie um arquivo <code>.env</code> na raiz do projeto:<br>
    <code>DATABASE_URL="mongodb+srv://&lt;usuario&gt;:&lt;senha&gt;@&lt;cluster&gt;.mongodb.net/Users"</code>
  </li>
  <li>Gere o Prisma Client e atualize o banco:<br>
    <code>npx prisma generate</code><br>
    <code>npx prisma db push</code>
  </li>
  <li>Inicie o servidor:<br>
    <code>node --watch server.js</code><br>
    O servidor rodará na porta <strong>3000</strong>.
  </li>
</ol>

<h2>📚 Rotas da API</h2>

<h3>➕ Criar usuário</h3>
<p><code>POST /usuarios</code></p>
<pre>
{
  "email": "exemplo@email.com",
  "name": "Isaac",
  "age": "25"
}
</pre>

<h3>📋 Listar todos os usuários</h3>
<p><code>GET /usuarios</code></p>
<p>Parâmetros de consulta opcionais: <code>name</code>, <code>email</code>, <code>age</code></p>

<h3>✏️ Atualizar usuário</h3>
<p><code>PUT /usuarios/:id</code></p>
<pre>
{
  "email": "novo@email.com",
  "name": "Novo Nome",
  "age": "30"
}
</pre>

<h3>❌ Deletar usuário</h3>
<p><code>DELETE /usuarios/:id</code></p>

<h2>ℹ️ Observações</h2>
<ul>
  <li>O campo <code>age</code> está como <code>String</code> no banco, mas pode ser ajustado conforme necessidade.</li>
  <li>O projeto utiliza MongoDB Atlas, mas pode ser adaptado para outros bancos suportados pelo Prisma.</li>
  <li>Para consultar usuários por filtros, utilize parâmetros de query na rota <code>GET /usuarios</code>.</li>
</ul>

<h2>👨‍💻 Autor</h2>
<p>Desenvolvido por <a href="https://github.com/zacks08">Isaac</a> 🚀</p>

<p><em>Sinta-se à vontade para contribuir, sugerir melhorias ou reportar issues!</em></p>

<hr>
<p style="font-size:small;">© 2025 GitHub Copilot. Este README foi gerado com o auxílio da inteligência artificial GitHub Copilot para fins educacionais e profissionais.</p>
