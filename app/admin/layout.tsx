import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function AdminPage({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  
  if (session?.user.role !== 'ADMIN') {
    return redirect("/home"); 
    
  }

  return (
    <>
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1>Hi, Admin</h1>
        {children}
      </main>
    </>
  );
}