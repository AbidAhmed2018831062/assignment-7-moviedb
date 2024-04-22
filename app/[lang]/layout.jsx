import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navigation from "@/app/components/common/header/Navigation.jsx"
import Footer from "@/app/components/common/footer/Footer"
import { LangProvider } from "../contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All Movies",
  description: "Created by Abid Ahmed",
};

export default function RootLayout({
  children,
  params
}){

  return (
    <html lang="en">
      <body className={inter.className}>
        <LangProvider>
        	 <Navigation/>
        {children}
        <Footer lang={params.lang}/>
        </LangProvider>
        </body>
    </html>
  );
}
