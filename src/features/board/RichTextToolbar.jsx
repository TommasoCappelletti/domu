import { useEffect, useState } from "react";

const initialRichBarState = {
  bold: false,
  italic: false,
  insertUnorderedList: false,
};

function RichTextToolbar() {
  const [richBarState, setRichBarState] = useState(initialRichBarState);

  useEffect(() => {
    const editor = document.getElementById("editor");
    var enterCount = 0;

    function extractSelection() {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      return selection.getRangeAt(0);
    }

    const handleMouseUp = () => {
      const textSelected = extractSelection();
      const parentElement = textSelected.commonAncestorContainer.parentElement;
      if (!parentElement) return;

      const isBold = parentElement.closest("b") !== null;
      const isItalic = parentElement.closest("i") !== null;
      const isUnorderedList =
        (parentElement.closest("li") || parentElement.closest("ul")) !== null;

      setRichBarState({
        ...initialRichBarState,
        bold: isBold,
        italic: isItalic,
        insertUnorderedList: isUnorderedList,
      });
    };

    const handleKeyDown = (event) => {
      const textSelected = extractSelection();
      const tagName = textSelected.commonAncestorContainer.tagName;

      editor.removeEventListener("keyup", handleMouseUp);
      if (event.ctrlKey && event.key === "b") {
        setRichBarState((curr) => ({ ...curr, bold: !curr.bold }));
      }
      if (event.ctrlKey && event.key === "i") {
        setRichBarState((curr) => ({ ...curr, italic: !curr.italic }));
      }
      if (event.key === "Enter") {
        enterCount++;
        if (enterCount == 2 && (tagName === "LI" || tagName === "UL")) {
          setRichBarState({
            ...initialRichBarState,
            insertUnorderedList: false,
          });
          enterCount = 0;
        }
      }
    };

    const handleBlur = () => {
      setRichBarState(initialRichBarState);
    };

    editor.addEventListener("keydown", handleKeyDown);
    editor.addEventListener("mouseup", handleMouseUp);
    editor.addEventListener("keyup", handleMouseUp);
    editor.addEventListener("blur", handleBlur);

    return () => {
      editor.removeEventListener("keydown", handleKeyDown);
      editor.removeEventListener("mouseup", handleMouseUp);
      editor.removeEventListener("keyup", handleMouseUp);
      editor.removeEventListener("blur", handleBlur);
    };
  }, []);

  function handleIconClick(e, icon) {
    e.preventDefault();
    document.execCommand(icon, false, null);
    setRichBarState((curr) => ({ ...curr, [icon]: !curr[icon] }));
    document.getElementById("editor").focus();
  }

  return (
    <div className="space-x-1 rounded-t-md border-b border-stone-500 bg-sky-900 p-2">
      <button
        tabIndex="-1"
        onClick={(e) => handleIconClick(e, "bold")}
        className={`rounded-full px-2 ${richBarState.bold ? "bg-yellow-400 text-black" : ""}`}
      >
        <i className="fa-solid fa-bold fa-sm"></i>
      </button>
      <button
        onClick={(e) => handleIconClick(e, "italic")}
        className={`rounded-full px-2 ${richBarState.italic ? "bg-yellow-400 text-black" : ""}`}
      >
        <i className="fa-solid fa-italic fa-sm"></i>
      </button>
      <button
        onClick={(e) => handleIconClick(e, "insertUnorderedList")}
        className={`rounded-full px-2 ${richBarState.insertUnorderedList ? "bg-yellow-400 text-black" : ""}`}
      >
        <i className="fa-solid fa-list fa-sm"></i>
      </button>
    </div>
  );
}

export default RichTextToolbar;
