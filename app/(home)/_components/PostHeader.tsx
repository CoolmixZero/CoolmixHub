"use client"

interface PostHeaderProps {
  name: string
  username: string
  createdAt: string
  readingTime: string
};

const PostHeader = ({
  name,
  username,
  createdAt,
  readingTime
}: PostHeaderProps) => {
  return (
    <div className="flex flex-col w-full text-muted-foreground">
      <div className="flex space-x-1">
        <span className="text-white font-semibold">{name}</span>
        <span>@{username}</span>
        <span>·</span>
        <span>{createdAt}</span>
        <span>·</span>
        <span>{readingTime}</span>
      </div>
    </div>
  )
}

export default PostHeader