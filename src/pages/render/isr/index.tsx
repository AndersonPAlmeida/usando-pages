import Pagina from '@/components/Pagina'

interface Produto {
  id: number
  nome: string
  preco: number
}

interface PaginaProdutosProps {
  produtos: Produto[]
  data: string
}

export async function getStaticProps() {
  const resposta = await fetch('http:\\localhost:3000/api/produtos')
  const produtos = await resposta.json()
  const data = new Date().toLocaleTimeString('pt-BR')

  return {
    props: {
      produtos,
      data,
    },
    revalidate: 60, // 1 hora
  }
}
export default function PaginaISR({ produtos, data }: PaginaProdutosProps) {
  return (
    <Pagina>
      <h1>Renderização Incremental (ISR)</h1>
      <h2>Gerado Em {data}</h2>
      <ul>
        {produtos.map((produto) => {
          return (
            <li key={produto.id} className="text-lg">
              {produto.id} - {produto.nome} = {produto.preco}
            </li>
          )
        })}
      </ul>
    </Pagina>
  )
}
