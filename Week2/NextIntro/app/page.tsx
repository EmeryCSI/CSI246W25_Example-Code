/**
 * Home Page Component
 * This is the main landing page of the application that gets rendered at the root route ('/')
 * Displays a welcome message and navigation links to other pages
 */
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Hello, Next.js!</h2>
      <nav>
        <ul>
          <li>
            <Link href="/counter">Client-side Counter Demo</Link>
          </li>
          <li>
            <Link href="/servCounter/0">Server-side Counter Demo</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
