import { forwardRef, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const QuillEditor = forwardRef(({ value, onChange, modules }, ref) => {
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules,
  });

  // Forward ref for parent access
  useEffect(() => {
    if (ref) ref.current = { getEditor: () => quill };
  }, [quill]);

  // Sync to parent
  useEffect(() => {
    if (!quill) return;

    const handler = () => {
      onChange(quill.root.innerHTML);
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill]);

  return <div ref={quillRef} />;
});

export default QuillEditor;
