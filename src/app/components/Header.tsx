import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"; // Correct imports
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  return (
    <div>
      {/* Header Container */}
      <div className="w-full h-[80px] bg-slate-700 flex items-center px-5">
        {/* Navigation Menu for Larger Screens */}
        <div className="hidden sm:flex text-white space-x-10">
          <Link href="/">Home</Link>
          <Link href="/Blogs">Blogs</Link>
          <Link href="/About">About</Link>
          <Link href="/Contact">Contact</Link>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="sm:hidden ml-auto">
          <Dialog>
            {/* The DialogTrigger must be wrapped inside the Dialog component */}
            <DialogTrigger>
              <IoMdMenu className="text-white text-2xl cursor-pointer" />
            </DialogTrigger>
            
            {/* DialogContent should also be inside Dialog */}
            <DialogContent className="w-[200px] sm:w-[300px] p-4">
              <ul className="space-y-4 text-lg text-gray-800">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/Blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/About">About</Link>
                </li>
                <li>
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
