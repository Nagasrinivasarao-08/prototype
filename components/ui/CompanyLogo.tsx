import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CompanyLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export function CompanyLogo({ className = "", variant = "dark" }: CompanyLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Official Aspire Software Consultancy Logo Image */}
      <div className="relative h-9 w-32 sm:w-36 flex items-center shrink-0">
        <Image
          src="/images/logo.png"
          alt="Aspire Software Consultancy Logo"
          width={180}
          height={48}
          className="object-contain h-full w-auto"
          priority
        />
      </div>
    </Link>
  );
}
