import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'

export default function PaginaConsulta() {
  const router = useRouter()
  const tags = (router.query.tags ?? []) as string[]

  function renderizarTag(tag: string) {
    return (
      <div
        className="
        px-4 py-2 text-xl
        bg-indigo-500 text-white rounded-lg
      "
      >
        {tag}
      </div>
    )
  }

  return (
    <Pagina>
      <h1 className="text-6xl font-black mb-7">Consultas</h1>
      <div className="flex gap-5">{tags.map(renderizarTag)}</div>
    </Pagina>
  )
}
