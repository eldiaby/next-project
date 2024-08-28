"use client";

import React from "react";
import { navItems } from "./navItem";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${path === item.href ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
