"use client"

interface PostBodyProps {
  children: React.ReactNode
};

const PostBody = ({

  children
}: PostBodyProps) => {
  return (
    <div className="w-full h-full bg-transparent outline-none border-none pt-1">
      {children}
    </div>
  )
}

export default PostBody