import { usePost } from "../PostProvider";
import Post from "./Post";

function PostList() {
  const { posts } = usePost();
  return (
    <ul>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ul>
  );
}

export default PostList;
