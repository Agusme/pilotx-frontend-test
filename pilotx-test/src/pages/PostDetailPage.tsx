import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import PostCard from "../components/Posts/PostCard";
import { usePostDetail } from "../hooks/usePostDetail";
import CommentCard from "../components/Comments/CommentCard";

export default function PostDetailPage() {
  const { id } = useParams();

  const { post, comments, loading, error } = usePostDetail(id!);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <p>{error}</p>;
  if (!post) return <p>No se encontró el post.</p>;

  return (
    <Box sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
      <PostCard
        post={post}
        userInitial={post.title[0].toUpperCase()}
        onClick={undefined}
      />
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          mt: 4,
          mb: 2,
          pl: 1,
          borderLeft: "4px solid black",
        }}
      >
        Comentarios
      </Typography>

      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}

      {/*  crear comentario */}
    </Box>
  );
}
