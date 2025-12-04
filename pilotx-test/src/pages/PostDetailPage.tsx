import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import PostCard from "../components/Posts/PostCard";
import { usePostDetail } from "../hooks/usePostDetail";
import CommentCard from "../components/Comments/CommentCard";
import CreateCommentForm from "../components/Comments/CreateCommentForm";
import { createComment } from "../api/post";
import type { CreateCommentPayload } from "../types";

export default function PostDetailPage() {
  const { id } = useParams();

  const { post, comments, setComments, loading, error } = usePostDetail(id!);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) return <p>{error}</p>;
  if (!post) return <p>No se encontró el post.</p>;

  const handleCreateComment = async (data: CreateCommentPayload) => {
    const newComment = await createComment(post.id, data);

    setComments((prev) => [...prev, newComment]);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
      <PostCard
        post={post}
        userInitial={post.title[0].toUpperCase()}
        onClick={undefined}
          commentCount={comments.length}

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
      <CreateCommentForm onSubmit={handleCreateComment} />
    </Box>
  );
}
