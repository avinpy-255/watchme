import Image from 'next/image';
import logo from "../../public/icon.png"
import {ReactNode} from 'react';


export default function AuthLayout({children}: {children: ReactNode}) {
    return (
       <div  className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 ">
         <div className='relative flex h-screen w-screen flex-col 
          md:items-center md:justify-center md:bg-transparent'>
            <div className='mt-24 rounded   py-0 px-0 '>
              <Image
                src={logo}
                alt='Logo'
                width={100}
                height={100}
                className='items-center'
              />
            </div>
           
            
            {children}
        </div>
       </div>
    )
}