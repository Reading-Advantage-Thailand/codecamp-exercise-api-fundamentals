// TODO: Define a User interface matching JSONPlaceholder response:
// { id, name, username, email, phone, website, company: { name } }

// TODO: Define a Post interface:
// { id, userId, title, body }

const BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO: Implement fetchUsers() — GET /users
// - Fetch all users from the API
// - Check response.ok and throw on error
// - Return typed User array
export async function fetchUsers() {
  // Your code here
  return [];
}

// TODO: Implement fetchUser(id) — GET /users/:id
// - Fetch a single user
// - Return null if not found (404)
export async function fetchUser(id: number) {
  // Your code here
  return null;
}

// TODO: Implement fetchUserPosts(userId) — GET /users/:userId/posts
// - Fetch all posts by a specific user
// - Return typed Post array
export async function fetchUserPosts(userId: number) {
  // Your code here
  return [];
}
