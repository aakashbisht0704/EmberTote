import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IconBrandGoogle } from "@tabler/icons-react";
import { auth, signIn } from "@/auth";

export default async function Login() {

    const session = await auth
    console.log('********',session)

    return(
        <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-back">

            <h1 className="text-4xl font-bold">Ember<span className="text-primary">Tote</span></h1>

            <form className="my-8">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                id="email" 
                placeholder="user@email.com" 
                type="email" 
                name="email">

                </Input>

                <Label htmlFor="password">Password</Label>
                <Input 
                id="password" 
                placeholder="********"
                type="password" 
                name="password">

                </Input>

                <Button className="mt-3">Login &rarr;</Button>

                <p>Don't have an account?<Link href="/register"><span className="text-primary">Sign Up</span></Link></p>
            </form>
            <form action={async()=>{
                "use server"
                await signIn("google")
            }}>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"></div>

                <section className="flex flex-col space-y-4">
                        <button className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-100 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] hover:shadow-md transition ease-out"
                        type="submit">
                            <IconBrandGoogle />
                        </button>
                        <span className="flex justify-center">Google</span>
                </section>
            </form>
        </div>
    )
}