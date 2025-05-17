import Menu from './Menu'

interface PaginaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div
      className="
      flex flex-col min-h-screen
      bg-gradient-to-r from-zinc-900 to-black
      text-5xl font-black
    "
    >
      <nav
        className="
        bg-black p-3
        border border-zinc-700
      "
      >
        <Menu />
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}
