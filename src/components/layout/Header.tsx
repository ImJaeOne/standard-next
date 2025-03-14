import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/" className="nav-link">
            Home(SSG) - force-cache
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/news" className="nav-link">
            News(ISR) - force-cache
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blogs" className="nav-link">
            Blogs(SSR) - no-store
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/todolist" className="nav-link">
            TodoList(CSR) - no-store
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
