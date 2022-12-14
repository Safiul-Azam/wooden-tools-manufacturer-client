import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ productDeleting, refetch, setProductDeleting }) => {
  const { productName, _id } = productDeleting;
  const handleDeleteProduct = () => {
    fetch(`https://wooden-tools.onrender.com/handTools/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setProductDeleting(null);
          toast.success("Delete successfully");
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-md text-warning">
            Are you sure delete the{" "}
            <span className="text-xl">{productName}</span> from database and ui
            both!!!
          </h3>
          <p className="py-4 text-error">You won't find it anywhere!</p>
          <div className="modal-action">
            <button
              className="btn btn-sm btn-error text-white"
              onClick={handleDeleteProduct}
            >
              Confirm Delete
            </button>
            <label
              for="delete-product-modal"
              className="btn btn-sm btn-secondary"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
