import { useDispatch, useSelector } from "react-redux";
import { BlogPostItem } from "./BlogPostItem";
import { useEffect } from "react";
import { fetchBlogPosts } from "../../features/blogPosts/blogPostsSlice";

export const BlogPosts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.blogPosts);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  return (
    <main className="post-container" id="lws-postContainer">
      {posts && posts.map((post) => <BlogPostItem key={post.id} post={post} />)}
    </main>
  );
};
