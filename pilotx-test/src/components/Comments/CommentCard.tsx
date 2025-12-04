import { Card, CardContent, Typography, Box } from "@mui/material";
import type { Comment } from "../../types";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  const userInitial = comment.name[0].toUpperCase();

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 2,
        border: "1px solid #e5e7eb",
        p: 1,
      }}
    >
      <CardContent sx={{ display: "flex", gap: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "0.9rem",
            flexShrink: 0,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {userInitial}
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "1rem" }}>
            {comment.name}
          </Typography>

          <Typography sx={{ fontSize: "0.85rem", color: "gray", mb: 1 }}>
            {comment.email}
          </Typography>

          <Typography variant="body2">{comment.body}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
