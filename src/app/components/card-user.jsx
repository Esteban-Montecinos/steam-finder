"use client";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Divider,
} from "@nextui-org/react";
import React from "react";
import IframeInfo from "./iframe-info";
import CardInGame from "./card-in-game";
import CardMostPlayed from "./card-most-played";
import CardGroup from "./card-group";
import { lines } from "./custom-summary";

export default function CardUser({
  steamID64,
  privacy,
  steamID,
  onlineState,
  stateMessage,
  avatarFull,
  vacBanned,
  tradeBanState,
  isLimitedAccount,
  publicProfile,
}) {
  const [state, message] = stateMessage.split("<br/>");
  

  return (
    <Card
      isBlurred
      className={`w-full max-w-xl p-2 bg-gradient-to-tl from-lime-900 via-lime-500/20 to-lime-900 ${
        onlineState === "in-game"
          ? "text-lime-400"
          : onlineState === "online"
          ? "text-sky-400"
          : "text-neutral-400"
      }`}
    >
      <CardHeader className="items-start justify-between w-full p-2">
        <div className="flex justify-start gap-5">
          <Avatar
            color={
              onlineState === "in-game"
                ? "success"
                : onlineState === "online"
                ? "primary"
                : "default"
            }
            isBordered
            radius="sm"
            size="lg"
            src={avatarFull}
            alt={`${steamID}'s Steam avatar full size`}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <h4 className="text-base font-semibold leading-none">{steamID}</h4>
            <p className="text-xs">{publicProfile?.realname}</p>
            <IframeInfo
              summary={lines(publicProfile?.summary)}
              title="View more info"
              titleModal="Info"
            />
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Link
            className="text-xs tracking-tight text-neutral-50"
            href={`https://steamcommunity.com/profiles/${steamID64}`}
            underline="always"
            target="_blank"
          >
            {steamID64}
          </Link>
          <span className="text-sm font-semibold text-neutral-400">
            {privacy}{" "}
          </span>
        </div>
      </CardHeader>
      <CardBody className="items-start justify-between w-full p-2">
        {/** in-game */}
        {onlineState === "in-game" && publicProfile && (
          <CardInGame
            gameLink={publicProfile?.gameLink}
            gameLogo={publicProfile?.gameLogo}
            gameName={publicProfile?.gameName}
            state={state}
          />
        )}
        {publicProfile?.mostGameName && publicProfile && (
          <>
        <Divider className="my-4" />
          <CardMostPlayed
            mostHoursPlayed={publicProfile?.mostHoursPlayed}
            mostGameName={publicProfile?.mostGameName}
            mostGameLogo={publicProfile?.mostGameLogo}
            gameName={publicProfile?.gameName}
            mostHoursOnRecord={publicProfile?.mostHoursOnRecord}
          />
          </>
        )}
        {publicProfile?.groupName && publicProfile && (
          <>
        <Divider className="my-4" />
          <CardGroup
          groupURL={publicProfile?.groupURL}
          groupName={publicProfile?.groupName}
          groupSummary={lines(publicProfile?.groupSummary)}
          avatarFull={publicProfile?.avatarFull}
          memberCount={publicProfile?.memberCount}
          membersInGame={publicProfile?.membersInGame}
          membersOnline={publicProfile?.membersOnline}
          membersInChat={publicProfile?.membersInChat}
        />
        </>
        )}
      </CardBody>
      <CardFooter className="justify-between w-full gap-2 text-neutral-200">
        <div className="flex gap-1">
          <p className="font-semibold text-small">{vacBanned}</p>
          <p className="text-small">Vac Banned</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-small">{tradeBanState}</p>
          <p className="text-small">Trade Ban</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-small">{isLimitedAccount}</p>
          <p className="text-small">Limited Account</p>
        </div>
      </CardFooter>
    </Card>
  );
}
