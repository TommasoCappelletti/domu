import { useSelector } from "react-redux";

import { useState } from "react";
import Form from "./Form";
import Post from "./Post";
import Title from "../../ui/Title";
import Button from "../../ui/Button";

function Board() {
  const [showForm, setShowForm] = useState(false);
  const posts = useSelector((state) => state.post);

  return (
    <div
      className={`relative flex h-full flex-col ${showForm ? "justify-center" : ""}`}
    >
      {showForm ? (
        <Form setShowForm={setShowForm} />
      ) : (
        <>
          <div className="flex items-center space-x-7 pb-5">
            <div>
              <Title>📒 Bacheca</Title>
            </div>
            <Button type="icon" onClick={() => setShowForm(true)}>
              ➕
            </Button>
          </div>
          <div className="flex flex-col space-y-12 overflow-auto">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
