"use client";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const path = usePathname();
  
  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <div className="flex">
        <Image src={'/logo.svg'} alt='logo' height={40} width={40} />
        <span className="font-light text-[15px] mt-2 ">HirePrep</span>
      </div>

      <ul className="hidden md:flex gap-6">
        <li className={`hover:text-[#4B70F5] font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-[#4B70F5] font-bold'}`}>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li className={`hover:text-[#4B70F5] font-bold transition-all cursor-pointer ${path === '/dashboard/question' && 'text-[#4B70F5] font-bold'}`}>
          <Link href="/dashboard/question">Questions</Link>
        </li>
        <li className={`hover:text-[#4B70F5] font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-[#4B70F5] font-bold'}`}>
          <Link href="/dashboard/upgrade">Upgrade</Link>
        </li>
        <li className={`hover:text-[#4B70F5] font-bold transition-all cursor-pointer ${path === '/dashboard/howitworks' && 'text-[#4B70F5] font-bold'}`}>
          <Link href="/dashboard/howitworks">How it works?</Link>
        </li>
      </ul>
      <UserButton />
    </div>
  );
};

export default Header;
