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
    { name: "Home", href: "/home" },

    { name: "Movies", href: "/home/movies" },
    {name: "Recently Added", href: "/home/recently" },
{name: "My List", href: "/home/user/list" }
]   

export default function Navbar() {
    const pathName = usePathname()
    return (
      <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex" >
          <div  className="flex items-center">
          <Link href="/home" className="flex ">
            <h1 className="text-4xl  text-gray-300 w-full">Watch Me!</h1>
          </Link>
     
        <ul className="lg:flex gap-x-4 ml-14 hidden">
               {links.map((link, idx) => (
                 <div key={idx}>
                     {pathName === link.href ? (
<li>
    <Link href={link.href} className="text-gray-300 font-semibold border border-rose-600 rounded-lg hover:text-gray-100">
      {link.name}
    </Link>
  
</li>
                     ): (

                        <li>
                            <Link href={link.href} className="text-gray-300 hover:text-gray-100">
                              {link.name}
                            </Link>
                        </li>

                     ) }
                     
                 </div>
               ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
         
         <UserNav/>
      </div>
      </div>
    )
}