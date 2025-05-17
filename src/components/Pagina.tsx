interface PaginaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

export default function Pagina({ children }: PaginaProps) {
  return (
    <div
      className="
      flex flex-col items-center justify-center min-h-screen
      bg-gradient-to-r from-zinc-900 to-black
      text-5xl font-black
    "
    >
      {children}
    </div>
  )
}
