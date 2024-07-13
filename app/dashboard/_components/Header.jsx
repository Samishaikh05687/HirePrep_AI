"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { useEffect } from "react"
const Header = () => {

     const path = usePathname();
     useEffect(()=>{
      console.log(path);
     },[]) 

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
        <Image src={'/logo.svg' } alt='logo' height={100} width={160} />
        <ul className="hidden md:flex gap-6">
            <li className={`hover:text-[#4B70F5] hover: font-bold transition-all cursor-pointer ${path=='/dashboard'&&'text-[#4B70F5] font-bold'}`}>Dashboard</li>
            <li className={`hover:text-[#4B70F5] hover: font-bold transition-all cursor-pointer ${path=='/dashboard/questions'&&'text-[#4B70F5] font-bold'}`}>Questions</li>
            <li className={`hover:text-[#4B70F5] hover: font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade'&&'text-[#4B70F5] font-bold'}`}>Upgrade</li>
            <li className={`hover:text-[#4B70F5] hover: font-bold transition-all cursor-pointer ${path=='/dashboard/howitworks'&&'text-[#4B70F5] font-bold'}`}>How it works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header