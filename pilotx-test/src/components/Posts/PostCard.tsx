import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import type { Post } from "../../types";
import { Link } from "react-router-dom";
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, Repeat } from "@mui/icons-material";

interface PostCardProps {
  post: Post;
  userInitial?: string;
  onClick?: () => void;
   commentCount?: number; 
}

export default function PostCard({
  post,
  userInitial = "U",
  onClick,commentCount
}: PostCardProps) {
  return (
      <Link
      to={`/posts/${post.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
    <Card
      onClick={onClick}
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        cursor: onClick ? "pointer" : "default",
        transition: "0.2s",
        "&:hover": {
          backgroundColor: onClick ? "#f9fafb" : "inherit",
        },
        p: 1,
      }}
    >
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "black",
            fontWeight: "bold",
            fontFamily: "Roboto, sans-serif", 
          }}
        >
          {userInitial}
        </Avatar>

        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {post.body}
          </Typography>
        </Box>
      </CardContent> <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            pb: 1,
            pt: 0,
            color: "text.secondary",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <ChatBubbleOutline fontSize="small" />
            <Typography variant="body2">{commentCount ?? 0}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Repeat fontSize="small" />
            <Typography variant="body2">12</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <FavoriteBorder fontSize="small" />
            <Typography variant="body2">23</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <BookmarkBorder fontSize="small" />
          </Box>
        </Box>
       
    </Card></Link>
  );
}
