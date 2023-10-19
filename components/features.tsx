import Link from "next/link";
import { cn } from "@/lib/utils";
import SearchBar from "./search-nav";

const Features = () => {
  return (
    <section className="hidden lg:flex relative w-96 flex-col items-start h-screen pt-1 px-8">
      <SearchBar />
    </section>
  );
};

export default Features;
