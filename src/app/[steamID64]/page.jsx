import { redirect } from "next/navigation";
import { getProfile } from "../service/steam";
import CardUser from "../components/card-user";
import { mockup } from "../service/mockup/api";

export default async function page({ params: { steamID64 } }) {
  const profile = await getProfile(steamID64);
  //const profile = mockup;
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
