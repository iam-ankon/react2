import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex-1">
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </div>
      <div className="flex-0.5">
        <Link to="/home" className="hover:underline">
          Add Inquiry
        </Link>
      </div>
      <div className="flex-0">
        <Link to="/inquiries/i" className="hover:underline">
          Inquiries
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/orders/new" className="hover:underline">
          Add Orders
        </Link>
      </div>
      <div className="flex-1">
        <Link to="/order" className="hover:underline">
          Orders List
        </Link>
      </div>
      <div className="flex-0">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
//     <div className="flex-1">
//       <Link to="/" className="hover:underline">
//         Home
//       </Link>
//     </div>
//     <div className="flex-0.5">
//       <Link to="/home" className="hover:underline">
//         AddInquiey
//       </Link>
//     </div>
//     <div className="flex-0">
//       <Link to="/inquiries/i" className="hover:underline">
//         Inquiries
//       </Link>
//     </div>
//     <div className="flex-1">
//       <Link to="/orders/new" className="hover:underline">
//         AddOrders
//       </Link>
//     </div>
//     <div className="flex-1">
//       <Link to="/order" className="hover:underline">
//         OrdersList
//       </Link>
//     </div>

//   </nav>
// );

// export default Navbar;
