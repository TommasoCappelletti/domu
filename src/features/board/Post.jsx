import { useDispatch } from "react-redux";
import { deletePost, toggleReadPost } from "./postSlice";
import Button from "../../ui/Button";

function Post({ post }) {
  const { title, date, description, id, readed } = post;
  const dispatch = useDispatch();

  return (
    <div className="relative">
      {!readed && (
        <div className="uppercase z-10 absolute w-auto inline-block h-auto px-2 py-1 bg-purple-600 rounded-lg font-semibold tracking-widest text-xs">
          new
        </div>
      )}
      <div
        className={`bg-sky-900 mt-3 ml-3 p-5 rounded-md space-y-5 md:space-y-0 flex flex-col sm:flex-row sm:space-x-10 relative ${!readed ? " border-2 border-yellow-500  " : ""}`}
      >
        <div className="flex sm:flex-col space-x-2 sm:space-x-0 space-y-1">
          <div className="bg-cyan-500 border rounded-full h-7 w-7 sm:h-20 sm:w-20"></div>
          <p>Username</p>
        </div>
        <div className="w-full flex flex-col space-y-3">
          <p className="text-xs text-stone-300">{date}</p>
          <div className="space-y-1">
            <h3>{title}</h3>
            <hr></hr>
          </div>
          <div className="overflow-auto max-h-52 post-description">
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
        <div className="absolute top-4 right-4 space-x-3">
          <Button onClick={() => dispatch(toggleReadPost(id))}>
            {!readed ? (
              <i className="fa-solid fa-envelope-open"></i>
            ) : (
              <i className="fa-solid fa-envelope"></i>
            )}
          </Button>
          <Button onClick={() => dispatch(deletePost(id))}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Post;
