import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="/public/error.gif" alt="" />
      <h1 style={{ color: "crimson" }}>Page Not Found</h1>
      <button className="btn btn-secondary" style={{ marginTop: "20px" }}>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
