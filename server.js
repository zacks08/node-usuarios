import express from 'express';

const app = express();
const user={}

app.use(express.json())
app.post('/usuarios', (req, res) => {

    console.log(req.body)

     res.send('AQ DEU BOM')
  
})

app.get('/usuarios', (req, res) => {;
    res.send('Usuários listados com sucesso');
});

app.listen(3000)

/* Criar api de usuarios 
    criar usuario
   listar usuarios
   listar usuario
   deletar usuario
*/