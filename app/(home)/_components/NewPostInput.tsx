"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NewPostToolbar from "./NewPostToolbar";

interface Props {}

export default function NewPostInput({}: Props) {
  return (
    <div className="h-32 w-full flex relative px-4 py-5 mt-4 items-stretch space-x-2 border-t-[0.5px] border-b-[0.5px] border-muted-foreground/50">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full">
        <input
          className="w-full h-full text-2xl placeholder:text-muted-foreground bg-transparent outline-none border-none p-4"
          type="text"
          placeholder="What's happening?"
        />
        <label className="flex h-full w-full justify-between items-center">
          <NewPostToolbar />
          <Button>Post</Button>
        </label>
      </div>
    </div>
  );
}
