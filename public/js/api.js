export async function createUser({ firstName, lastName, email }) {
  const res = await fetch("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, email }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create user: ${res.status}`);
  }

  return await res.json();
}

export async function getAllUsers() {
  const res = await fetch("/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return await res.json();
}