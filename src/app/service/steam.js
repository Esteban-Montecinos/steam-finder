import * as cheerio from "cheerio";
export async function getProfile(steamID64) {
  const profiles = await fetch(
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

  const $ = cheerio.load(profiles, { xml: true });
  const error = $("error").text();
  if (error){
    const name = await fetch(
      `https://steamcommunity.com/id/${steamID64}/?xml=1`
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
    const i = cheerio.load(name, { xml: true });
  const error = i("error").text();
  if (error) return undefined;
  const id = {};
  id.privacy = i("privacyState").text();
  id.steamID = i("steamID").text();
  id.onlineState = i("onlineState").text();
  id.avatarFull = i("avatarFull").first().text();
  id.vacBanned = i("vacBanned").text();
  id.tradeBanState = i("tradeBanState").text();
  id.isLimitedAccount = i("isLimitedAccount").text();
  if (id.privacy === "public") {
  }
  return id;
  }

  const perfil = {};
  perfil.privacy = $("privacyState").text();
  perfil.steamID = $("steamID").text();
  perfil.onlineState = $("onlineState").text();
  perfil.avatarFull = $("avatarFull").first().text();
  perfil.vacBanned = $("vacBanned").text();
  perfil.tradeBanState = $("tradeBanState").text();
  perfil.isLimitedAccount = $("isLimitedAccount").text();
  if (perfil.privacy === "public") {
  }
  return perfil;
}
