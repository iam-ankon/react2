// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// const OrderDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     if (!id) {
//       alert("Order ID is missing!");
//       return;
//     }

//     axios
//       .get(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`)
//       .then((response) => {
//         console.log("Order fetched:", response.data); // Debug
//         setOrder(response.data);
//         setFormData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching order details:", error);
//         alert("Failed to fetch order details.");
//       });
//   }, [id]);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleDelete = () => {
//     if (window.confirm("Are you sure you want to delete this order?")) {
//       axios
//         .delete(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`)
//         .then(() => {
//           alert("Order deleted successfully!");
//           navigate("/");
//         })
//         .catch((error) => {
//           console.error("Error deleting order:", error);
//         });
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`, formData)
//       .then((response) => {
//         alert("Order updated successfully!");
//         setOrder(response.data);
//         setIsEditing(false);
//       })
//       .catch((error) => {
//         console.error("Error updating order:", error);
//       });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   if (!order) {
//     return <div>Loading order details...</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Order Details</h2>
//       <div className="bg-white p-4 rounded shadow">
//         {isEditing ? (
//           <form onSubmit={handleSave}>
//             {Object.keys(formData).map((field) => (
//               <div key={field} className="mb-4">
//                 <label className="block text-sm font-semibold mb-2">
//                   {field.replace(/_/g, " ")}
//                 </label>
//                 <input
//                   className="block w-full p-2 border rounded"
//                   type={typeof formData[field] === "number" ? "number" : "text"}
//                   name={field}
//                   value={formData[field] || ""}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             ))}
//             <button
//               type="submit"
//               className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//             >
//               Save
//             </button>
//           </form>
//         ) : (
//           <>
//             {Object.entries(order).map(([key, value]) => (
//               <p key={key}>
//                 <strong>{key.replace(/_/g, " ")}:</strong> {value || "N/A"}
//               </p>
//             ))}
//             <div className="mt-4">
//               <button
//                 onClick={handleEdit}
//                 className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 mr-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderDetail;







import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`)
      .then((response) => {
        setOrder(response.data);
        setFormData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order details:", error);
      });
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      axios
        .delete(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`)
        .then(() => {
          alert("Order deleted successfully!");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error deleting order:", error);
        });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:8000/DatabaseDesign/orders/${id}/`, formData)
      .then((response) => {
        alert("Order updated successfully!");
        setOrder(response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating order:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  // Disable the Save button if no changes are made
  const isSaveDisabled = JSON.stringify(formData) === JSON.stringify(order);

  return (
    <div className="max-w-4xl mx-auto    flex justify-center">
      <h2 className="text-3xl font-semibold text-center mb-6 ">
        Order Details
      </h2>
      <div className="space-y-6  flex justify-center">
        {isEditing ? (
          <form onSubmit={handleSave}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.keys(formData).map((field) => (
                <div key={field} className="flex flex-col">
                  <label
                    htmlFor={field}
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.replace(/_/g, " ")}
                  </label>
                  <input
                    className="input input-bordered w-full p-2 border rounded-md"
                    type={
                      typeof formData[field] === "number" ? "number" : "text"
                    }
                    name={field}
                    id={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`btn btn-primary w-full mt-6 ${
                isSaveDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSaveDisabled}
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="overflow-x-auto  flex justify-center">
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-full max-w-4xl">
                <table className="w-full table-auto border-collapse border border-gray-200">
                  <thead>
                    <tr className="text-sm text-gray-600 bg-gray-100">
                      <th className="p-3 text-center border border-gray-300">
                        {" "}
                        {/* Centered header */}
                        Field
                      </th>
                      <th className="p-3 text-center border border-gray-300">
                        {" "}
                        {/* Centered header */}
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(order).map(([key, value]) => (
                      <tr key={key} className="odd:bg-gray-50 text-center">
                        {" "}
                        {/* Center the entire row */}
                        <td className="p-4 text-sm font-semibold border border-gray-300">
                          {" "}
                          {/* Centered field */}
                          {key.replace(/_/g, " ")}
                        </td>
                        <td className="p-4 text-sm border border-gray-300">
                          {" "}
                          {value || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: "12rem", marginTop: "10px" }}>
          <button
            onClick={handleEdit}
            style={{ backgroundColor: "green", color: "white" }}
            className="px-4 py-2 rounded mr-4"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            style={{ backgroundColor: "red", color: "white" }}
            className="px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;