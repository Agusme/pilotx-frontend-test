import { Card, CardContent, Typography, Box } from "@mui/material";
import type { Post } from "../../types";

interface PostCardProps {
  post: Post;
  userInitial?: string;
  onClick?: () => void;
}

export default function PostCard({
   post,
  userInitial = "U",
  onClick,
}: PostCardProps) {
  return (
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
        <Box
          sx={{
            width: 45,
            height: 45,
            borderRadius: "50%",
            backgroundColor: "black",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "1rem",
            flexShrink: 0,
            fontFamily: "Roboto, sans-serif", 
          }}
        >
          {userInitial}
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>
            {post.body}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
