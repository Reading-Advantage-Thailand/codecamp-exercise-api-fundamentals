import { notFound } from "next/navigation";
import { fetchUser, fetchUserPosts } from "@/lib/api";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await fetchUser(Number(id));

  if (!user) notFound();

  const posts = await fetchUserPosts(user.id);

  return (
    <div>
      <h2>{user.name}</h2>
      <div style={{ marginBottom: "2rem" }}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
      </div>

      <h3>Posts ({posts.length})</h3>
      <div>
        {posts.map((post) => (
          <article key={post.id} style={{ borderBottom: "1px solid #e2e8f0", padding: "1rem 0" }}>
            <h4>{post.title}</h4>
            <p style={{ color: "#718096" }}>{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
