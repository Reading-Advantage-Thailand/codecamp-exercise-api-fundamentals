export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error(`Failed to fetch users: ${response.status}`);
  return response.json();
}

export async function fetchUser(id: number): Promise<User | null> {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Failed to fetch user: ${response.status}`);
  return response.json();
}

export async function fetchUserPosts(userId: number): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
  if (!response.ok) throw new Error(`Failed to fetch posts: ${response.status}`);
  return response.json();
}
