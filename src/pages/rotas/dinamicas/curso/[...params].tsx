import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'

export default function PaginaCurso() {
  const router = useRouter()
  const [curso, aula] = (router.query.params ?? []) as string[]

  return (
    <Pagina>
      <div>
        <p>Curso: {curso}</p>
        <p>Aula: {aula ?? 1}</p>
      </div>
    </Pagina>
  )
}
