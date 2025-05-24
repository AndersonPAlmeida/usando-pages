import Link from 'next/link'
import { ReactNode } from 'react'

interface BotaoLinkProps {
  href: string
  children?: ReactNode
}

export default function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link href={props.href}>
      <div className="bg-blue-500 rounded-lg px-4 py-2 text-base">
        {props.children}
      </div>
    </Link>
  )
}
