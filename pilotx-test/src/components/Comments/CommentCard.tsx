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
        borderRadius: 3,
        border: "1px solid #e6e6e6",
        transition: "0.2s ease",
        mb: 2,
        "&:hover": {
          backgroundColor: "#fafafa",
        },
      }}
    >
      <CardContent sx={{ display: "flex", gap: 2, py: 2 }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "#1E1743",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            fontWeight: 600,
            flexShrink: 0,
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
               fontFamily: "'Roboto', sans-serif",   
    letterSpacing: "0.4px",          
    
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
