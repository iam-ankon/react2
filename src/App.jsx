import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import InquiryAddPage from "./pages/InquiryAddPage";
import InquiryDetailPage from "./pages/InquiryDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import InquiryShortdetailPage from "./pages/InquiryShortdetailPage";

import HomePage from "./components/Home";
import OrderListPage from "./pages/OrderListPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import OrderFormPage from "./pages/OrderFormPage";
import LoginPage from "./pages/LoginPage";

const Layout = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/login"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<InquiryAddPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/inquiries/:id" element={<InquiryDetailPage />} />
        <Route path="/inquiries/i" element={<InquiryShortdetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/order" element={<OrderListPage />} />
        <Route path="/orders/new" element={<OrderFormPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <Layout />
  </Router>
);

export default App;
