import React from "react";
import Button from "@mui/material/Button";
import { MdLogin } from "react-icons/md";
import DashboardIcon from "@mui/icons-material/Dashboard";

import "./ui/homepage.css";

const Homepage = () => {
  return (
    <div
      className="homepage-container"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="homepage-content">
        <div className="flex flex-col items-center">
          <DashboardIcon
            color="primary"
            style={{ fontSize: 60 }}
            className="animate-bounce"
          />
          <h1 className="homepage-heading">Admin Dashboard</h1>
          <p className="homepage-text">
            Streamline your administrative tasks with ease and efficiency.
          </p>
          <Button
            variant="contained"
            color="primary"
            startIcon={<MdLogin />}
            href="/login"
            size="large"
          >
            Login to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
