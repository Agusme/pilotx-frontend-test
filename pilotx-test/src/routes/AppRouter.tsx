import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";
import PostDetailPage from "../pages/PostDetailPage";

export default function AppRouter() {
  return (
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}
