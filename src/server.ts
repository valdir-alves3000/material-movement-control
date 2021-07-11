import express, { Request, Response, NextFunction } from 'express';


const app = express();

app.get('/', (req: Request, res: Response) => {
return res.send('Initial Router')
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT}`)
});