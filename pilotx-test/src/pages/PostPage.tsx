import { Box } from "@mui/material";
import PostCard from "../components/Posts/PostCard";
import { usePosts } from "../hooks/usePosts";

const PostPage = () => {
const {posts, loading, error}= usePosts()

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <Box>
      {posts.map((post)=>(
        <PostCard   key={post.id}
          post={post}
          userInitial={post.title[0].toUpperCase()}/>

      ))}
    </Box>

  );
};

export default PostPage;
