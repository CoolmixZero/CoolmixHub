"use client";

import {
  FaRegComment,
  FaRepeat,
  FaRegHeart,
  FaChartLine,
  FaShare,
} from "react-icons/fa6";

const footerItems = [
  {
    icon: FaRegComment,
    label: "Comments",
  },
  {
    icon: FaRepeat,
    label: "Reposts",
    bg_color: "group-hover:bg-green-500/10",
    text_color: "hover:text-green-500",
  },
  {
    icon: FaRegHeart,
    label: "Likes",
    bg_color: "group-hover:bg-red-500/10",
    text_color: "hover:text-red-500",
  },
  {
    icon: FaChartLine,
    label: "Views",
  },
  {
    icon: FaShare,
    label: "Share",
  },
];

interface PostFooterProps {
  likes: number;
  comments: number;
  reposts: number;
  views: number;
}

function PostFooter({ likes, comments, reposts, views }: PostFooterProps) {
  return (
    <div className="flex h-full w-full pt-2 justify-between items-center text-muted-foreground">
      {footerItems.map((item) => (
        <div
          key={item.label}
          className={`group flex items-center ${
            item.text_color ? item.text_color : "hover:text-primary"
          }`}
        >
          <div
            className={`p-3 rounded-full ${
              item.bg_color ? item.bg_color : "group-hover:bg-primary/10"
            }`}
          >
            <item.icon />
          </div>
          {item.label === "Comments" ? comments :
            item.label === "Reposts" ? reposts :
            item.label === "Likes" ? likes :
            item.label === "Views" ? views :
            item.label === "Share" && ""}
        </div>
      ))}
    </div>
  );
}

export default PostFooter;
