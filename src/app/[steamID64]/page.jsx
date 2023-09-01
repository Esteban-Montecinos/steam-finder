import { redirect } from "next/navigation";
import { getProfile } from "../service/steam";
import CardUser from "../components/card-user";

export default async function page({ params: { steamID64 } }) {
  const profile = await getProfile(steamID64);
  if (!profile) {
    redirect("/");
  }
  return (
    <CardUser
      steamID64={profile.steamID64}
      privacy={profile.privacy}
      steamID={profile.steamID}
      onlineState={profile.onlineState}
      avatarFull={profile.avatarFull}
      vacBanned={profile.vacBanned}
      tradeBanState={profile.tradeBanState}
      isLimitedAccount={profile.isLimitedAccount}
    />
  );
}
