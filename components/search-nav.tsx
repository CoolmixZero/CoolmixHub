"use client"

import { Search } from "lucide-react";


const SearchBar = () => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // if (event.key === "Enter" && onEnter) {
    //   onEnter();
    // }
    return;
  };

  return (
    <div className="w-80 fixed my-2 rounded-full bg-[#16181c]">
      <label className="flex px-5 py-1 items-center justify-center gap-2 text-white">
        <Search className={`relative text-neutral-500`} />
        <input
          className={`w-full h-full p-3 font-light text-white bg-transparent outline-none rounded-md`}
          type="text"
          inputMode="search"
          maxLength={30}
          onKeyDown={handleKeyPress}
          value={""}
          placeholder={"Search"}
        />
      </label>
    </div>
  );
}

export default SearchBar;