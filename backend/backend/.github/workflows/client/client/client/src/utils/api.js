const API_BASE = process.env.REACT_APP_API_URL;

export async function fetchBugs() {
  const res = await fetch(`${API_BASE}/bugs`);
  return await res.json();
}

export async function createBug(data) {
  const res = await fetch(`${API_BASE}/bugs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function updateBug(id, data) {
  const res = await fetch(`${API_BASE}/bugs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}
export async function deleteBug(id) {
  await fetch(`${API_BASE}/bugs/${id}`, {
    method: 'DELETE',
  });
}