import { useState } from "react";
import { ImagePlus, Trash2, Pencil } from "lucide-react";

export default function AdminCategories() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // List of categories
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Technology",
      slug: "technology",
      description: "Latest tech updates",
      image: "/images/cat1.jpg",
    },
  ]);

  // Delete Popup
  const [deleteId, setDeleteId] = useState(null);

  // Edit Modal
  const [editing, setEditing] = useState(null);

  // Auto slug generator
  const generateSlug = (text) => {
    return text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  };

  const handleAddCategory = () => {
    if (!name) return alert("Category name required");

    const newCat = {
      id: Date.now(),
      name,
      slug,
      description,
      image: imagePreview,
    };

    setCategories([...categories, newCat]);

    // reset input fields
    setName("");
    setSlug("");
    setDescription("");
    setImagePreview(null);
  };

  // Edit Category Handler
  const updateCategory = () => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === editing.id
          ? { ...editing }
          : cat
      )
    );
    setEditing(null);
  };

  // Delete Category
  const confirmDelete = () => {
    setCategories(categories.filter((cat) => cat.id !== deleteId));
    setDeleteId(null);
  };

  const handleImageUpload = (e, type = "new") => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);

      type === "edit"
        ? setEditing({ ...editing, image: url })
        : setImagePreview(url);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Categories</h1>

      {/* Add Category Form */}
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Category Name</label>
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

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              rows="3"
              className="w-full border px-3 py-2 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="block mb-1 font-medium">Image</label>

            <div className="w-full border rounded-xl p-4 flex items-center gap-4 bg-gray-50">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  className="w-20 h-20 rounded-xl object-cover"
                />
              ) : (
                <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center">
                  <ImagePlus className="text-gray-500" />
                </div>
              )}

              <div>
                <label
                  htmlFor="add-image"
                  className="px-4 py-2 bg-black text-white rounded cursor-pointer"
                >
                  Upload Image
                </label>
                <input
                  id="add-image"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
          </div>

        </div>

        <button
          onClick={handleAddCategory}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Add Category
        </button>
      </div>

      {/* Category List */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Slug</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border">
                <td className="p-3 border">
                  <img src={cat.image} className="w-12 h-12 rounded object-cover" />
                </td>
                <td className="p-3 border">{cat.name}</td>
                <td className="p-3 border">{cat.slug}</td>
                <td className="p-3 border text-sm">{cat.description}</td>

                <td className="p-3 border flex gap-4">
                  <Pencil
                    size={18}
                    className="text-blue-600 cursor-pointer"
                    onClick={() => setEditing(cat)}
                  />
                  <Trash2
                    size={18}
                    className="text-red-500 cursor-pointer"
                    onClick={() => setDeleteId(cat.id)}
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

            <h3 className="text-lg font-semibold mb-3">Delete Category?</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this category? This action cannot be undone.
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

      {/* EDIT CATEGORY MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl shadow-xl w-[450px]">
            <h3 className="text-xl font-semibold mb-4">Edit Category</h3>

            {/* Name */}
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border px-3 py-2 rounded-lg mb-4"
              value={editing.name}
              onChange={(e) =>
                setEditing({ ...editing, name: e.target.value, slug: generateSlug(e.target.value) })
              }
            />

            {/* Slug */}
            <label className="block mb-1 font-medium">Slug</label>
            <input
              className="w-full border px-3 py-2 rounded-lg mb-4"
              value={editing.slug}
              onChange={(e) =>
                setEditing({ ...editing, slug: generateSlug(e.target.value) })
              }
            />

            {/* Description */}
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              className="w-full border px-3 py-2 rounded-lg mb-4"
              rows="3"
              value={editing.description}
              onChange={(e) =>
                setEditing({ ...editing, description: e.target.value })
              }
            />

            {/* Image Upload */}
            <label className="block mb-1 font-medium">Image</label>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={editing.image}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <label
                  htmlFor="edit-image"
                  className="px-4 py-2 bg-black text-white rounded cursor-pointer"
                >
                  Change Image
                </label>
                <input
                  id="edit-image"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleImageUpload(e, "edit")}
                />
              </div>
            </div>

            <div className="flex justify-end mt-4 gap-4">
              <button
                className="border px-4 py-2 rounded-lg"
                onClick={() => setEditing(null)}
              >
                Cancel
              </button>

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={updateCategory}
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
