// Inefficient code for testing
async function loadUsers(ids) {
  const results = [];
  for (const id of ids) {
    const res = await fetch(`/api/users/${id}`); // N+1 requests
    results.push(await res.json());
  }
  return results;
}

setInterval(() => fetch('/api/status'), 200); // aggressive polling
