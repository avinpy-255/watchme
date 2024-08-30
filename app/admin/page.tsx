import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";




export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (session?.user.role !== 'ADMIN') {

    return redirect("/home");
    
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="min-h-[500px]  flex flex-col justify-center border border-dashed rounded-lg space-y-4">
        <div className="p-10">
          
        </div>
      </div>
    </div>
  );
}