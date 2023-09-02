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
  if (error) {
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
    // public information of the private profile
    id.steamID64 = i("steamID64").text();
    id.privacy = i("privacyState").text();
    id.steamID = i("steamID").text();
    id.onlineState = i("onlineState").text();
    id.stateMessage = i("stateMessage").text();
    id.avatarFull = i("avatarFull").first().text();
    id.vacBanned = i("vacBanned").text();
    id.tradeBanState = i("tradeBanState").text();
    id.isLimitedAccount = i("isLimitedAccount").text();
    if (id.privacy === "public") {
      const publicId = {};
      //public profile information
      publicId.memberSince = i("memberSince").text();
      publicId.realname = i("realname").first().text();
      publicId.summary = i("summary").first().text();
      //game info
      publicId.gameLink = i("inGameInfo gameLink").first().text();
      publicId.gameLogo = i("inGameInfo gameLogo").first().text();
      //most played game
      publicId.mostGameName = i("mostPlayedGame gameName").first().text();
      publicId.mostGameLink = i("mostPlayedGame gameLink").first().text();
      publicId.mostGameLogo = i("mostPlayedGame gameLogo").first().text();
      publicId.mostHoursPlayed = i("mostPlayedGame hoursPlayed").first().text();
      publicId.mostHoursOnRecord = i("mostPlayedGame hoursOnRecord")
        .first()
        .text();
      // primary group
      publicId.groupName = i("groupName").first().text();
      publicId.groupURL = i("groupURL").first().text();
      publicId.groupSummary = i("group summary").first().text();
      publicId.avatarFull = i("group avatarFull").first().text();
      publicId.memberCount = i("group memberCount").first().text();
      publicId.membersInChat = i("group membersInChat").first().text();
      publicId.membersInGame = i("group membersInGame").first().text();
      publicId.membersOnline = i("group membersOnline").first().text();
      id.public = publicId;
    }
    return id;
  }

  const perfil = {};
  perfil.steamID64 = $("steamID64").text();
  perfil.privacy = $("privacyState").text();
  perfil.steamID = $("steamID").text();
  perfil.onlineState = $("onlineState").text();
  perfil.stateMessage = $("stateMessage").text();
  perfil.avatarFull = $("avatarFull").first().text();
  perfil.vacBanned = $("vacBanned").text();
  perfil.tradeBanState = $("tradeBanState").text();
  perfil.isLimitedAccount = $("isLimitedAccount").text();
  if (perfil.privacy === "public") {
    //public profile information
    const publicPerfil = {};
    publicPerfil.memberSince = $("memberSince").text();
    publicPerfil.realname = $("realname").first().text();
    publicPerfil.summary = $("summary").first().text();
    //game info
    publicPerfil.gameName = $("inGameInfo gameName").first().text();
    publicPerfil.gameLink = $("inGameInfo gameLink").first().text();
    publicPerfil.gameLogo = $("inGameInfo gameLogo").first().text();
    //most played game
    publicPerfil.mostGameName = $("mostPlayedGame gameName").first().text();
    publicPerfil.mostGameLink = $("mostPlayedGame gameLink").first().text();
    publicPerfil.mostGameLogo = $("mostPlayedGame gameLogo").first().text();
    publicPerfil.mostHoursPlayed = $("mostPlayedGame hoursPlayed")
      .first()
      .text();
    publicPerfil.mostHoursOnRecord = $("mostPlayedGame hoursOnRecord")
      .first()
      .text();
    // primary group
    publicPerfil.groupName = $("groupName").first().text();
    publicPerfil.groupURL = $("groupURL").first().text();
    publicPerfil.groupSummary = $("group summary").first().text();
    publicPerfil.avatarFull = $("group avatarFull").first().text();
    publicPerfil.memberCount = $("group memberCount").first().text();
    publicPerfil.membersInChat = $("group membersInChat").first().text();
    publicPerfil.membersInGame = $("group membersInGame").first().text();
    publicPerfil.membersOnline = $("group membersOnline").first().text();
    perfil.public = publicPerfil;
  }
  return perfil;
}