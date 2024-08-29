import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignIn from "@/app/components/GithubSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

export default async function Login() {
    const session = await getServerSession(authOptions)

    if(session) {
        return redirect('/home')
    }
    return (
     <div className="flex flex-col items-center justify-center ">
      <div className="  py-10 px-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold text-gray-700 text-center">Continue with:</h1>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            <GithubSignIn />
            <GoogleSignInButton />
        </div>
    </div>
</div>
    )
}