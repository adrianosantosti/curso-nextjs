import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components";
import { getSession } from "@/helpers/session";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Best Nintendo 64 fan website",
  description: "Curso NextJS",
};

export default async function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  const user = await getSession();
  // if (user && user.iat && user.exp) {
  //   console.log('iat', new Date(user.iat * 1000).toISOString());
  //   console.log('exp', new Date(user.exp * 1000).toISOString());
  // }
  // else{
  //   console.log("usuário não logado");
  // }

  return (
    <html lang="en">
      <body
        className={ `${geistSans.variable} ${geistMono.variable} bg-slate-890 text-slate-300`}
      >
        <Navbar user={user} />        
        {children}
      </body>
    </html>
  );
}
