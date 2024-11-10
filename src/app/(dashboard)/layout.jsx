import Link from "next/navigation";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/dashboard/settings">Settings</Link></li>
          <li><Link href="/dashboard/profile">Profile</Link></li>
        </ul>
      </nav>
      <main>
        {children} {/* Nested content goes here */}
      </main>
    </div>
  );
}
