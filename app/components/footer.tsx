import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-800 text-gray-50 bottom-0 w-full h-80">
      <footer>
        <div className="px-8 py-10 m-6">
          <h1 className="text-4xl font-bold">
            Ember<span className="text-primary">Tote</span>
          </h1>
          <div className="flex flex-row float-right">
            <ul>
                <h1 className="text-2xl mt-1 pl-2">Contact</h1>
                <li className="mt-1 text-lg p-2">support@embertote.com</li>
                <li className="mt-1 text-lg p-2">+91 89290 05905</li>
            </ul>
        </div>
        </div>
        <div className="px-8 m-6">
          <p className="text-center">Ember Tote &copy; {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
        <div className="">
          <ul className="flex flex-row mt-20 pt-3 px-16 py-5 justify-between items-center text-gray-50">
            <li>
              <Button variant={"ghost"}>
                <Link href="/Terms-and-Condition">Terms and conditions</Link>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"}>
                <Link href="/policy/Privacy-Policy">Privacy Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"}>
                <Link href="/policy/Shipping-Policy">Shipping Policy</Link>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"}>
                <Link href="/policy/Return-Policy">Return Policy</Link>
              </Button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
