import { useState } from "react";

const ReplyModal = ({ data, setReplyData }) => {
  const [reply, setReply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reply Sent:", reply);
    setReplyData(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Reply to Comment</h3>
        <p className="text-gray-600 text-sm mb-4">From: {data.author}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            placeholder="Write your reply..."
            rows="4"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            className="p-3 border rounded-lg"
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setReplyData(null)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Send Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReplyModal;
