// import { RichTextEditor, Link } from "@mantine/tiptap";
// import { useEditor } from "@tiptap/react";
// import Highlight from "@tiptap/extension-highlight";
// import StarterKit from "@tiptap/starter-kit";
// import Underline from "@tiptap/extension-underline";
// import TextAlign from "@tiptap/extension-text-align";
// import Superscript from "@tiptap/extension-superscript";
// import SubScript from "@tiptap/extension-subscript";
import { useState, useRef } from "react";
import { RichTextEditor, Editor } from "@mantine/rte";

const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";

function BodyNotes() {
  const editorRef = useRef();
  const [value, onChange] = useState(initialValue);
  const content =
    '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Underline,
  //     Link,
  //     Superscript,
  //     SubScript,
  //     Highlight,
  //     TextAlign.configure({ types: ["heading", "paragraph"] }),
  //   ],
  //   content,
  // });

  return (
    <>
      <RichTextEditor
        controls={[
          ["bold", "italic", "underline", "link", "image"],
          ["unorderedList", "h1", "h2", "h3"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        value="gfhfhfh"
        onClick={() => console.log("gfgfgd")}
        content={content}
        onChange={onChange}></RichTextEditor>
    </>
  );
}

export default BodyNotes;
