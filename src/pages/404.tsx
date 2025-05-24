import Pagina from '@/components/Pagina'

export default function naoEncontrado() {
  return (
    <Pagina>
      <h1 className="text-8xl">404</h1>
      <p className="text-base text-zinc-500">Ops... Página não encontrada!</p>
    </Pagina>
  )
}
