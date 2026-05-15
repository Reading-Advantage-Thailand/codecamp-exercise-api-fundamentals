// TODO: Import fetchUser and fetchUserPosts from @/lib/api

// TODO: Implement this Server Component
// - Parse the id from params
// - Fetch the user and their posts
// - Show "User not found" if the user doesn't exist
// - Display: user name, email, phone, website, company
// - Display a list of the user's posts (title + body)

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h2>User Detail</h2>
      <p>TODO: Fetch user #{id} and display their info and posts here.</p>
    </div>
  );
}
