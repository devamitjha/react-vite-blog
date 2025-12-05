import { useState, useRef, useEffect } from "react";
import QuillEditor from "@/components/quillEditor";
import { ImagePlus, Tags } from "lucide-react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState(0);

  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);

  // TAGS
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  // SEO
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const quillRef = useRef(null);

  // -----------------------------------------
  // 🔥 Slug Generator
  // -----------------------------------------
  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  // -----------------------------------------
  // 🔥 Thumbnail Preview
  // -----------------------------------------
  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);

    if (file) setPreview(URL.createObjectURL(file));
  };

  // -----------------------------------------
  // 🔥 Read Time Calculator (200 wpm)
  // -----------------------------------------
  useEffect(() => {
    const words = content.replace(/<[^>]+>/g, "").trim().split(/\s+/).length;
    const time = Math.ceil(words / 200);
    setReadTime(time);
  }, [content]);

  // -----------------------------------------
  // 🔥 Tags – Enter or comma to add
  // -----------------------------------------
  const handleTagAdd = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const newTag = tagInput.trim().replace(",", "");
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  const removeTag = (t) => {
    setTags(tags.filter((tag) => tag !== t));
  };

  // -----------------------------------------
  // 🔥 Cloudinary Image Upload in Editor
  // -----------------------------------------
  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      const url = data.secure_url;

      const editor = quillRef.current.getEditor();
      const range = editor.getSelection();
      editor.insertEmbed(range.index, "image", url);
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: { image: handleImageUpload },
    },
  };

  // -----------------------------------------
  // 🔥 Submit (Clear Form After Publish)
  // -----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send data to API

    alert("Post Published Successfully!");

    // Clear form
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setThumbnail(null);
    setPreview(null);
    setTags([]);
    setTagInput("");
    setMetaTitle("");
    setMetaDescription("");
  };

  return (
    <div className="w-full bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-8" onSubmit={handleSubmit}>
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Title */}
          <div>
            <label className="font-medium text-gray-600">Post Title</label>
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="font-medium text-gray-600">Slug (SEO URL)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
              className="w-full mt-2 p-3 border rounded-lg"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="font-medium text-gray-600">Excerpt</label>
            <textarea
              rows="3"
              placeholder="Short description..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg"
            />
          </div>

          {/* Content with Read Time */}
          <div>
            <div className="flex justify-between">
              <label className="font-medium text-gray-600">Content</label>
              <span className="text-sm text-gray-500">
                ⏱ Read Time: {readTime} min
              </span>
            </div>

            <div className="mt-2">
              <QuillEditor
                ref={quillRef}
                value={content}
                onChange={setContent}
                modules={modules}
              />
            </div>
          </div>

          {/* SEO Fields: meta title & description */}
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">SEO / Meta</h4>
            <div className="mb-3">
              <label className="text-sm text-gray-700">Meta Title</label>
              <input
                className="w-full mt-2 p-2 border rounded"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="Optional meta title"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Meta Description</label>
              <textarea
                className="w-full mt-2 p-2 border rounded"
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Optional meta description (max 160 chars)"
              />
              <p className="text-xs text-gray-400 mt-1">
                {metaDescription.length} / 160 chars
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-6">

          {/* Featured Image */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700">Featured Image</label>

            <label className="border border-dashed mt-3 w-full h-40 flex flex-col justify-center items-center text-gray-500 rounded-lg cursor-pointer relative overflow-hidden">
              {!preview ? (
                <>
                  <ImagePlus size={32} />
                  <span>Upload Thumbnail</span>
                </>
              ) : (
                <img src={preview} className="w-full h-full object-cover rounded-lg" />
              )}

              <input type="file" className="hidden" onChange={handleThumbnail} />
            </label>
          </div>

          {/* Tags with Chips */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <Tags size={18} /> Tags
            </label>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            {/* Input */}
            <input
              type="text"
              placeholder="Type tag and press Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagAdd}
              className="w-full mt-3 p-3 border rounded-lg"
            />
          </div>

          {/* Publish */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
