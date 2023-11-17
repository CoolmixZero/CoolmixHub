import PageHeader from "@/components/page-header";
import NewPostInput from "./_components/NewPostInput";
import Post from "./_components/Post";

const posts = [
  {
    id: 1,
    user: {
      username: "shadcn",
      name: "Shad Mirza",
      avatar: "https://github.com/shadcn.png",
    },
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!",
    createdAt: "2021-10-10T00:00:00.000Z",
    likes: 3604,
    comments: 102,
    reposts: 1043,
    views: 12974,
  },
  {
    id: 2,
    user: {
      username: "shadcn",
      name: "Shad Mirza",
      avatar: "https://github.com/shadcn.png",
    },
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!",
    createdAt: "2021-10-10T00:00:00.000Z",
    likes: 0,
    comments: 0,
    reposts: 0,
    views: 0,
  },
  {
    id: 3,
    user: {
      username: "shadcn",
      name: "Shad Mirza",
      avatar: "https://github.com/shadcn.png",
    },
    content: "Hello world!",
    createdAt: "2021-10-10T00:00:00.000Z",
    likes: 0,
    comments: 0,
    reposts: 0,
    views: 0,
  },
  {
    id: 4,
    user: {
      username: "shadcn",
      name: "Shad Mirza",
      avatar: "https://github.com/shadcn.png",
    },
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto quo sunt? Accusantium cupiditate soluta sequi sapiente ipsam facilis. Tempore temporibus ea deleniti!",
    createdAt: "2021-10-10T00:00:00.000Z",
    likes: 0,
    comments: 0,
    reposts: 0,
    views: 0,
  },
  {
    id: 5,
    user: {
      username: "shadcn",
      name: "Shad Mirza",
      avatar: "https://github.com/shadcn.png",
    },
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Similique porro ipsam aspernatur alias consectetur iusto.",
    createdAt: "2021-10-10T00:00:00.000Z",
    likes: 0,
    comments: 0,
    reposts: 0,
    views: 0,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col w-8/12 h-full min-h-screen border-l-[0.5px] border-r-[0.5px] border-muted-foreground/50">
      <PageHeader title="Home" />
      <NewPostInput />
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.user.username}
          name={post.user.name}
          avatar={post.user.avatar}
          content={post.content}
          createdAt={post.createdAt}
          likes={post.likes}
          comments={post.comments}
          reposts={post.reposts}
          views={post.views}
        />
      ))}
    </main>
  );
}
