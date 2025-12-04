import { Box, CircularProgress } from "@mui/material";
import PostCard from "../components/Posts/PostCard";
import { usePosts } from "../hooks/usePosts";

const PostPage = () => {
  const { posts, loading, error } = usePosts();

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  if (error) return <p>{error}</p>;
  return (
    <Box sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          userInitial={post.title[0].toUpperCase()}
        />
      ))}
    </Box>
  );
};

export default PostPage;
