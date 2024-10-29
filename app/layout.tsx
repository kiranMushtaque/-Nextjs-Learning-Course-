



import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts"; 
import { ReactNode } from "react"; 

interface  RootLayoutProps {
  children: ReactNode; 

   
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <body style={{ fontFamily: inter.fontFamily }}>{children} </body>
    </html>
  );
}
