"use client"

import Link from "next/link";
import { Poppins } from "next/font/google";
import {
  HomeIcon,
  BookmarkIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  SparklesIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAVIGATION_ITEMS = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Saved",
    href: "/bookmarks",
    icon: BookmarkIcon,
  },
  {
    name: "Jobs",
    href: "/jobs",
    icon: BriefcaseIcon,
  },
  {
    name: "Courses",
    href: "/courses",
    icon: GraduationCapIcon,
  },
];

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Navigation = () => {
  return (
    <nav className="w-72 flex sticky top-0 flex-col items-start h-screen">
      <Link
        className="mb-2 text-3xl bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent flex items-center justify-start w-fit space-x-6 rounded-full px-3 pt-5 pb-3"
        href="/"
      >
        <div className="text-indigo-300">
          <SparklesIcon />
        </div>
        <h1 className={cn("font-bold", poppins.className)}>CoolmixHub</h1>
      </Link>
      {NAVIGATION_ITEMS.map((item) => (
        <Link
          className="text-2xl flex items-center justify-start w-fit space-x-6 hover:bg-white/10 transition duration-200 rounded-full p-3"
          href={item.href}
          key={item.name}
        >
          <div>
            <item.icon />
          </div>
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
