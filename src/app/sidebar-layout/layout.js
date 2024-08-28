import React from "react";
import Link from "next/link";
import styles from "./layout.module.css";

export default function SidebarLayout({ children }) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>
              <Link href="/sidebar-layout/page1">Page 1</Link>
            </li>
            <li>
              <Link href="/sidebar-layout/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
