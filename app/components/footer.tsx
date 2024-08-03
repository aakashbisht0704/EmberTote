import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="overflow-x-hidden pt-60">
      <footer className=" bg-slate-800 text-gray-50 bottom-0 w-full h-full">
        <div className="px-8 py-10 m-6">
          <h1 className="text-4xl font-bold">
            Ember<span className="text-primary">Tote</span>
          </h1>
          <div className="float-right pb-5">
            <ul>
                <h1 className="text-2xl mt-1 pl-2">Contact</h1>
                <li className="mt-1 text-lg p-2">support@embertote.com</li>
                <li className="mt-1 text-lg p-2">+91 89290 05905</li>
            </ul>
        </div>
        </div>
        <div className="px-8 pb-10 m-6">
          <p className="text-center">Ember Tote &copy; {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
        <div className="flex flex-col items-center text-center justify-between  md:flex-row sm:text-clip">
          <div className="flex h-15 w-100 divide-x items-center overflow-hidden rounded-lg border">
              <Link className="md:text-xl sm:text-sm w-1/4 items-center text-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 "  href="/Terms-and-Condition">Terms and conditions</Link>
         
              <Link className="md:text-xl sm:text-sm w-1/4 items-center text-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 "  href="/policy/Privacy-Policy">Privacy Policy</Link>

              <Link className="md:text-xl sm:text-sm w-1/4 items-center justify-center text-center  text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 "  href="/policy/Shipping-Policy">Shipping Policy</Link>

              <Link className="md:text-xl sm:text-sm w-1/4 items-center justify-center text-center  text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 "  href="/policy/Return-Policy">Return Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
