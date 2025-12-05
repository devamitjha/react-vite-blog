import { Link } from "react-router";
import { 
  FileText, 
  FilePlus2, 
  MessageCircle, 
  ListOrdered, 
  TrendingUp 
} from "lucide-react";

const Dashboard = () => {
  // Example stats (replace with real API data)
  const stats = [
    { label: "Total Posts", value: 120, icon: <FileText size={22} /> },
    { label: "Drafts", value: 15, icon: <FilePlus2 size={22} /> },
    { label: "Comments", value: 450, icon: <MessageCircle size={22} /> },
    { label: "Categories", value: 12, icon: <ListOrdered size={22} /> }
  ];

  const recentPosts = [
    { title: "How to Improve SEO in 2025", status: "Published", date: "12 Nov 2025" },
    { title: "10 Tips for Blogging Success", status: "Draft", date: "10 Nov 2025" },
    { title: "React vs Next.js – Updated Guide", status: "Published", date: "09 Nov 2025" }
  ];

  const recentComments = [
    { user: "Rahul Sharma", comment: "Great article!", post: "Improve SEO in 2025" },
    { user: "Priya Verma", comment: "Very helpful content", post: "Blogging Tips" }
  ];

  return (
    <div className="w-full">

      {/* Top Stats */}
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => (
          <div key={item.label} className="p-5 bg-white shadow rounded-xl flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">{item.icon}</div>
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          to="/admin/create-post"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Create New Post
        </Link>
        <Link
          to="/admin/categories"
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          Manage Categories
        </Link>
        <Link
          to="/admin/tags"
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          Manage Tags
        </Link>
      </div>

      {/* Recent Posts */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Recent Posts</h3>
        <div className="overflow-x-auto bg-white shadow rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Title</th>
                <th className="p-3">Status</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((post) => (
                <tr key={post.title} className="border-b">
                  <td className="p-3">{post.title}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        post.status === "Published"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="p-3">{post.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Comments */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Recent Comments</h3>
        <div className="bg-white shadow rounded-xl p-4">
          {recentComments.map((comment, index) => (
            <div key={index} className="border-b pb-3 mb-3">
              <p className="font-medium">{comment.user}</p>
              <p className="text-gray-600 text-sm">{comment.comment}</p>
              <p className="text-gray-400 text-xs mt-1">On: {comment.post}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
