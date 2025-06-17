import Header from "../components/Header";
import Post from "../components/Post";
import { posts } from "../data";
import { PostType } from "../types";
import "../styles/Posts.css";
import { useParams } from "react-router-dom";

export default function Posts() {
  const { id } = useParams();
  const userId = Number(id);

  const userPosts: PostType[] = posts.filter((post) => post.userId === userId); // TODO: recebe os posts do usuário selecionado

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {userPosts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    </div>
  );
}
