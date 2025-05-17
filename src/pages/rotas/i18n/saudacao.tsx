import Pagina from '@/components/Pagina'
import textos from '@/data/textos'
import { useRouter } from 'next/router'

export default function PaginaSaudacao() {
  const router = useRouter()
  return (
    <Pagina>
      <div>{textos[router.locale ?? 'pt'].saudacao}</div>
    </Pagina>
  )
}
