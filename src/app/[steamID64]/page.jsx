import { redirect } from "next/navigation";
import { getProfile } from "../service/steam";
import CardUser from "../components/card-user";
import {
  mockupPublicInGame,
  mockupPublicOnline,
  mockupPublicOffline,
  mockupPrivateInGame,
  mockupPrivateOnline,
  mockupPrivateOffline,
} from "../service/mockup/api";

export default async function page({ params: { steamID64 } }) {
  const profile = await getProfile(steamID64);
  //const profile = mockupPublicInGame;
  //const profile = mockupPublicOnline;
  //const profile = mockupPublicOffline;
  //const profile = mockupPrivateInGame;
  //const profile = mockupPrivateOnline;
  //const profile = mockupPrivateOffline;
  if (!profile) {
    redirect("/");
  }
  return (
    <CardUser
      steamID64={profile.steamID64}
      privacy={profile.privacy}
      steamID={profile.steamID}
      onlineState={profile.onlineState}
      stateMessage={profile.stateMessage}
      avatarFull={profile.avatarFull}
      vacBanned={profile.vacBanned}
      tradeBanState={profile.tradeBanState}
      isLimitedAccount={profile.isLimitedAccount}
      publicProfile={profile.public}
    />
  );
}
