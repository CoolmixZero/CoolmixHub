"use client"

import readingTime from "reading-time"
import { differenceInHours, formatDistanceToNow } from 'date-fns';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

interface Props {
  username: string;
  name: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  views: number;
}

export default function Post({
  username,
  name,
  avatar,
  content,
  createdAt,
  likes,
  comments,
  reposts,
  views
}: Props) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  const stats = readingTime(content)
  return (
    <div className="flex border-t-[0.5px] border-b-[0.5px] border-muted-foreground/50 space-x-4">
        <div className="w-full flex relative px-4 py-5 items-stretch space-x-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <article className="flex flex-col w-full">
          <PostHeader name={name} username={username} createdAt={timeAgo} readingTime={stats.text} />
          <PostBody>
            {content}
          </PostBody>
          <PostFooter 
            likes={likes} 
            comments={comments} 
            reposts={reposts} 
            views={views}
          />
        </article>
      </div>
    </div>  
  )
}
