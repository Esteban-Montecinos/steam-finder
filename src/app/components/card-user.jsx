"use client";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import { IconWifi2 } from "@tabler/icons-react";
import React from "react";

export default function CardUser({
  steamID64,
  privacy,
  steamID,
  onlineState,
  avatarFull,
  vacBanned,
  tradeBanState,
  isLimitedAccount,
}) {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader className="items-start justify-between w-full">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src={avatarFull}
            alt={`${steamID}'s Steam avatar full size`}
          />
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="flex flex-row items-center justify-center gap-1">
              <h4 className="text-base font-semibold leading-none text-default-600">
                {steamID}
              </h4>
              <h5 className="tracking-tight text-small text-default-400">
                {privacy}
              </h5>
            </div>
            <Link
              className="tracking-tight text-small text-default-400"
              href={`https://steamcommunity.com/profiles/${steamID64}`}
              underline="always"
              target="_blank"
            >
              {steamID64}
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-row items-center justify-center ${
            onlineState !== "offline" ? "text-emerald-600" : "text-pink-600"
          } `}
        >
          <p className="text-sm">
            <IconWifi2 />
          </p>
          <p className="text-sm">
            {" "}
            {onlineState !== "offline" ? "Online" : "Offline"}
          </p>
        </div>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter className="justify-between w-full gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {vacBanned}
          </p>
          <p className=" text-default-400 text-small">Vac Banned</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {tradeBanState}
          </p>
          <p className=" text-default-400 text-small">Trade Ban</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {isLimitedAccount}
          </p>
          <p className=" text-default-400 text-small">Limited Account</p>
        </div>
      </CardFooter>
    </Card>
  );
}
