import * as cheerio from "cheerio";
import Image from "next/image";
import { redirect } from 'next/navigation'

async function getProfile(steamID64) {
  const xml = await fetch(
    `https://steamcommunity.com/profiles/${steamID64}/?xml=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.text();
    })
    .catch((error) => {
      console.error(error);
    });

  const $ = cheerio.load(xml, { xml: true });
  const error = $("error").text();
  if (error) return undefined
  const perfil = {};
  perfil.privacy = $("privacyState").text();
  perfil.steamID = $("steamID").text();
  perfil.onlineState = $("onlineState").text();
  perfil.avatarFull = $("avatarFull").first().text();
  perfil.vacBanned = $("vacBanned").text();

  return perfil;
}
export default async function page({ params: { steamID64 } }) {
  const profile = await getProfile(steamID64);
  if (!profile) {
    redirect('/')
  }
  return (
    <article>
      <h1>{profile.privacy}</h1>
      <h2>{profile.steamID}</h2>
      <h2>{profile.onlineState}</h2>
      <Image src={profile.avatarFull} alt={profile.steamID} width={200} height={200}/>
      <h2>{profile.vacBanned}</h2>
    </article>
  );
}
