import { BlogPosts } from "../components/blogPosts/BlogPosts";
import { SideBar } from "../components/sidebar/Sidebar";

export const Home = () => {
  return (
    <section className="wrapper">
      <SideBar />
      <BlogPosts />
    </section>
  );
};
