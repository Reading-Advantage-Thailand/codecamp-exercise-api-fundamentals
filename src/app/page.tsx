import Link from "next/link";
import { fetchUsers } from "@/lib/api";

export default async function HomePage() {
  const users = await fetchUsers();

  return (
    <div>
      <h2>Users</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "0.5rem", padding: "1.5rem", background: "white" }}>
              <h3 style={{ marginBottom: "0.25rem" }}>{user.name}</h3>
              <p style={{ color: "#718096", fontSize: "0.875rem" }}>{user.email}</p>
              <p style={{ color: "#a0aec0", fontSize: "0.875rem" }}>{user.company.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
