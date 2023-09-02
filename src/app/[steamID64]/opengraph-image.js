import { ImageResponse } from "next/server";
import { getPublicInfo } from "../service/steam";
import {
  mockupPrivateInGame,
  mockupPrivateOffline,
  mockupPrivateOnline,
} from "../service/mockup/api";

export const runtime = "edge";
export const contentType = "image/png";

export default async function Image({ params: { steamID64 } }) {
  //const profile = await getPublicInfo(steamID64);
  //const profile = mockupPrivateOffline;
  //const profile = mockupPrivateOnline;
  const profile = mockupPrivateInGame;
  const [state, message] = profile.stateMessage.split("<br/>");
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: `${
            profile?.onlineState === "in-game"
              ? "rgb(54 83 20)"
              : profile?.onlineState === "online"
              ? "rgb(12 74 110)"
              : "rgb(23 23 23)"
          }`,
          lineHeight: "1.25rem",
          padding: "2.5rem",
        }}
      >
        <div
          style={{
            color: `${
              profile?.onlineState === "in-game"
                ? "rgb(163 230 53)"
                : profile?.onlineState === "online"
                ? "rgb(56 189 248)"
                : "rgb(163 163 163)"
            }`,
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1.5rem",
            }}
          >
            <img
              style={{ borderRadius: "1rem" }}
              src={profile.avatarFull}
              alt={`${profile.steamID}'s Steam avatar full size`}
              width="240"
              height="240"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  fontSize: "2.5rem",
                }}
              >
                {profile.steamID}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:"flex-end",
                  gap: "1rem",
                }}
              >
                <p
                  style={{
                    padding: "0",
                    margin: "0",
                    opacity: "0.6",
                    fontSize: "1.5rem",
                  }}
                >
                  {state}
                </p>
                {message && (
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      fontSize: "1.5rem",
                    }}
                  >
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <p
            style={{
              color: "rgb(229 229 229)",
              padding: "0",
              margin: "0",
              fontSize: "2.5rem",
            }}
          >
            {profile.privacy}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "rgb(229 229 229)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <p style={{ fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile.vacBanned}
            </p>
            <p style={{ fontSize: "2.75rem" }}>Vac Banned</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <p style={{ fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile.tradeBanState}
            </p>
            <p style={{ fontSize: "2.75rem" }}>Trade Ban</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <p style={{ fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile.isLimitedAccount}
            </p>
            <p style={{ fontSize: "2.75rem" }}>Limited Account</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
