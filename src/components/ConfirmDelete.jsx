import { AlertTriangle } from "lucide-react";

const ConfirmDelete = ({ open, onClose, onConfirm, itemName }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 w-[90%] max-w-md rounded-xl shadow-lg animate-fadeIn">

        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle size={28} className="text-red-600" />
          <h2 className="text-xl font-semibold">Confirm Delete</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{itemName}</span>?  
          <br />This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
