import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

const app = express();
const users = []

app.use(express.json())

app.post('/usuarios',async (req, res) => { 
    
await   prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users) 
});

app.listen(3000)

/* Criar api de usuarios 
    criar usuario
   listar usuarios
   listar usuario
   deletar usuario


   usuario:isaac
   senha:sarah2909
*/