import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GithubSignIn from "@/app/components/GithubSigninButton";

export default function Login() {
    return (
        <div className="mt-20 rounded py-10 px-6 md:mt-0 md:max-w-sm md:px-14 ">
        <form>
           <h1 className="text-3xl text-center font-lora">Login</h1>
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
               <Button type="submit" className="w-full bg-indigo-400 hover:bg-indigo-700">login</Button>
           </div>
        </form>
        <div className="mt-1">
            <p className="text-xs text-center">Dont have account!  <Link href="/sign-up" className="text-indigo-400 hover:text-indigo-700"> Create one</Link></p>
        </div>

        <div className="flex w-full justify-center items-center gap-x-3 mt-6 ">
           <GithubSignIn/>
           
        </div>
    </div>
    )
}