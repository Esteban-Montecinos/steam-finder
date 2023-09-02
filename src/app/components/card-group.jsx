'use client'
import { Card, CardBody, CardFooter, Image, Link } from '@nextui-org/react'
import IframeInfo from './iframe-info'

export default function CardGroup({groupURL,groupName,avatarFull,groupSummary,memberCount,membersInGame,membersOnline,membersInChat}) {
  return (
    <Card shadow="sm" isBlurred className="w-full p-0 rounded-lg">
          <CardBody className="flex flex-col gap-2">
            <p className="text-base text-neutral-200">Favorite Group</p>
            <div className="flex min-[600px]:flex-row flex-col  min-[600px]:justify-between items-center">
              <Link
                href={`https://steamcommunity.com/groups/${groupURL}`}
                target="_blank"
              >
                <Image
                  isBlurred
                  shadow="sm"
                  radius="sm"
                  alt={groupName}
                  className="w-full h-full max-h-20 aspect-square"
                  src={avatarFull}
                />
              </Link>
              <div className="flex flex-col items-center justify-between min-[600px]:items-end gap-1">
                <Link
                  href={`https://steamcommunity.com/groups/${groupURL}`}
                  target="_blank"
                  className="text-sm font-bold text-neutral-200"
                >
                  {groupName}
                </Link>
                <IframeInfo
                  summary={groupSummary}
                  title="View more info"
                  titleModal="Overview"
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex-wrap justify-between w-full gap-2 text-neutral-300">
            <div className="flex flex-col gap-1">
              <p className="font-bold text-small text-neutral-200">
                {memberCount}
              </p>
              <p className="font-medium text-small">Members</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-small text-lime-400">
                {membersInGame}
              </p>
              <p className="font-medium text-small">In-Game</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-small text-sky-400">
                {membersOnline}
              </p>
              <p className="font-medium text-small">Online</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-small text-neutral-200">
                {membersInChat}
              </p>
              <p className="font-medium text-small">In Chat</p>
            </div>
          </CardFooter>
        </Card>
  )
}
