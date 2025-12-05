export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  commentCount?: number;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface CreateCommentPayload {
  name: string;
  email: string;
  body: string;
}
