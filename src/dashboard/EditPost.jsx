import { useState, useEffect, useRef } from "react";
import QuillEditor from "@/components/quillEditor";
import { ImagePlus, Tags } from "lucide-react";
import { useParams } from "react-router";

const EditPost = () => {
  const { id } = useParams(); // get :id param

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("Technology");

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [readTime, setReadTime] = useState(0);

  const quillRef = useRef(null);

  // ---------------------------------------------
  // 🔥 Generate Slug
  // ---------------------------------------------
  const generateSlug = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  useEffect(() => {
    setSlug(generateSlug(title));
  }, [title]);

  // ---------------------------------------------
  // ⏳ Read Time Calculator
  // ---------------------------------------------
  useEffect(() => {
    const words = content.replace(/<[^>]+>/g, "").trim().split(/\s+/).length;
    setReadTime(Math.ceil(words / 200));
  }, [content]);

  // ---------------------------------------------
  // 🧲 Load existing post details
  // ---------------------------------------------
  useEffect(() => {
    const fetchPost = async () => {
      // fake API data
      const data = {
        title: "How to Learn React in 2025",
        slug: "how-to-learn-react-2025",
        excerpt: "A complete guide to mastering React.",
        content: "<p>React is powerful...</p>",
        category: "Technology",
        tags: ["react", "javascript"],
        thumbnailUrl: "/images/sample.jpg",
        metaTitle: "Learn React",
        metaDescription: "React learning guide",
      };

      setTitle(data.title);
      setSlug(data.slug);
      setExcerpt(data.excerpt);
      setContent(data.content);
      setCategory(data.category);
      setTags(data.tags);
      setPreview(data.thumbnailUrl);
      setMetaTitle(data.metaTitle);
      setMetaDescription(data.metaDescription);

      setLoading(false);
    };

    fetchPost();
  }, [id]);

  // ---------------------------------------------
  // 🖼️ Thumbnail Preview
  // ---------------------------------------------
  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // ---------------------------------------------
  // 🏷️ Tag system
  // ---------------------------------------------
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // ---------------------------------------------
  // 💾 Update Post
  // ---------------------------------------------
  const handleUpdate = (e) => {
    e.preventDefault();

    // API PUT request (example)
    console.log("Updated post:", {
      title,
      slug,
      excerpt,
      content,
      thumbnail,
      category,
      tags,
      metaTitle,
      metaDescription,
    });

    alert("Post updated successfully!");
  };

  if (loading)
    return <p className="text-center py-8 text-gray-500">Loading...</p>;

  return (
    <div className="w-full bg-white shadow p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Edit Post (ID: {id})</h2>

      <form className="grid grid-cols-1 lg:grid-cols-3 gap-8" onSubmit={handleUpdate}>

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Title */}
          <div>
            <label className="font-medium text-gray-600">Post Title</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Slug */}
          <div>
            <label className="font-medium text-gray-600">Slug</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="font-medium text-gray-600">Excerpt</label>
            <textarea
              rows={3}
              className="w-full mt-2 p-3 border rounded-lg"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            ></textarea>
          </div>

          {/* Content */}
          <div>
            <div className="flex justify-between">
              <label className="font-medium text-gray-600">Content</label>
              <span className="text-sm text-gray-500">
                Read Time: {readTime} min
              </span>
            </div>

            <QuillEditor
              ref={quillRef}
              value={content}
              onChange={setContent}
              theme="snow"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Thumbnail */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700">Featured Image</label>

            <label className="border border-dashed mt-3 w-full h-40 flex flex-col justify-center items-center text-gray-500 rounded-lg cursor-pointer overflow-hidden">
              {!preview ? (
                <>
                  <ImagePlus size={32} />
                  <span>Upload Image</span>
                </>
              ) : (
                <img src={preview} alt="preview" className="w-full h-full object-cover" />
              )}

              <input type="file" className="hidden" onChange={handleThumbnail} />
            </label>
          </div>

          {/* Category */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700">Category</label>
            <select
              className="w-full mt-2 p-3 border rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Technology</option>
              <option>Business</option>
              <option>Lifestyle</option>
            </select>
          </div>

          {/* Tags */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <Tags size={18} /> Tags
            </label>

            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-2 text-sm"
                >
                  {tag}
                  <button onClick={() => removeTag(tag)} className="text-red-600">×</button>
                </span>
              ))}
            </div>

            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              placeholder="Press Enter to add tag"
              className="w-full mt-3 p-3 border rounded-lg"
            />
          </div>

          {/* SEO */}
          <div className="p-4 border rounded-lg">
            <label className="font-medium text-gray-700">Meta Title</label>
            <input
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full mt-2 p-3 border rounded-lg"
            />

            <label className="font-medium text-gray-700 mt-4">Meta Description</label>
            <textarea
              className="w-full mt-2 p-3 border rounded-lg"
              rows={3}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
            ></textarea>
          </div>

          {/* UPDATE BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
