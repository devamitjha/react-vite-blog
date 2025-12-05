import { useState } from "react";
import { Check, X, Trash2, MessageSquare, Search } from "lucide-react";

import ReplyModal from "./ReplyModal";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Amit Kumar",
      email: "amit@gmail.com",
      comment: "This blog helped me a lot. Thanks!",
      post: "How to use React Hooks",
      date: "2025-01-10",
      status: "Pending",
    },
    {
      id: 2,
      author: "John Doe",
      email: "john@gmail.com",
      comment: "Very well written article!",
      post: "Understanding SEO",
      date: "2025-01-09",
      status: "Approved",
    },
  ]);

  const [search, setSearch] = useState("");

  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const [replyData, setReplyData] = useState(null);

  // DELETE COMMENT
  const handleDelete = () => {
    setComments(comments.filter((c) => c.id !== deleteId));
    setShowDelete(false);
  };

  // APPROVE COMMENT
  const approveComment = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, status: "Approved" } : c
      )
    );
  };

  // REJECT COMMENT
  const rejectComment = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, status: "Rejected" } : c
      )
    );
  };

  // FILTER
  const filtered = comments.filter((c) =>
    c.comment.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Comments</h2>

        <div className="relative w-64">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search comments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-lg p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Author</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Post</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{c.author}</td>

                <td className="p-3 text-gray-600">{c.comment}</td>

                <td className="p-3 text-blue-600">{c.post}</td>

                <td className="p-3">{c.date}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      c.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : c.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex justify-end gap-3">

                    {/* APPROVE */}
                    {c.status !== "Approved" && (
                      <button
                        onClick={() => approveComment(c.id)}
                        className="p-2 bg-green-100 rounded-lg hover:bg-green-200"
                      >
                        <Check size={18} />
                      </button>
                    )}

                    {/* REJECT */}
                    {c.status !== "Rejected" && (
                      <button
                        onClick={() => rejectComment(c.id)}
                        className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                      >
                        <X size={18} />
                      </button>
                    )}

                    {/* REPLY */}
                    <button
                      onClick={() => setReplyData(c)}
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                    >
                      <MessageSquare size={18} />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => {
                        setDeleteId(c.id);
                        setShowDelete(true);
                      }}
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* DELETE POPUP */}
      {showDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-bold">Delete Comment?</h3>
            <p className="text-gray-600 mt-2 mb-6">
              Are you sure you want to delete this comment?
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

      {/* REPLY MODAL */}
      {replyData && (
        <ReplyModal data={replyData} setReplyData={setReplyData} />
      )}
    </div>
  );
};

export default Comments;
