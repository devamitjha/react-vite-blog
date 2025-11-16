import { useState } from "react";
import ConfirmDelete from "@/components/ConfirmDelete";
import { FileText, Edit, Trash2, PlusCircle } from "lucide-react";

const AllPosts = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 1, title: "How to Learn React", category: "Technology", status: "Published", date: "2025-01-12" },
    { id: 2, title: "Best Gadgets 2025", category: "Lifestyle", status: "Draft", date: "2025-01-10" },
  ];

  const handleDeleteClick = (post) => {
    setSelectedPost(post);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    console.log("Deleting post:", selectedPost);
    // 🔥 Call API here to delete post
    // axios.delete(`/api/posts/${selectedPost.id}`)

    setOpenDelete(false);
    setSelectedPost(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full">

      {/* DELETE POPUP */}
      <ConfirmDelete
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
        itemName={selectedPost?.title}
      />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText size={22} /> All Posts
        </h2>

        <a
          href="/admin/create-post"
          className="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <PlusCircle size={20} />
          Create New Post
        </a>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{post.title}</td>
                <td className="p-3">{post.category}</td>

                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    post.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {post.status}
                  </span>
                </td>

                <td className="p-3 text-gray-600">{post.date}</td>

                <td className="p-3 flex justify-end gap-4">
                  <a href={`/admin/edit-post/${post.id}`} className="text-blue-600 hover:text-blue-800">
                    <Edit size={18} />
                  </a>

                  <button
                    onClick={() => handleDeleteClick(post)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-end mt-6 gap-3">
        <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
          Prev
        </button>
        <button className="px-3 py-1 border rounded-lg bg-blue-600 text-white">
          1
        </button>
        <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">
          Next
        </button>
      </div>

    </div>
  );
};

export default AllPosts;
