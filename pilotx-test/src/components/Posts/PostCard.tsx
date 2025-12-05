import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import type { Post } from "../../types";
import { Link } from "react-router-dom";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  FavoriteBorder,
  Repeat,
} from "@mui/icons-material";

interface PostCardProps {
  post: Post;
  userInitial?: string;
  onClick?: () => void;
  commentCount?: number;
}

export default function PostCard({
  post,
  userInitial = "U",
  onClick,
  commentCount,
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
          bgcolor: "#fff",
          borderRadius: 3,
          px: 3,
          py: 2,
          mb: 2,
          border: "1px solid #e6e6e6",
          transition: "0.2s",
          "&:hover": {
            backgroundColor: "#fafafa",
          },
        }}
      >
        <CardContent sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2,  }}>
            <Avatar
              sx={{
                width: 48,
                height: 48,
                bgcolor: "#1a1a4a",
                fontWeight: "bold",
                               fontFamily: "'Roboto', sans-serif",   

              }}
            >
              {userInitial}
            </Avatar>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{ fontSize: "1.1rem", fontWeight: 600 }}
            >
              {post.title}
            </Typography>
            <Typography
            sx={{ color: "#555", mb: 2, lineHeight: 1.4 }}
          >
            {post.body}
          </Typography>
          </Box>
        </CardContent>{" "}
        <Box
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
      </Card>
    </Link>
  );
}
