import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function AdminTags() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const [tags, setTags] = useState([
    { id: 1, name: "React", slug: "react" },
    { id: 2, name: "JavaScript", slug: "javascript" },
  ]);

  const [deleteId, setDeleteId] = useState(null);
  const [editing, setEditing] = useState(null);

  // Slug Generator
  const generateSlug = (text) =>
    text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

  // Add Tag
  const handleAddTag = () => {
    if (!name) return alert("Tag name required");

    const newTag = {
      id: Date.now(),
      name,
      slug,
    };

    setTags([...tags, newTag]);

    setName("");
    setSlug("");
  };

  // Update Tag
  const updateTag = () => {
    setTags((prev) =>
      prev.map((t) =>
        t.id === editing.id ? editing : t
      )
    );
    setEditing(null);
  };

  // Delete Tag
  const confirmDelete = () => {
    setTags(tags.filter((t) => t.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Tags</h1>

      {/* ADD TAG FORM */}
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Tag</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Tag Name</label>
            <input
              className="w-full border px-3 py-2 rounded-lg"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSlug(generateSlug(e.target.value));
              }}
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block mb-1 font-medium">Slug</label>
            <input
              className="w-full border px-3 py-2 rounded-lg"
              value={slug}
              onChange={(e) => setSlug(generateSlug(e.target.value))}
            />
          </div>
        </div>

        <button
          onClick={handleAddTag}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Add Tag
        </button>
      </div>

      {/* TAGS LIST */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">All Tags</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Slug</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tags.map((tag) => (
              <tr key={tag.id} className="border">
                <td className="p-3 border">{tag.name}</td>
                <td className="p-3 border">{tag.slug}</td>

                <td className="p-3 border flex gap-4">
                  <Pencil
                    size={18}
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setEditing(tag)}
                  />
                  <Trash2
                    size={18}
                    className="text-red-500 cursor-pointer"
                    onClick={() => setDeleteId(tag.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION POPUP */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center">

            <h3 className="text-lg font-semibold mb-3">Delete Tag?</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this tag?
            </p>

            <div className="flex justify-center gap-4">
              <button
                className="border px-4 py-2 rounded-lg"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>

              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      )}

      {/* EDIT TAG MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Edit Tag</h3>

            {/* Name */}
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border px-3 py-2 rounded-lg mb-4"
              value={editing.name}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  name: e.target.value,
                  slug: generateSlug(e.target.value),
                })
              }
            />

            {/* Slug */}
            <label className="block mb-1 font-medium">Slug</label>
            <input
              className="w-full border px-3 py-2 rounded-lg mb-4"
              value={editing.slug}
              onChange={(e) =>
                setEditing({
                  ...editing,
                  slug: generateSlug(e.target.value),
                })
              }
            />

            <div className="flex justify-end mt-4 gap-4">
              <button
                className="border px-4 py-2 rounded-lg"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={updateTag}
              >
                Update
              </button>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}
