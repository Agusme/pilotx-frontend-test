import { Box, CircularProgress } from "@mui/material";
import PostCard from "../components/Posts/PostCard";
import { usePosts } from "../hooks/usePosts";
import bannerPilotx from "../assets/pilot_x_ai_cover.jpg";
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
          height: { xs: 70, sm: 120 },
          borderRadius: 2,
          overflow: "hidden",
          mb: 2,
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: { xs: "top", sm: "center" },
          },
        }}
      >
        <img src={bannerPilotx} alt="PilotX Banner" />
      </Box>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          userInitial={post.title[0].toUpperCase()}
          commentCount={post.commentCount}
        />
      ))}
    </Box>
  );
};

export default PostPage;
