import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: 1, nome: 'Caneta', preco: 9.99 },
    { id: 2, nome: 'Lápis', preco: 3.49 },
    { id: 3, nome: 'Borracha', preco: 2.99 },
    { id: 4, nome: 'Caderno', preco: 15.9 },
    { id: 5, nome: 'Mochila', preco: 89.99 },
    { id: 6, nome: 'Marca-texto', preco: 6.79 },
    { id: 7, nome: 'Régua', preco: 4.5 },
    { id: 8, nome: 'Calculadora', preco: 45.0 },
    { id: 9, nome: 'Agenda', preco: 21.99 },
    { id: 10, nome: 'Estojo', preco: 25.49 },
  ])
}
