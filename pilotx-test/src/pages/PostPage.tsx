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
    <Box sx={{ maxWidth: 700, mx: "auto" }}>
             <Box
    sx={{
      width: "100%",
      height: 120,
      borderRadius: 2,
      overflow: "hidden",
      mb: 2,
    }}
  >
    <img
      src="/pilot_x_ai_cover.jpg"   // poné la imagen en /public/
      alt="PilotX Banner"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </Box>
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
