import { useEffect, useState } from "react";
import { getPosts, getComments } from "../api/post";
import type { Post, Comment } from "../types";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const postsData = await getPosts();

      const postsWithComments = await Promise.all(
        postsData.map(async (post: Post) => {
          const comments: Comment[] = await getComments(post.id);
          return {
            ...post,
            comments,
            commentCount: comments.length,
          };
        })
      );

      setPosts(postsWithComments);
    } catch (err) {
      setError("Error al cargar los posts");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, error };
}