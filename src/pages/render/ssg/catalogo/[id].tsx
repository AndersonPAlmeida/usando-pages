import BotaoLink from '@/components/BotaoLink'
import Filme, { FilmeProps } from '@/components/Filme'
import Pagina from '@/components/Pagina'
import filmes from '@/data/filmes'

interface getStaticPathsProps {
  params: {
    id: string
  }
}

interface PaginaFilmesProps {
  filme: FilmeProps
  numero: number
  total: number
  idAnterior: string
  proximoId: string
}

export function getStaticPaths() {
  const paths = filmes.slice(0, 5).map((filme) => {
    return { params: { id: filme.id } }
  })

  return { paths, fallback: true }
}

export function getStaticProps({ params }: getStaticPathsProps) {
  const i = filmes.findIndex((filme) => filme.id === params.id)

  return {
    props: {
      filme: filmes[i],
      numero: i + 1,
      total: filmes.length,
      idAnterior: filmes[i - 1]?.id ?? null,
      proximoId: filmes[i + 1]?.id ?? null,
    },
  }
}

export default function PaginCatalogo(props: PaginaFilmesProps) {
  const { filme, idAnterior, numero, proximoId, total } = props

  if (!filme) {
    return null
  }

  return (
    <Pagina>
      <Filme
        id={filme.id}
        titulo={filme.titulo}
        subtitulo={filme.subtitulo}
        imagem={filme.imagem}
        descricao={filme.descricao}
      />
      <div className="flex gap-5 items-center justify-center p-5">
        {idAnterior && (
          <BotaoLink href={`/render/ssg/catalogo/${idAnterior}`}>
            Anterior
          </BotaoLink>
        )}

        <div className="flex gap-2 text-xl items-center">
          <span>{numero}</span>
          <span className="text-base text-zinc-500">de</span>
          <span>{total}</span>
        </div>

        {proximoId && (
          <BotaoLink href={`/render/ssg/catalogo/${proximoId}`}>
            Próximo
          </BotaoLink>
        )}
      </div>
    </Pagina>
  )
}
