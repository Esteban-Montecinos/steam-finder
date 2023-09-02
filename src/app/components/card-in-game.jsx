'use client'

import { Image, Link } from "@nextui-org/react"

export default function CardInGame({gameLink, gameLogo, gameName, state}) {
  return (
    <Link
          href={gameLink}
          target="_blank"
          className="flex min-[600px]:flex-row flex-col items-center justify-start w-full gap-4 p-4 rounded-lg bg-lime-950/80 text-lime-500"
        >
          <Image
            isZoomed
            radius="sm"
            src={gameLogo}
            alt={`Game logo of ${gameName}`}
            width="160"
            height="90"
          />
          <div className="flex flex-col">
            <h3 className="text-xs">{state}</h3>
            <h2 className="text-sm">{gameName}</h2>
          </div>
        </Link>
  )
}
