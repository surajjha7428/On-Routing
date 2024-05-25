// src/components/Navbar.jsx

import { Link } from "react-router-dom"; // Importing Link component for navigation

// Array of link objects containing path and label
const links = [
  {
    to: "/",
    label: "HOME",
  },
  {
    to: "/about",
    label: "ABOUT",
  },
  {
    to: "/contact",
    label: "CONTACT",
  },
  {
    to: "/users",
    label: "USERS",
  },
  {
    to: "/login",
    label: "LOGIN",
  },
  {
    to: "/courses",
    label: "COURSES",
  },
  {
    to: "/learn",
    label: "LEARN",
  },
  {
    to: "/fees",
    label: "FEES",
  },
];

// Navbar component definition
export default function Navbar() {
  return (
    <div className="navbar">
      {links?.map((link) => (
        <Link to={link.to} key={link.to}>
          {link.label} {/* Rendering each link */}
        </Link>
      ))}
    </div>
  );
}
