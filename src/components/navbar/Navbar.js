import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        <div className="logo">
          <Link to={`/posts/1`}>
            <img src="./images/LWSBlog.svg" alt="search" />
          </Link>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-primary">sign in</button>
          <button className="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
};
