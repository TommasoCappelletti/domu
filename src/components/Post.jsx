function Post({ post }) {
  const { title, description } = post;
  return (
    <li>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default Post;
