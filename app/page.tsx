import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts"; // Ensure yeh sahi path hai
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Lusitana Font Ka Text */}
      <p className={`${lusitana.fontFamily}`}>
        Yahan aapka text hoga jo Lusitana font mein hoga.
      </p>

      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Desktop Hero Image */}
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />

        {/* Mobile Hero Image */}
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="md:hidden"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>
    </main>
  );
}
