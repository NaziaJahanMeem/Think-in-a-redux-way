import { Link } from "react-router-dom";

export const RelatedPostItem = () => {
  return (
    <div class="card">
      <Link to={`/posts/1`}>
        <img src="/images/git.webp" class="card-image" alt="" />
      </Link>
      <div class="p-4">
        <Link to={`/posts/1`} class="text-lg post-title lws-RelatedPostTitle">
          Top Github Alternatives
        </Link>
        <div class="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2010-03-27</p>
      </div>
    </div>
  );
};
