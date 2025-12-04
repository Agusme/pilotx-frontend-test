import type { CreateCommentPayload } from "../types";
import axiosClient from "./axiosClient";

export const getPosts = async () => {
  const response = await axiosClient.get("/posts");
  return response.data;
};

export const getPost = async (id: string | number) => {
  const response = await axiosClient.get(`/posts/${id}`);
  return response.data;
};

export const getComments = async (id: string | number) => {
  const response = await axiosClient.get(`/posts/${id}/comments`);
  return response.data;
};

export const createComment = async (
  postId: number,
  data: CreateCommentPayload
) => {
  const response = await axiosClient.post("/comments", {
    ...data,
    postId,
  });

  return response.data;
};
