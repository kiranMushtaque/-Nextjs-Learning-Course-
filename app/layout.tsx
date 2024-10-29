


// app/layout.tsx
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts"; // Yeh sahi import hai
import { ReactNode } from "react"; // Import ReactNode

interface RootLayoutProps {
  children: ReactNode; // Define children as ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ fontFamily: inter.fontFamily }}>{children}</body>
    </html>
  );
}
