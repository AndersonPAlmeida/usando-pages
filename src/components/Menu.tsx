import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu() {
  const router = useRouter()

  function renderizarItem(url: string, texto: string, locale: string) {
    const ativo = router.asPath === url

    return (
      <li
        className={`
        ${ativo ? 'bg-purple-800' : 'bg-purple-500'}
        px-4 py-3 rounded-lg text-lg
      `}
      >
        <Link href={url} locale={locale}>
          {texto}
        </Link>
      </li>
    )
  }

  return (
    <ul className="flex gap-3 flex-wrap">
      {renderizarItem('/rotas/basicas', 'Rota Básica', 'pt')}
      {renderizarItem('/rotas/basicas/aninhada', 'Rota Aninhada', 'pt')}
      {renderizarItem('/rotas/dinamicas/produto/3', 'Produto #3', 'pt')}
      {renderizarItem('/rotas/dinamicas/2025/3/21/agenda', 'Agenda', 'pt')}
      {renderizarItem('/rotas/dinamicas/curso/react/123', 'Curso React', 'pt')}
      {renderizarItem(
        '/rotas/dinamicas/consulta/js/css/html',
        'Consulta',
        'pt',
      )}
      {renderizarItem('/rotas/i18n/saudacao', 'Saudação PT', 'pt')}
      {renderizarItem('/rotas/i18n/saudacao', 'Saudação EN', 'en')}
      {renderizarItem('/render/ssg/simples', 'SSG Simples', 'en')}
      {renderizarItem('/render/ssg/filme', 'Filme SSG', 'pt')}
      {renderizarItem('/render/ssg/personagem', 'Personagem SW', 'pt')}
      {renderizarItem('/render/ssg/produtos', 'Produtos', 'pt')}
    </ul>
  )
}
