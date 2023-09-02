import { ImageResponse } from "next/server";
import { getPublicInfo } from "../service/steam";

export const runtime = "edge";
export const contentType = "image/png";

export default async function Image({ params: { steamID64 } }) {
  const profile = await getPublicInfo(steamID64);
  //const profile = mockupPrivateOffline;
  //const profile = mockupPrivateOnline;
  //const profile = mockupPrivateInGame;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "32px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgb(54 83 20)",
          lineHeight: "20px",
          padding: "40px",
        }}
      >
        <div
          style={{
            color: "rgb(163 230 53)",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <img
              style={{ display: "flex",borderRadius: "16px" }}
              src={profile?.avatarFull}
              alt={`${profile?.steamID}'s Steam avatar full size`}
              width="240"
              height="240"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p
                style={{
                    display: "flex",
                  padding: "0",
                  margin: "0",
                  fontSize: "40px",
                }}
              >
                {profile?.steamID}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    padding: "0",
                    margin: "0",
                    opacity: "0.6",
                    fontSize: "24px",
                  }}
                >
                  {profile?.stateMessage.split("<br/>")[0]}
                </p>
                <p
                  style={{
                    display: "flex",
                    padding: "0",
                    margin: "0",
                    fontSize: "24px",
                  }}
                >
                  {profile?.stateMessage.split("<br/>")[1]}
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
                display: "flex",
              color: "rgb(229 229 229)",
              padding: "0",
              margin: "0",
              fontSize: "40px",
            }}
          >
            {profile?.privacy}
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
            <p style={{ display: "flex",fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile?.vacBanned}
            </p>
            <p style={{ display: "flex",fontSize: "2.75rem" }}>Vac Banned</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <p style={{ display: "flex",fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile?.tradeBanState}
            </p>
            <p style={{ display: "flex",fontSize: "2.75rem" }}>Trade Ban</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            <p style={{ display: "flex",fontSize: "3rem", padding: "0", margin: "0" }}>
              {profile?.isLimitedAccount}
            </p>
            <p style={{ display: "flex",fontSize: "2.75rem" }}>Limited Account</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 500,
    }
  );
}
