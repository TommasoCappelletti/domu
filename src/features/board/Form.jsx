import { useDispatch } from "react-redux";

import { insertPost } from "./postSlice";
import Button from "../../ui/Button";
import { getCurrentDate } from "../../helpers/Date";
import { useState } from "react";
import RichTextToolbar from "./RichTextToolbar";

function Form({ setShowForm }) {
  const dispatch = useDispatch();
  const [editorContent, setEditorContent] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    await setEditorContent(document.getElementById("editor").innerHTML);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const newPost = {
      id: crypto.randomUUID(),
      date: getCurrentDate(),
      title: data.title,
      description: data.description,
      readed: true,
    };

    dispatch(insertPost(newPost));
    setShowForm(false);
  }

  return (
    <form onSubmit={handleSubmit} className="w-100 flex flex-col space-y-4">
      <div className="ml-auto text-2xl text-sky-950">
        <Button onClick={() => setShowForm(false)}>&times;</Button>
      </div>
      <input
        className="rounded-full bg-sky-900 p-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1"
        name="title"
        type="text"
        placeholder="Titolo"
        required
      ></input>
      <div className=" ">
        <RichTextToolbar />
        <textarea
          value={editorContent}
          className="hidden"
          name="description"
        ></textarea>
        <div
          id="editor"
          contentEditable="true"
          className="h-56 overflow-scroll rounded-b-md bg-sky-900 p-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1"
        ></div>
      </div>
      <div className="ml-auto">
        <Button type="primary">Invia</Button>
      </div>
    </form>
  );
}

export default Form;
