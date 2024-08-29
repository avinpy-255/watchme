import Image from 'next/image';
import logo from "../../public/icon.png"
import {ReactNode} from 'react';


export default function AuthLayout({children}: {children: ReactNode}) {
    return (
<div className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 flex items-center justify-center">
    <div className="flex flex-col items-center justify-center w-full max-w-md px-4">
        <div className="flex justify-center items-center mb-8">
            <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="block"
            />
        </div>
        {children}
    </div>
</div>
    )
}