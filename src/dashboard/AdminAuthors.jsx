import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import EditAuthorModal from "./EditAuthorModal";

const AdminAuthors = () => {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "Writer",
      status: "Active",
      image: "/images/user1.jpg",
      social: {
        facebook: "https://facebook.com/john",
        twitter: "https://twitter.com/john",
        linkedin: "https://linkedin.com/in/john",
      },
    },
  ]);

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [editData, setEditData] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // DELETE HANDLER
  const handleDelete = () => {
    setAuthors(authors.filter((a) => a.id !== deleteId));
    setShowDelete(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Authors</h2>

        <button
          onClick={() => setShowEditModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} /> Add Author
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-6 shadow rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Author</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {authors.map((author) => (
              <tr key={author.id} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={author.image}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {author.name}
                </td>

                <td className="p-3">{author.email}</td>
                <td className="p-3">{author.role}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      author.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {author.status}
                  </span>
                </td>

                <td className="p-3 text-right flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setEditData(author);
                      setShowEditModal(true);
                    }}
                    className="p-2 bg-blue-100 rounded hover:bg-blue-200"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => {
                      setDeleteId(author.id);
                      setShowDelete(true);
                    }}
                    className="p-2 bg-red-100 rounded hover:bg-red-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION POPUP */}
      {showDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-3">Delete Author?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this author?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDelete(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT / ADD AUTHOR MODAL */}
      {showEditModal && (
        <EditAuthorModal
          data={editData}
          setShow={setShowEditModal}
          setAuthors={setAuthors}
          authors={authors}
        />
      )}
    </div>
  );
};

export default AdminAuthors;
