import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function HomeLayout({children}: {children: ReactNode}) {
    const session = await getServerSession(authOptions)

    if(!session) {
        return redirect("/login")
    }
    return (
       <div>{children}</div>
            
    )
    
}
