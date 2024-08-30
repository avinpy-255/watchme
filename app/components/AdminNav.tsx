'use client'

import Image from "next/image";
import Link from "next/link";
import icon from '../../public/icon.png'
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "./UserNav";


interface linkProps {
    name: string;
    href: string;
}

const links: linkProps[] = [
    { name: "Upload", href: "/admin/upload" },
 
]   

export default function Navbar() {
    const pathName = usePathname()
    return (
      <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex" >
          <div  className="flex items-center">
          <Link href="/admin" className="flex ">
            <h1 className="text-4xl  text-gray-300 w-full">GOD MODE</h1>
          </Link>
     
        <ul className="lg:flex gap-x-4 ml-14 hidden">
               {links.map((link, idx) => (
                 <div key={idx}>
                     {pathName === link.href ? (
<li>
    <Link href={link.href} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      {link.name}
    </Link>
  
</li>
                     ): (

                        <li>
                            <Link href={link.href} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                              {link.name}
                            </Link>
                        </li>

                     ) }
                     
                 </div>
               ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
         <Search className="w-5 h-5 text-gray-800 cursor-pointer"/>
         <Bell className="h-5 w-5 text-gray-800 cursor-pointer"/>
         <UserNav/>
      </div>
      </div>
    )
}