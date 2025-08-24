import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile/details">Profile</Link> |{" "}
        <Link to="/blog/42">Blog Post 42</Link>
      </nav>
    </div>
  );
}
