import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
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
            <form method="post " action="/api/auth/signin">
               <h1 className="text-3xl text-center font-lora">Sign Up</h1>
               <div className="space-y-4 mt-5">
                   <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className=" placeholder:text-xs placeholder:text-grey-400 w-full inline-block"                   
                   />
                     <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className=" placeholder:text-xs placeholder:text-grey-400 w-full inline-block"                   
                   />
                   <Button type="submit" className="w-full bg-indigo-400 hover:bg-indigo-700">Sign Up</Button>
               </div>
            </form>
            <div className="mt-1">
                <p className="text-xs text-center">Already have an account? <Link href="/login" className="text-indigo-400 hover:text-indigo-700">Log In</Link></p>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6 ">
               <GithubSignIn/>
        
            </div>
        </div>
    )
}