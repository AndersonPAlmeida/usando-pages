import Pagina from '@/components/Pagina'
import { useRouter } from 'next/router'

export default function PaginaAgenda() {
  const router = useRouter()
  const { dia, mes, ano } = router.query
  return (
    <Pagina>
      <div>
        {dia}/{mes}/{ano}
      </div>
    </Pagina>
  )
}
