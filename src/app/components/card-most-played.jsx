import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";

export default function CardMostPlayed({mostHoursPlayed, mostGameName, mostGameLogo, gameName, mostHoursOnRecord}) {
  return (
    <Card shadow="sm" isBlurred className="w-full p-0 rounded-lg">
      <CardBody className="flex flex-col gap-2">
        <div className="flex flex-row items-start justify-between text-base text-neutral-200">
          <p>Recent Activity</p>
          <p>{`${mostHoursPlayed} hours past 2 weeks`}</p>
        </div>
        <div className="flex min-[600px]:flex-row flex-col min-[600px]:justify-between items-center">
          <Image
            isBlurred
            shadow="sm"
            radius="sm"
            alt={mostGameName}
            className="w-full h-full max-h-20 aspect-video"
            src={mostGameLogo}
          />
          <div className="flex flex-col items-center justify-between min-[600px]:items-end gap-1">
            <p className="text-sm font-bold">{gameName}</p>
            <p className="text-neutral-200/80">{`${mostHoursOnRecord} hrs on record`}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
