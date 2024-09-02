
import GithubSignIn from "@/app/components/GithubSigninButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

export default async function SignUp() {
    const session = await getServerSession(authOptions)

    if(session) {
        return redirect('/home')
    }
    return (
        <div className="mt-20 rounded py-10 px-6 md:mt-0 md:max-w-sm md:px-14 ">
             <h1  className="text-xl font-semibold text-gray-700 text-center">SIGN UP</h1>
             <h1  className="text-xl font-semibold text-gray-700 text-center">Continue with:</h1>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6 ">
               <GithubSignIn/>
               <GoogleSignInButton/>
            </div>
        </div>
    )
}