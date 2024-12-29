// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/DatabaseDesign/orders/")
//       .then((response) => {
//         setOrders(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching orders:", error);
//       });
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/orders/${id}`);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Orders</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {orders.map((order) => (
//           <div
//             key={order.id}
//             className="inquiry-card cursor-pointer"
//             onClick={() => handleCardClick(order.id)}
//           >
//             <h2 className="text-xl font-semibold mb-2">
//               {order.master_order_no}
//             </h2>
//             <p>
//               <strong>Supplier:</strong> {order.supplier_name}
//             </p>
//             <p>
//               <strong>Buyer:</strong> {order.buyer_name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderList;






import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const OrderList = () => {
  const [inquiries, setInquiries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/DatabaseDesign/orders/")
      .then((response) => {
        setInquiries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inquiries:", error);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <div style={{ overflowX: "auto", width: "100%" }}>
      <table
        className="table"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            {[
              "Master Order No",
              "Order No",
              "Buyer Name",
              "Supplier Name",
              "Shipment Date",
              "Purchase Order Received Date",
            ].map((header, index) => (
              <th
                key={index}
                style={{
                  padding: "1vw 2vw", // Responsive padding (viewport-based units)
                  textAlign: "left", // Align text to the left
                  border: "1px solid #ccc",
                }}
              >
                {header}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          {inquiries.map((order, rowIndex) => (
            <tr
              key={rowIndex}
              className="inquiry-card cursor-pointer"
              onClick={() => handleCardClick(order.id)}
            >
              <td
                style={{
                  padding: "1vw 2vw", // Match padding with <th>
                  border: "1px solid #ccc",
                }}
              >
                <div className="font-bold">{order.master_order_no}</div>
              </td>

              <td style={{ padding: "1vw 2vw", border: "1px solid #ccc" }}>
                {order.order_no}
              </td>
              <td style={{ padding: "1vw 2vw", border: "1px solid #ccc" }}>
                {order.buyer_name}
              </td>
              <td style={{ padding: "1vw 2vw", border: "1px solid #ccc" }}>
                {order.supplier_name}
              </td>
              <td style={{ padding: "1vw 2vw", border: "1px solid #ccc" }}>
                {order.shipment_date}
              </td>
              <td style={{ padding: "1vw 2vw", border: "1px solid #ccc" }}>
                {order.purchase_order_received_date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
