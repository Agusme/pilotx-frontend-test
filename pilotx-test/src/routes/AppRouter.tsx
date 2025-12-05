import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "../pages/PostPage";
import PostDetailPage from "../pages/PostDetailPage";
import Layout from "../components/Layouts/Layout";
import ErrorPage from "../pages/ErrorPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PostPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
<Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
