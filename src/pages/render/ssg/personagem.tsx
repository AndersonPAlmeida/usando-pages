import Pagina from '@/components/Pagina'

interface PaginaPersonagemProps {
  personagem: {
    birth_year: string
    eye_color: string
    gender: string
    hair_color: string
    height: string
    mass: string
    name: string
    skin_color: string
    created: string
    edited: string
  }
}

export async function getStaticProps() {
  const resposta = await fetch('https://swapi.py4e.com/api/people/1/')
  const personagem = await resposta.json()

  return {
    props: {
      personagem,
    },
  }
}

export default function PaginaPersonagem(props: PaginaPersonagemProps) {
  console.log(props.personagem)

  return (
    <Pagina>
      <div>{props.personagem.name}</div>
      <div>{props.personagem.birth_year}</div>
    </Pagina>
  )
}
