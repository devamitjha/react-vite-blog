import { useState } from "react";

const EditAuthorModal = ({ data, setShow, authors, setAuthors }) => {
  const [form, setForm] = useState(
    data || {
      name: "",
      email: "",
      role: "Writer",
      status: "Active",
      image: "",
      social: { facebook: "", twitter: "", linkedin: "" },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data) {
      // Update
      setAuthors(
        authors.map((a) => (a.id === data.id ? { ...form, id: data.id } : a))
      );
    } else {
      // Add New
      setAuthors([...authors, { ...form, id: Date.now() }]);
    }

    setShow(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">
          {data ? "Edit Author" : "Add Author"}
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* NAME */}
          <input
            type="text"
            placeholder="Author Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 border rounded-lg"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 border rounded-lg"
          />

          {/* SOCIAL LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Facebook URL"
              className="p-2 border rounded"
              value={form.social.facebook}
              onChange={(e) =>
                setForm({
                  ...form,
                  social: { ...form.social, facebook: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="Twitter URL"
              className="p-2 border rounded"
              value={form.social.twitter}
              onChange={(e) =>
                setForm({
                  ...form,
                  social: { ...form.social, twitter: e.target.value },
                })
              }
            />
            <input
              type="text"
              placeholder="LinkedIn URL"
              className="p-2 border rounded"
              value={form.social.linkedin}
              onChange={(e) =>
                setForm({
                  ...form,
                  social: { ...form.social, linkedin: e.target.value },
                })
              }
            />
          </div>

          {/* ROLE */}
          <select
            className="p-3 border rounded-lg"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="Writer">Writer</option>
            <option value="Admin">Admin</option>
          </select>

          {/* STATUS */}
          <select
            className="p-3 border rounded-lg"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {/* SUBMIT BUTTONS */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>

            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              {data ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAuthorModal;
