import React from "react";
import Sidebar from "../template/Sidebar";
import Topbar from "../template/Topbar";
import Content from "../template/Content";
import Footer from "../template/Footer";

function AdminLayout({ children }) {
  return (
    <div className="wrapper">
      <Sidebar />
      <Topbar />
      <Content children={children} />
      <Footer />
    </div>
  );
}

export default AdminLayout;
