import { useEffect, useState } from "react";
import { getPost, getComments } from "../api/post";
import type { Post, Comment } from "../types";

export function usePostDetail(id: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [postData, commentData] = await Promise.all([
        getPost(id),
        getComments(id),
      ]);

      setPost(postData);
      setComments(commentData);
    } catch (e) {
      console.error(e);
      setError("Error al cargar el detalle del post");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return { post, comments, loading, error };
}
