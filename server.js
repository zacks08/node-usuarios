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


app.use(express.json())

app.post('/usuarios',async (req, res) => { 
    
await   prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.query)
})

app.get('/usuarios',async (req, res) => {
  let users = []
 if(req.query){
    users=await prisma.user.findMany({
      where:{
        name: req.query.name,
        email: req.query.email,
        age: req.query.age
    },
    })

 }else{
  const users = await prisma.user.findMany()

 }




    res.status(200).json(users) 
});

app.put('/usuarios/:id',async (req, res) => { 
    
  await   prisma.user.update(
    {     where:{
      id:req.params.id

    },
          data: {
              email: req.body.email,
              name: req.body.name,
              age: req.body.age
          }
      })
  
      res.status(201).json(req.query)
  })

  app.delete('/usuarios/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Deleta o usuário com base no ID
      const deletedUser = await prisma.user.delete({
        where: {
          id: req.params.id 
        },
      });
  
      res.status(200).json({ message: 'Usuário deletado com sucesso', user: deletedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao deletar o usuário' });
    }
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