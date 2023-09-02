import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import InputSearch from "./components/input-search";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steam Finder",
  description: "A Steam Finder app",
};

export default function RootLayout({ children }) {
  async function handleSumbit(formData) {
    'use server'
    const steamID64 = formData.get('steamID64')
    redirect(`/${steamID64}`)
  }
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black bg-gradient-to-tl from-black via-neutral-600/20 to-black`}>
        <Providers>
        <main className="flex flex-col items-center justify-center max-w-xl min-h-screen gap-4 p-4 m-auto">
      Steam Finder
      <form action={handleSumbit} className="w-full">
        <InputSearch/>
      </form>
        {children}
    </main>
        </Providers>
      </body>
    </html>
  );
}
